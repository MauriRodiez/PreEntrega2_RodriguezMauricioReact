import { useEffect, useState } from "react"
import { endpoints } from "../utils/endpoints";
import ProductCard from "../components/ProductCard";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const maxProduct = 16;

  const { categoryId } = useParams();

  useEffect( () => {
    
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(endpoints.url);

        if(!response.ok){
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();

        if(categoryId){
          const filterByCategory = result.filter( (product) => product.category.id === parseInt(categoryId));
          setData(filterByCategory);
        } else{
          setData(result);
        }       

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); 
      }
    }

    fetchData();
  }, [categoryId]);

  if(loading) return <p>Cargando datos ...</p>
  if(error) return <p>Error: {error}</p>

  return (
    <Box
      sx={{
        display: "flex",
        marginTop: 10,
        marginBottom: 10,
        flexWrap: "wrap", 
        justifyContent: "center", 
        gap: 5, 
        padding: 2, 
      }}
    >
      {data.slice(0, maxProduct).map((product) => (
        <ProductCard
          key={product.id} {...product}
        />
      ))}
    </Box>
  )
}

export default ItemListContainer
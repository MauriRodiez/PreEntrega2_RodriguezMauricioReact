import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { endpoints } from "../utils/endpoints";
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const {id} = useParams();
  console.log("Este es el id recuperado " + id);
  useEffect( () => {
    
    const fetchData = async () => {
      try {
        setError(null);
        const response = await fetch(endpoints.url);
        if(!response.ok){
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        const resultProduct = result.find((product) => product.id === parseInt(id));
        console.log("Filtered product:", resultProduct);

        setData(resultProduct);

      } catch (error) {
        setError(error.message);
      } 
    }

    fetchData();
  }, [id]);

  return (
    <div>
      <h1>
        Detalle del producto
      </h1>
      <ItemDetail product = {data} />
    </div>
  )
}

export default ItemDetailContainer
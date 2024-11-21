import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, CircularProgress, Alert } from "@mui/material";
import { endpoints } from "../utils/endpoints";
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        const response = await fetch(endpoints.url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        const resultProduct = result.find((product) => product.id === parseInt(id));

        setData(resultProduct);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [id]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: 2,
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
        Detalle del producto
      </Typography>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      {!data && !error && <CircularProgress />}
      {data && <ItemDetail product={data} />}
    </Box>
  );
};

export default ItemDetailContainer;

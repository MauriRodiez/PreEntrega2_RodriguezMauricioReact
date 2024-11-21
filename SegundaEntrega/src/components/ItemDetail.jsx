import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";

const ItemDetail = ({ product }) => {
  if (!product) {
    return (
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          color: "text.secondary",
          mt: 4,
        }}
      >
        El producto no existe
      </Typography>
    );
  }

  return (
    <Card
      sx={{
        maxWidth: 600, 
        margin: "0 auto", 
        p: 2,
        borderRadius: 2,
        boxShadow: 3,
        bgcolor: "background.paper",
      }}
    >
      <CardMedia
        component="img"
        image={product.images[0]}
        alt={product.title}
        sx={{
          height: 300,
          objectFit: "cover",
          borderRadius: 1,
        }}
      />
      <CardContent>
        <Typography
          variant="h5"
          component="h2"
          sx={{
            mb: 2,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {product.title}
        </Typography>
        <Typography
          variant="subtitle1"
          component="h5"
          sx={{
            color: "primary.main",
            textAlign: "left",
            mb: 2,
          }}
        >
          {product.category.name}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "justify",
            color: "text.primary",
          }}
        >
          {product.description}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "justify",
            color: "text.primary",
            fontWeight:"bold",
            fontSize:"1.5rem"
          }}
        >
          $ {product.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ItemDetail;

  
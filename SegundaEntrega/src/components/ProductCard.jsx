import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Chip from "@mui/material/Chip"; // Importa el componente Chip
import Box from "@mui/material/Box";
import { routes } from "../utils/routes";
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const ProductCard = ({ id, title, description, images, category, price }) => {
  return (
    <Card sx={{ maxWidth: 345, position: "relative" }}>
      {/* Overlay para la categoría */}
      <Box
        sx={{
          position: "absolute",
          top: 8,
          left: 8,
          zIndex: 1,
        }}
      >
        <Chip label={category.name} color="primary" size="small" />
      </Box>

      <CardActionArea>
        <CardMedia component="img" height="140" image={images[0]} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary", fontWeight:"bold", fontSize:"1.5rem " }}>
            $ {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link
          component={RouterLink}
          to={`${routes.detail.replace(":id", id)}`}
          style={{ textDecoration: "none" }}
        >
          <Button
            size="small"
            color="primary"
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              textTransform: "none",
              fontWeight: "bold",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "primary.dark",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;

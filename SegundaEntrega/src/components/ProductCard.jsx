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

const ProductCard = ({ id, title, description, images, category }) => {
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
        <CardMedia
          component="img"
          height="140"
          image={images[0]}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link
          component={RouterLink}
          to={`${routes.detail.replace(':id', id)}`}
        >
          <Button size="small" color="primary">
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;

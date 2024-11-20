import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { routes } from '../utils/routes';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElServices, setAnchorElServices] = useState(null);
  const cartItemCount = 3; 

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleServicesMenuOpen = (event) => {
    setAnchorElServices(event.currentTarget);
  };

  const handleServicesMenuClose = () => {
    setAnchorElServices(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar>
        {/* Menú hamburguesa visible solo en pantallas pequeñas y medianas */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Home</MenuItem>
            <MenuItem onClick={handleMenuClose}>Categoria</MenuItem>
            <MenuItem onClick={handleMenuClose}>Acerca de</MenuItem>
          </Menu>
        </Box>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link
            component={RouterLink}
            to={routes.home}
            underline="none"
            sx={{
              color: "#fff",
              textDecoration: "none",
            }}
          >
            LA TIENDA
          </Link>
        </Typography>

        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          <Link
            component={RouterLink}
            to={routes.home}
            underline="none"
            sx={{
              textDecoration: "none",
            }}
          >
            <Button
              color="inherit"
              sx={{
                color: "#fff",
                ":hover": {
                  backgroundColor: "#ff0",
                  color: "#000",
                },
              }}
            >
              Home
            </Button>
          </Link>

          <Link
            component={RouterLink}
            to="#"
            underline="none"
            sx={{
              textDecoration: "none",
            }}
          >
            <Button
              color="inherit"
              onClick={handleServicesMenuOpen}
              sx={{
                color: "#fff", 
                ":hover": {
                  backgroundColor: "#ff0", 
                  color: "#000", 
                },
              }}
            >
              Categorias
            </Button>
          </Link>
          <Menu
            anchorEl={anchorElServices}
            open={Boolean(anchorElServices)}
            onClose={handleServicesMenuClose}
          >
            <Link 
              component={RouterLink}
              to={`${routes.category}/1`}
              underline="none"
              sx={{
                textDecoration: "none",
              }}
            >
              <MenuItem onClick={handleServicesMenuClose}>Vestimenta</MenuItem>
            </Link>
            <Link 
              component={RouterLink}
              to={`${routes.category}/4`}
              underline="none"
              sx={{
                textDecoration: "none",
              }}
            >
            <MenuItem onClick={handleServicesMenuClose}>Calzado</MenuItem>
            </Link>
            <Link 
              component={RouterLink}
              to={`${routes.category}/2`}
              underline="none"
              sx={{
                textDecoration: "none",
              }}
            >
            <MenuItem onClick={handleServicesMenuClose}>Electronicos</MenuItem>
            </Link>
          </Menu>

          <Link
            component={RouterLink}
            to="#"
            underline="none"
            sx={{
              textDecoration: "none",
            }}
          >
            <Button
              color="inherit"
              sx={{
                color: "#fff",
                ":hover": {
                  backgroundColor: "#ff0",
                  color: "#000",
                },
              }}
            >
          Acerca de
            </Button>
          </Link>

          <Link
            component={RouterLink}
            to="#"
            underline="none"
            sx={{
              textDecoration: "none",
            }}
          >
            <Button
              color="inherit"
              sx={{
                color: "#fff",
                ":hover": {
                  backgroundColor: "#ff0",
                  color: "#000",
                },
              }}
            >
          Contacto
            </Button>
          </Link>

          {/* Icono de carrito con contador */}
          <IconButton color="inherit">
            <Badge badgeContent={cartItemCount} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

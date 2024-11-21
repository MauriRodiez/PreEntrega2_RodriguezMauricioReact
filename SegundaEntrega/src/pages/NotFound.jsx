import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { routes } from '../utils/routes';

const NotFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        p: 3,
      }}
    >
      <Typography variant="h1" component="h1" sx={{ fontSize: '6rem', fontWeight: 'bold' }}>
        404
      </Typography>
      <Typography variant="h6" sx={{ mb: 2 }}>
        La página que buscas no existe.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to={routes.home}
        sx={{
          textTransform: 'none',
        }}
      >
        Regresar a Inicio
      </Button>
    </Box>
  );
};

export default NotFound;

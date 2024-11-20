import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{
        backgroundColor: '#1976d2',
        color: 'white',
        py: 3,
        mt: 4,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          LA TIENDA
        </Typography>
        <Typography variant="body2" align="center">
          {'© '}
          {new Date().getFullYear()} LA TIENDA. Todos los derechos reservados.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
            Términos de servicio
          </Link>
          <Link href="#" color="inherit" underline="hover" sx={{ mx: 1 }}>
            Política de privacidad
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

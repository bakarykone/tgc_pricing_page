import React from 'react';
import { Box, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box textAlign="center">
      <Typography variant="h3" fontWeight="bold">
        DÉCOUVREZ <span style={{ color: '#3F5EFB' }}>NOS OFFRES</span>
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" mt={2} boxSizing={'border-box'}>
        Trouvez le plan parfait pour votre entreprise parmi nos différentes options d'abonnement mensuel, trimestriel,
        semestriel, annuel et biennal.
      </Typography>
    </Box>
  );
};

export default Header;
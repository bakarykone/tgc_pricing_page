import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';


const SubscriptionButtons = () => {
  const [selected, setSelected] = useState('1 Mois');
  const buttons = [
    { durée: '1 Mois', remise: '' },
    { durée: '3 Mois', remise: '-20% / mois' },
    { durée: '6 Mois',  remise: '-40% / mois' },
    { durée: '24 Mois', remise: '-50% / mois' },
  ];

  return (
    <Box display="flex" justifyContent="center" mt={4} gap={2} >
      {buttons.map((button, index) => (
        <Box key={index} display="flex" flexDirection="column" alignItems="center" mx={4}>
          <Button
            variant="text"
            sx={{
              color: selected === button.durée ? '#007FFF' : 'gray',
              borderBottom: selected === button.durée ? '2px solid #007FFF' : 'none',
              padding: '8px 16px', // Adding padding to the Button component
            }}
            onClick={() => setSelected(button.durée)}
          >
            {button.durée}
          </Button>
          {button.remise && (
            <Typography variant="caption" color="textSecondary" mt={0.5}>
              {button.remise}
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default SubscriptionButtons;
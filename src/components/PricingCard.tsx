import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, List, ListItem, Box } from '@mui/material';
import { grey } from '@mui/material/colors';

interface PricingCardProps {
  title: string;
  icon?: React.ReactNode;
  price?: string;
  features: string[];
  buttonText: string;
  borderColor?: string;
  textColor?: string;
  paragraph?: string;
}

const PricingCard = ({ title, icon, price, features, buttonText, borderColor, textColor, paragraph }: PricingCardProps) => {
  return (
    <Card
      sx={{
        width: 300,
        borderWidth: borderColor ? 2 : 0,
        transition: 'transform 0.3s, box-shadow 0.3s',
        margin: 1,
        padding: 4,
        '&:hover': {
          transform: 'scale(1.15)',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
          backgroundColor: '#F0F3FF',
          border: 1,
          borderColor: '#3F5EFB',
          '& .title, & .price, & .icon': {
            color: '#3F5EFB',
          },
        },
      }}
    >
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
          <Typography
            className="title"
            variant="h6"
            fontWeight="bold"
            color={textColor || 'textPrimary'}
            mb={2}
          >
            {title}
          </Typography>
          {icon && (
            <Box display="flex" justifyContent="center" className="icon">
              {icon}
            </Box>
          )}
          <Typography
            className="price"
            variant="h4"
            fontWeight="bold"
            color={textColor || 'textPrimary'}
            mb={3}
          >
            {price}
          </Typography>
        </Box>
        <List>
          {features.map((feature, index) => (
            <ListItem key={index}>{feature}</ListItem>
          ))}
        </List>
      </CardContent>
      {paragraph && <Typography mb={3}>{paragraph}</Typography>}
      <CardActions>
        <Button
          fullWidth
          variant="outlined"
          sx={{
            color: 'black',
            backgroundColor: 'white',
            borderColor: '#4E00A2',
            fontWeight: 'bold',
            marginTop: 6,
            '&:hover': {
              backgroundColor: '#F59000',
              color: 'white',
            },
          }}
        >
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
};

export default PricingCard;

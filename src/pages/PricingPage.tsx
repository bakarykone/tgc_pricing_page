import React from 'react';
import { Box } from '@mui/material';
import Header from '../components/Header';
import SubscriptionButtons from '../components/SubscriptionsButtons';
import PricingCard from '../components/PricingCard';
import DomainAddOutlinedIcon from '@mui/icons-material/DomainAddOutlined';

const PricingPage = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={8}>
      <Header />
      <SubscriptionButtons />

      <Box display="flex" justifyContent="center" mt={10} gap={4}>
        <PricingCard
          title="Standard"
          price="169€"
          features={[
            '✔️  Accès aux jeux en version non personnalisés',
            '✔️  3 actions disponibles',
            '✔️  Sélection de l\'ordre de priorité des actions',
            '✔️  Sélection des cadeaux',
            '✔️  Choix limité de pictogrammes pour vos jeux',
            '✔️  Accès au tableau de bord pour suivre vos activités',
          ]}
          buttonText="Je sélectionne cette offre"
        />

        <PricingCard
          title="Premium"
          price="199€"
          features={[
            '✔️  3 actions disponibles',
            '✔️  Sélection de l\'ordre de priorité des actions',
            '✔️  Sélection des cadeaux',
            '✔️  Accès au tableau de bord pour suivre vos activités',
            '🎯  Accès aux jeux en version personnalisés',
            '🎯  Intégration de vos couleurs dans les jeux',
            '🎯  Intégration de votre logo dans les jeux',
            '🎯  Intégration vos pictogrammes dans les jeux',
          ]}
          buttonText="Je sélectionne cette offre"
        />

        <PricingCard
          title="Sur Devis"
          icon={<DomainAddOutlinedIcon style={{ fontSize: 80 }}/>}
          features={[
            '➔  Vous avez plusieurs établissements ?',
            '➔  Vous souhaitez un jeu sur mesure à l\'effigie de votre marque ?',
            '➔  Vous souhaitez une intégration caisse ?',
          ]}
          paragraph="Un devis sur mesure est nécessaire pour répondre avec précision aux besoins spécifiques de votre réseau d'établissements et assurer une intégration harmonieuse"
          buttonText="Demander un Devis"
        />
      </Box>
    </Box>
  );
};

export default PricingPage;

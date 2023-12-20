import React from 'react';
import EventImage from "../../images/events.png";
import { Box } from '@mui/material';
import Button from "../../components/Button";

const Events: React.FC = () => {
  return (
    <Box width={"100%"} sx={{transform:"translateX(-10px)"}} height={"100%"} position="relative">
      <Button
        externalStyles={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        Watch Showreel
      </Button>
      <img src={EventImage} width={"100%"} height={"100%"} alt="Event" />
    </Box>
  );
};

export default Events;

import { Button , Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React, { ReactNode } from 'react';

type CustomButtonProps = {
  children: ReactNode;
  externalStyles?: React.CSSProperties;

  bottom?: string | { [key: string]: string };

};

const CustomButton: React.FC<CustomButtonProps> = ({ children, externalStyles ,bottom}) => {
  return (
    <Button
      variant="contained"
      sx={{
        background: 'linear-gradient(90deg, #42D7F8 0%, #4282FE 65.1%, #3A40FB 100%)',
        borderRadius: '30px',
        opacity: '0.7',
        ...externalStyles,
        // bottom:bottom
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {children} <ArrowForwardIcon style={{ height: 20, width: 20, strokeWidth: 2 }} />
      </Box>
    </Button>
  );
};

export default CustomButton;

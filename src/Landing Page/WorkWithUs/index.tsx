import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Image from '../../images/workWithUs.png';

const WorkWithUs:React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',
        gap: {xs:'10px',sx:"30px"},
        position: 'relative',
        color: "white",
        height: "510px",
        width: {xs:'400px',sm:'700px',md:'1100px',lg:'1300px'},
     
        // padding:'0 0 0 15px',
        marginX:'auto',
        marginY:{xs:'100px',lg:'200px'}
        // border:"2px solid red"
      }}
    >
      <img
        style={{
          position: "absolute",
          left:"28px",
          zIndex: "-1",
          width: "110%",
          height: "110%",
          objectFit: "cover",
          borderRadius: '40px'
        }}
        src={Image}
        alt="Work With Us"
      />

      <Typography sx={{ paddingLeft: '58px',fontSize:{xs:'11px',sm:'13'} }} color={"#FFF"}   fontWeight={600}>
        Work With Us
      </Typography>
      <Typography sx={{ paddingLeft: '58px',fontSize:{xs:'25px',sm:'40px'} }} color={"#FFF"} fontWeight={600}>
        We’d love to get to know you.
      </Typography>
      <Button
        sx={{
          width: {xs:'180px',sm:"200px"},
          marginLeft: "58px",
          marginBottom:'5px',
          borderRadius: "30px",
          backgroundColor: 'white',
          ":hover": {
            backgroundColor: 'white', 
          },
        }}
        variant="contained"
      >
        <Typography sx={{
          backgroundImage: "linear-gradient(90deg, #42D7F8 0%, #4282FE 65.1%, #3A40FB 100%)",
          backgroundClip: "text",
          color: 'transparent',
          WebkitBackgroundClip: "text",
          fontSize: {xs:'12px',sm:"18px"},
        }}>
          Get in touch
        </Typography>
      </Button>
    </Box>
  );
};

export default WorkWithUs;

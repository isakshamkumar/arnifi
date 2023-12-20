import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Image from '../../images/workWithUs.png';

const WorkWithUs = () => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',
        gap: "30px",
        position: 'relative',
        color: "white",
        height: "310px",
        width: '80%',
     
        // padding:'0 0 0 15px',
        margin: '160px auto',
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

      <Typography sx={{ paddingLeft: '58px' }} color={"#FFF"} fontSize={13} fontWeight={600}>
        Work With Us
      </Typography>
      <Typography sx={{ paddingLeft: '58px' }} color={"#FFF"} fontSize={40} fontWeight={600}>
        We’d love to get to know you.
      </Typography>
      <Button
        sx={{
          width: "200px",
          marginLeft: "58px",
          borderRadius: "30px",
          backgroundColor: 'white',
          ":hover": {
            backgroundColor: 'white', // Add the correct hover style here
          },
        }}
        variant="contained"
      >
        <Typography sx={{
          backgroundImage: "linear-gradient(90deg, #42D7F8 0%, #4282FE 65.1%, #3A40FB 100%)",
          backgroundClip: "text",
          color: 'transparent',
          WebkitBackgroundClip: "text",
          fontSize: "18px",
        }}>
          Get in touch
        </Typography>
      </Button>
    </Box>
  );
};

export default WorkWithUs;

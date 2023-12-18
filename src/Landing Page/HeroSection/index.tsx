import React from "react";
import { Box, Typography } from "@mui/material/";
import HeroSectionBg from "../../components/Background/HeroSectionBg";
import Image from '../../images/scroll.png'

const HeroSection = () => {
  return (
    <>
      <Box
        width={"100%"}
        height={"100vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <HeroSectionBg />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            fontSize={"60px"}
            fontWeight={"500"}
            lineHeight={"95px"}
            color={"#EDEDED"}
            fontFamily={"Poppins"}
          >
            Frranco<span style={{color: "#4282FE"}}>.</span> IT Service Provider<span style={{color: "#4282FE"}}>.</span>
          </Typography>
          <Box sx={{ display: "flex", gap: "15px", width: "50%" }}>
            <hr style={{ color: "white",opacity:'0.6' }} />
            <Typography
              fontFamily={"Poppins"}
             fontSize={"16px"}
              color={"#B9B9B9"}
              variant="body2"
            >
              {" "}
              <span style={{color: "#4282FE"}}>Frranco</span> is a IT company dealing in
              design and development from the last 1 year. Excelling in 2 dept.
              UI/UX Design and Development.
            </Typography>
          </Box>
        </Box>
        <Box sx={{
        position: 'absolute',
        bottom: '50px',
        right: '150px',
        '&:hover': {
          cursor:'pointer', 
        },
      }}>

        <img src={Image} alt="Scroll Down" />
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;

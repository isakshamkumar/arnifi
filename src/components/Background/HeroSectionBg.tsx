import React from "react";
import Image from "../../images/background.png";
import { Box } from "@mui/system";

const HeroSectionBg:React.FC = () => {
  return (
    <Box sx={{position:'absolute',top:'0',left:'0',right:'0',bottom:'0',zIndex:'-1', width: '100%'}}>
      <img src={Image} alt="hero" width={"100%"} height={"100%"}/>
    </Box>
  )
};

export default HeroSectionBg;

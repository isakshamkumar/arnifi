import React from "react";
import Image from "../../images/gradient-client.png";
import { Box } from "@mui/material";
const ClientSectionBg:React.FC = () => {
  return (
  <Box sx={{position:'absolute',left:'0',right:'0',width:'100%',height:'100%',zIndex:'-1', opacity: "0.3"}}>
    <img src={Image} alt="hero" width={"100%"} height={"100%"}/>
</Box>
  )
};


export default ClientSectionBg;

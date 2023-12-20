import React from "react";
import Bira from "../../images/Landing-Bira.png";
import PaperBoat from "../../images/Landing-Paperboat.png";
import Mobikwik from "../../images/Landing-MobiKwik.png";
import HealthKart from "../../images/Landing-HealthKart.png";
import ClientCard from "../../components/ClientCard";
import { Box, Grid, Typography } from "@mui/material";
import Button from '../../components/Button'
import ClientSectionBg from "../../components/Background/ClientSectionBackground";


const Clients = () => {
  interface Src {
    src: string;
    content:string
  }
  const ImageSrc = [
    {
      src: Bira,
      content:'Using better UX to improve healthcare delivery'
    },
    {
      src: PaperBoat,
      content:"Levelling up the end-user learning experience"
    },
    {
      src: Mobikwik,
      content:'Redefining entertainment biz with next-level UX'
    },
    {
      src: HealthKart,
      content:'Using better UX to improve healthcare delivery'
    },
  ];
  return (
    <>
      <Box style={{  margin: "100px 0" }}>
        <ClientSectionBg/>
        <Box style={{display: 'flex',flexDirection:'column', gap:"15px",
        justifyContent: 'center',alignItems:'center'}}>
          <Typography color={"#F3F3F3"} style={{fontSize:"16px",fontWeight:'500'}} variant="body2">
            Our Clients
          </Typography>
         

          <Typography color={"#C8C8C8"} style={{fontSize:"30px",fontWeight:'500'}} variant="body2">
            We have re-defined user experiences for over 
          </Typography>
          <span style={{fontSize:'25px',color:"#3C50FC",fontWeight:'500',letterSpacing:'0.3px',textAlign:"center",lineHeight:'37.5px;'}}>50+ clients.</span> 
          </Box>
        
        <Grid sx={{padding:'10px 100px',marginY:'25px'}} container spacing={1}>
          {ImageSrc.map((src: Src, index: number) => (
            <Grid
              key={index}
              item
              xs={12}
              lg={3}
              md={6}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // border:"2px solid green"
              }}
            >
              <ClientCard content={src.content} src={src.src} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{display: 'flex',justifyContent:'center',alignItems:"center"
        }}>

        <Button>View all   </Button>
        </Box>
      </Box>
    </>
  );
};

export default Clients;

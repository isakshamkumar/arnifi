import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Services = () => {
  return (
    <Box
      style={{
        // border: "2px solid red",
        margin: "200px 0px",
        padding: "10px 90px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",

        //   border: "2px solid green",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            color: "white",
          }}
        >
          Our Services
          <hr
            style={{
              backgroundColor: "#4282FE",
              width: "135px",
              height: "2px",
            }}
          />
        </Box>
        <Box
          style={{ color: "white", width: "828px"}}
        >
          <Typography sx={{ fontSize: "70px" }}>
            We offer worthwhile experiences that help you go{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #42D7F8 0%, #4282FE 65.1%, #3A40FB 100%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              above & beyond
            </span>
            and guide your business to drive impact.
          </Typography>
        </Box>
      </Box>
      <Box>
        <Grid container sx={{margin:'200px 0'}}>
          <Grid item xs={6} lg={12} md={12}>
            <Box sx={{display: 'flex',
            justifyContent:'center',alignItems:"center",gap:'260px'}}>

            <Typography variant="body2" sx={{fontSize:'60px',fontWeight:"500"}} color={"#FFF"}>
            UI/UX Design <ArrowForwardIcon/>
            </Typography>
            <Box sx={{display: 'flex',
            flexDirection:'column',gap:'20px',width:'402px'}}>
                <Typography color={"#EAEAEA"} sx={{fontSize:"20px",fontWeight:'400'}}>
                We provide end to end research services while discovering game-changing improvement opportunities.
                </Typography>
                <Box sx={{display: 'flex',gap:'10px',
                flexWrap:'wrap'}}>

                <Button sx={{borderRadius:'30px',border:"1px solid #808080",color:'#808080'}} variant="outlined">
                Mobile App Design
                </Button>
                <Button  sx={{borderRadius:'30px',border:"1px solid #808080",color:'#808080'}}  variant="outlined">
                Responsive Website
                </Button>
                <Button  sx={{borderRadius:'30px',border:"1px solid #808080",color:'#808080'}}  variant="outlined">
                Design system
                </Button>
                </Box>
            </Box>

            </Box>
          </Grid>
          <hr style={{color:'white',width:'60%',margin:"100px auto",opacity:".3"}} />
          <Grid item xs={12} lg={12} md={12}>
            <Box sx={{display: 'flex',
            justifyContent:'center',alignItems:"center",gap:'260px'}}>

            <Typography variant="body2" sx={{fontSize:'60px',fontWeight:"500"}} color={"#FFF"}>
            Website Design <ArrowForwardIcon/>
            </Typography>
            <Box sx={{display: 'flex',
            flexDirection:'column',gap:'20px',width:'402px'}}>
                <Typography color={"#EAEAEA"} sx={{fontSize:"20px",fontWeight:'400'}}>
                We provide end to end research services while discovering game-changing improvement opportunities.
                </Typography>
                <Box sx={{display: 'flex',gap:'10px',
                flexWrap:'wrap'}}>

                <Button sx={{borderRadius:'30px',border:"1px solid #808080",color:'#808080'}} variant="outlined">
                Mobile App Design
                </Button>
                <Button  sx={{borderRadius:'30px',border:"1px solid #808080",color:'#808080'}}  variant="outlined">
                Responsive Website
                </Button>
                <Button  sx={{borderRadius:'30px',border:"1px solid #808080",color:'#808080'}}  variant="outlined">
                Design system
                </Button>
                </Box>
            </Box>

            </Box>
          </Grid>
          <hr style={{color:'white',width:'60%',margin:"100px auto",opacity:".3"}} />
          <Grid item xs={12} lg={12} md={12}>
            <Box sx={{display: 'flex',
            justifyContent:'center',alignItems:"center",gap:'260px'}}>

            <Typography variant="body2" sx={{fontSize:'60px',fontWeight:"500"}} color={"#FFF"}>
            Development <ArrowForwardIcon/>
            </Typography>
            <Box sx={{display: 'flex',
            flexDirection:'column',gap:'20px',width:'402px'}}>
                <Typography color={"#EAEAEA"} sx={{fontSize:"20px",fontWeight:'400'}}>
                We provide end to end research services while discovering game-changing improvement opportunities.
                </Typography>
                <Box sx={{display: 'flex',gap:'10px',
                flexWrap:'wrap'}}>

                <Button sx={{borderRadius:'30px',border:"1px solid #808080",color:'#808080'}} variant="outlined">
                Mobile App Design
                </Button>
                <Button  sx={{borderRadius:'30px',border:"1px solid #808080",color:'#808080'}}  variant="outlined">
                Responsive Website
                </Button>
                <Button  sx={{borderRadius:'30px',border:"1px solid #808080",color:'#808080'}}  variant="outlined">
                Design system
                </Button>
                </Box>
            </Box>

            </Box>
          </Grid>
          
         
        </Grid>
      </Box>
    </Box>
  );
};

export default Services;

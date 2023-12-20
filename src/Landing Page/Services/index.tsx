import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Services: React.FC = () => {
  return (
    <Box
      style={{
        margin: "200px 0px",
        padding: "10px 90px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
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
          <Typography sx={{ fontSize: {xs:'30px',sm:'50px',md:"70px"} ,margin:'40px 0',padding:'0px 40px',width:{xs:'300px',sm:'600px',md:'799px',lg:'828px'}}}>
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
      <Box sx={{marginTop:'200px'}}>
        <Box sx={{display: 'flex',
            justifyContent:'center',alignItems:"center",flexDirection:{xs:'column',sm:'row'},gap:{xs:'50px',sm:'100px',md:'150px',lg:'260px'}}}>

          <Typography variant="body2" sx={{fontSize:{xs:'50px',sm:'60px'},fontWeight:"500"}} color={"#FFF"}>
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
        <hr style={{color:'white',width:'60%',margin:"100px auto",opacity:".3"}} />
        <Box sx={{display: 'flex',
          justifyContent:'center',alignItems:"center",flexDirection:{xs:'column',sm:'row'},gap:{xs:'50px',sm:'100px',md:'150px',lg:'260px'}}}>

          <Typography variant="body2" sx={{fontSize:{xs:'50px',sm:'60px'},fontWeight:"500"}} color={"#FFF"}>
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
        <hr style={{color:'white',width:'60%',margin:"100px auto",opacity:".3"}} />
        <Box sx={{display: 'flex',
          justifyContent:'center',alignItems:"center",flexDirection:{xs:'column',sm:'row'},gap:{xs:'50px',sm:'100px',md:'150px',lg:'260px'}}}>

          <Typography variant="body2" sx={{fontSize:{xs:'50px',sm:'60px'},fontWeight:"500"}} color={"#FFF"}>
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
      </Box>
    </Box>
  );
};

export default Services;

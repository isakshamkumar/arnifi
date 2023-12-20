import { Box, Typography } from "@mui/material";
import Image from "../../images/trial.png";

import TrialSectionBackground from "../../components/Background/TrialSectionBackground";
import Button from "../../components/Button";

const Trial:React.FC = () => {
  return (
    <Box sx={{ position: "relative",display:'flex',flexDirection:{xs:'column',sm:'row'},justifyContent:'center',alignItems:"center",gap:'20px',marginTop:"200px" }}>
      <TrialSectionBackground />
      <Box sx={{width:{lg:'100%'}}} padding={10} width={699} display={"flex"} marginTop={15} flexDirection={"column"} gap={5}>
        <Typography  sx={{fontSize:{xs:'30px',md:'35px',lg:'45px'}}} color={"#EDEDED"}>Franco gives you on demand access to the talented pool of top-tier developers & designers</Typography>
        <Box display={"flex"} flexDirection={"column"} gap={2}>
          <Button externalStyles={{width:"240px",height:"50px",opacity:"1"}}>Start 3 day free Trial</Button>
          <Typography fontSize={13} fontWeight={600} sx={{textShadow:'0px 4px 4px rgba(0, 0, 0, 0.25'}} color={"#EDEDED"}>NO PAYMENT. NO RISKS</Typography>
        </Box>
      </Box>
      <Box sx={{width:{sm:'1000px',md:'720px',lg:"750px"},marginTop:{sm:'15px',md:'0px'}}}>
        <img width={"100%"} height={'100%'}  alt="Trial" src={Image} />
      </Box>
    </Box>
  );
};

export default Trial;

import { Box, Typography } from "@mui/material";
import Image from "../../images/trial.png";

import TrialSectionBackground from "../../components/Background/TrialSectionBackground";
import Button from "../../components/Button";

const Trial = () => {
  return (
    <Box sx={{ position: "relative",display:'flex',justifyContent:'center',alignItems:"center",gap:'20px',marginTop:"200px" }}>
      <TrialSectionBackground />
      <Box paddingLeft={10} width={699} display={"flex"} flexDirection={"column"} gap={5}>
        <Typography fontSize={45} color={"#EDEDED"}>Franco gives you on demand access to the talented pool of top-tier developers & designers</Typography>
        <Box display={"flex"} flexDirection={"column"} gap={2}>
          <Button externalStyles={{width:"240px",height:"50px",opacity:"1"}}>Start 3 day free Trial</Button>
          <Typography fontSize={13} fontWeight={600} sx={{textShadow:'0px 4px 4px rgba(0, 0, 0, 0.25'}} color={"black"}>NO PAYMENT. NO RISKS</Typography>
        </Box>
      </Box>
      <Box>
        <img src={Image} />
      </Box>
    </Box>
  );
};

export default Trial;

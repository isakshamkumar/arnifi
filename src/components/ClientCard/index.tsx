import { Box, Typography } from "@mui/material";
import Bira from '../../images/Landing-Bira.png'
import PaperBoat from '../../images/Landing-Paperboat.png'
import Mobikwik from '../../images/Landing-MobiKwik.png'
import HealthKart from '../../images/Landing-Bira.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const ClientCard = () => {
  return <Box>
    <Box>
        <img src={Bira} alt="" />
    </Box>
    <Box>
    <ArrowForwardIcon
        sx={{
          fontSize: 40,
          color: 'white', 
          cursor: 'pointer', 
          transform:'rotate(-30deg)'
        }}
        
      />
      <Typography variant="caption">Using better UX to improve healthcare delivery</Typography>
    </Box>

  </Box>;
};

export default ClientCard;

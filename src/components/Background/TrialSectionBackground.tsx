import { Box } from '@mui/material'

import Image from '../../images/background.png'

const TrialSectionBackground = () => {
  return (
    <Box sx={{position:'absolute',top:'0',left:'0',right:'0',bottom:'0',width:'100%',height:'100%',zIndex:'-1'}}>
    <img src={Image} alt="hero" width={"100%"} height={"100%"}/>
</Box>
  )
}

export default TrialSectionBackground

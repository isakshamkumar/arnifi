import { Box, Typography } from '@mui/material'
import React from 'react'

const PrivacyPolicy:React.FC = () => {
  return (
    <Box sx={{backgroundColor:'rgba(49, 49, 49, 0.54)',width:'100%',height:'20px' }}>
    <Typography padding={"0px 140px"} color={"#BEBEBE"} fontSize={14}>
    Privacy Policy
    </Typography>
  </Box>
  )
}

export default PrivacyPolicy

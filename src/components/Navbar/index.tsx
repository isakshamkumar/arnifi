import { Box } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <Box position={'fixed'} top={"0"} left={"0"} width={"94%"} display={'flex'} padding={"35px 50px"} justifyContent={'space-between'}  >
      <Box sx={{color:'#F9F4E6',fontWeight:'bold',fontSize:'25px'}}>
        Logo
      </Box>
      <Box>
        <img width={"39px"} height={"20px"} src="/hamburgerIcon.svg" alt="" />
      </Box>
    </Box>
  )
}

export default Navbar

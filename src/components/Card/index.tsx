import React from 'react'
import { Box,Typography } from '@mui/material'
interface Src {
  src: string;
  index:number
}
const Card:React.FC<Src> = (props) => {
  return (
    <>
    <Box sx={{
       width: { xs: '509px', sm: '450px', md: '509px', lg: '509px' },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap:"10px",
        transform: {lg: `${props.index %2 === 0 ?  "translateY(-120px)" : ""}` ,md:`${props.index %2 === 0 ?  "translateY(-120px)" : ""}`, sm:`${props.index %2 === 0 ?  "translateY(-120px)" : ""}` ,xs: "0"}
    }}>
        <Box width={"100%"} height={"561px"}>
            <img src={props.src} width={"100%"} alt='Card' style={{objectFit:"cover"}} height={"100%"} />
        </Box>
    <Box display={"flex"} flexDirection={"column"}>
        <Typography fontSize={"20px"} fontFamily={"Poppins"} lineHeight={"30px"} color={"white"}>
        Night googles by Mindchatter
        </Typography>
        <Typography fontSize={"13px"} fontFamily={"Poppins"} lineHeight={"30px"} color={"#D4D4D4"} sx={{opacity: "0.5"}}>
        Website design, Art direction, Development
        </Typography>
    </Box>
    </Box>    
    </>
  )
}

export default Card
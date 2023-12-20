import React from "react";
import { Box, Typography } from "@mui/material";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import Girl from "../../images/girl.png";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const Testimonials:React.FC = () => {
  return (
    <>
      <Box
        width={"auto"}
        marginX={"162px"}
        height={"100%"}
        display={"flex"}
        alignItems={"flex-end"}
        justifyContent={"center"}
        border={"2px sloid red"}
        position={"relative"}
        sx={{marginTop:{xs:'200px',lg:'0'}}}
      >
        <Typography
          position={"absolute"}
         sx={{top:{xs:'-30px',lg:'200px'}}}
          variant="body2"
          fontSize={25}
          fontWeight={500}
          color={"#F3F3F3"}
    
        >
          Testimonials
        </Typography>
        <Box
          width={"120px"}
          height={"120px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            backgroundColor: "#4282FE",
           
          }}
        >
          <ArrowLeft
            style={{
              width: "40px",
              height: "40px",
              color: "white",
            }}
          />
        </Box>
        <Box
          width={"338.963px"}
          height={"416px"}
          display={"flex"}
          position={"relative"}
          alignItems={"flex-end"}
         
        >
          <Box
            width={"100%"}
            height={"350.57px"}
            sx={{
              backgroundColor: "#808080",
            
            }}
          ></Box>
          <img
            src={Girl}
            alt="Person"
            width={"100%"}
            height={"100%"}
            style={{
              position: "absolute",
              bottom: "0",
              objectFit:'cover'
            }}
          />
          <Box
            width={"100%"}
            height={"120px"}
            position={"absolute"}
            bottom={"0"}
            sx={{
              opacity: "0.4",
              background:
                "linear-gradient(90deg, #42D7F8 0%, #4282FE 65.1%, #3A40FB 100%)",
               
            }}
          ></Box>
        </Box>
        <Box
          width={"530px"}
          height={"350.57px"}
          
          marginTop={"300px"}
          marginRight={"81px"}
          flexDirection={"column"}
          sx={{display: {xs:'none',lg:'block'}}}
        >
          <Typography
            fontFamily={"Poppins"}
            padding={"36px"}
            fontSize={"28px"}
            fontWeight={"800"}
            color={"white"}
          >
            SAKSHI VERMA
          </Typography>
          <Box
            width={"100%"}
            height={"256px"}
            padding={"40px"}
            sx={{
              backgroundColor: "#212121",
              
              flexDirection: "column",

            }}
          >
            <FormatQuoteIcon
              style={{
                width: "30px",
                height: "30px",
                color: "white",
              }}
            />
            <Typography
              fontFamily={"Poppins"}
              fontSize={"22px"}
              fontWeight={"400"}
              color={"#FAFAFA"}
            >
              In voluptates iste soluta veniam beatae sed ipsa quos numquam.
              Perferendis eos similique sunt temporibus. Tempore rem libero
              deleniti adipisci nulla.
            </Typography>
          </Box>
        </Box>
        <Box
          width={"120px"}
          height={"120px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            backgroundColor: "#4282FE",
          }}
        >
          <ArrowRight
            style={{
              width: "40px",
              height: "40px",
              color: "white",
            }}
          />
        </Box>
        {/* <Typography position={"absolute"} bottom={"200px"}  variant="body2" fontSize={16} fontWeight={500} color={"#F3F3F3"}>Testimonials</Typography> */}
      </Box>
    </>
  );
};

export default Testimonials;

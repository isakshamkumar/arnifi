import { Box, Typography } from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type ClientCardProps = {
  src: string,
  content:string
};
const ClientCard: React.FC<ClientCardProps> = ({ src,content }) => {
  return (
    <Box
      style={{
        border: "1px solid transparent",
        display:'flex',
        flexDirection:"column",
        justifyContent:'space-between',
        padding:'20px 20px',

        
        borderImage: 'linear-gradient(90deg, rgba(66, 204, 249, 0.7) 0%, rgba(66, 130, 254, 0.7) 65.1%, rgba(58, 64, 251, 0.7) 100%) 1',


        height: "320px",
        width: "261px",
      }}
      
    >
      <Box>
        <img width={95} height={80} style={{objectFit:'cover'}} src={src} alt="" />
      </Box>
      <Box style={{display: 'flex',
      flexDirection:'column'}}>
        <ArrowForwardIcon
          sx={{
            fontSize: 30,
            color: "white",
            cursor: "pointer",
            transform: "rotate(-45deg)",
            strokeWidth:1,
           
          }}
        />
        <Typography color={'#B9B9B9'} style={{fontSize:'16px',fontWeight:'400',lineHeight:'163.5%'}}>
          {content}
        </Typography>
      </Box>
    </Box>
  );
};

export default ClientCard;

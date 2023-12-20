import React from "react";
import { Grid, Box, Typography, IconButton, List, ListItem, ListItemText } from "@mui/material";
import { Facebook, Twitter, Instagram, Phone, MailOutline, LocationOn } from "@mui/icons-material";

const Footer: React.FC = () => {
  return (
    <Grid container spacing={3} sx={{ padding: { xs: '20px', md: '20px 120px' } }}>
 
      <Grid item xs={12} sm={4} md={6} lg={6}>
        <Box display="flex" flexDirection="column" padding={{ xs: "0 10px", md: "0 20px" }} width={{ xs: "100%", sm: 250,md:300 }} gap={3} color="#FFF" justifyContent="center">
     
          <Typography variant="h6" color="#FFF">Your Logo</Typography>
          <Typography variant="body2" color="#4294FD">Lorem ipsum dolor sit</Typography>
          <Typography variant="body2" color="#FFF">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, vero!</Typography>

        
          <Box display="flex" flexDirection="row" justifyContent={{ xs: "center", md: "flex-start" }} gap={2}>
            <IconButton color="inherit">
              <Facebook />
            </IconButton>
            <IconButton color="inherit">
              <Twitter />
            </IconButton>
            <IconButton color="inherit">
              <Instagram />
            </IconButton>
          </Box>
        </Box>
      </Grid>

     
      <Grid item xs={12} sm={4} md={4} lg={3} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        
        <Box display="flex" flexDirection="column" justifyContent={"center"} alignItems={"center"} gap={3} width={{ xs: "100%", md: 210 }} color="#FFF">
          <Box display={"flex"} flexDirection={{ xs: "column", md: "row" }} gap={3} justifyContent={{ xs: "center", md: "flex-start" }}>
            <Typography variant="h6"><LocationOn /></Typography>
            <Typography variant="body2">998 Devonshire Ave.Camp Hill, PA 17011</Typography>
          </Box>
          <Box display={"flex"} flexDirection={{ xs: "column", md: "row" }} gap={3} justifyContent={{ xs: "center", md: "flex-start" }}>
            <Typography variant="h6"><MailOutline /></Typography>
            <Typography variant="body2">haddawy@comcast.net</Typography>
          </Box>
          <Box display={"flex"} flexDirection={{ xs: "column", md: "row" }} gap={3} justifyContent={{ xs: "center", md: "flex-start" }}>
            <Typography variant="h6"><Phone /></Typography>
            <Typography variant="body2">(334) 202-4792</Typography>
          </Box>
        </Box>
      </Grid>

   
      <Grid item xs={12} sm={4} md={2} lg={2} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
   
        <List>
          <ListItem>
            <ListItemText primary="Company" primaryTypographyProps={{ color: "#4294FD", fontSize: { xs: '14px', md: '16px' } }} />
          </ListItem>
          <ListItem>
            <ListItemText primary="The Team" primaryTypographyProps={{ color: "#FFF", fontSize: { xs: '14px', md: '16px' } }} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Work" primaryTypographyProps={{ color: "#FFF", fontSize: { xs: '14px', md: '16px' } }} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Services" primaryTypographyProps={{ color: "#FFF", fontSize: { xs: '14px', md: '16px' } }} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Contact Us" primaryTypographyProps={{ color: "#FFF", fontSize: { xs: '14px', md: '16px' } }} />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default Footer;

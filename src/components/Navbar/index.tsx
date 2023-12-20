import { Box, Modal, List, ListItem, ListItemText, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, LinkedIn, YouTube } from "@mui/icons-material";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [Image, setImage] = useState<string>('/hamburgerIcon.svg');

  const handleMenuClick = ():void => {
    setMenuOpen(!menuOpen);
    setImage((Image) => Image === "/hamburgerIcon.svg" ? "/closeMenu.svg" : '/hamburgerIcon.svg');
  };

  const modalBody = (
    <Box
      sx={{
        position: 'absolute',
        top: '0%',
        zIndex: '1000',
        width: { xs: '100%', md: '100%' },
        bgcolor: 'black',
        color: 'white',
        p: 2,
        height: '650px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <List>
        <ListItem><ListItemText primaryTypographyProps={{ fontSize: '25px' }} primary="Team" /></ListItem>
        <ListItem><ListItemText primaryTypographyProps={{ fontSize: '25px' }} primary="Our Services" /></ListItem>
        <ListItem><ListItemText primaryTypographyProps={{ fontSize: '25px' }} primary="Work" /></ListItem>
        <ListItem><ListItemText primaryTypographyProps={{ fontSize: '25px' }} primary="RFDD" /></ListItem>
        <ListItem><ListItemText primaryTypographyProps={{ fontSize: '25px' }} primary="Blogs" /></ListItem>
        <ListItem><ListItemText primaryTypographyProps={{ fontSize: '25px' }} primary="Contact" /></ListItem>
      </List>
      <Box sx={{
        display: 'flex',
        gap: "5px"
      }}>
        <IconButton color="inherit" >
          <YouTube />
        </IconButton>
        <IconButton color="inherit">
          <LinkedIn />
        </IconButton >
        <IconButton color="inherit">
          <Instagram />
        </IconButton >
        <IconButton color="inherit">
          <Twitter />
        </IconButton>
        <IconButton color="inherit">
          <Facebook />
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <Box
      width="calc(100% - 50px)"
      display="flex"
      sx={{
        padding: '30px 30px',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        top: "0",
        left: '0',
        zIndex: '2000',
        backgroundColor: 'rgba(0,0,0,0.2)'
      }}
    >
      <Box sx={{ color: '#F9F4E6', fontWeight: 'bold', fontSize: '25px' }}>
        Logo
      </Box>
      <Box onClick={handleMenuClick} sx={{
        width: '39px',
        height: '20px',
      }}>
        <img src={Image} alt="" width="100%" height="100%" />
      </Box>
      <Modal
        open={menuOpen}
        onClose={handleMenuClick}
        sx={{ border: 'none' }}
      >
        {modalBody}
      </Modal>
    </Box>
  );
};

export default Navbar;

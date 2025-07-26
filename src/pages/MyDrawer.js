import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import CallIcon from '@mui/icons-material/Call';
import MenuIcon from '@mui/icons-material/Menu';
import Home from './Home';
import Name from '../Components/Name';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const drawerWidth = 190;

export default function MyDrawer() {
  const [selectedPage, setSelectedPage] = React.useState(<Home />);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [open, setOpen] = React.useState(false); // 🔸 حالة إظهار الـDrawer

  const liste = [
    { text: 'Accueil', icon: <HomeIcon />, page: <Home /> },
    { text: 'About', icon: <InfoIcon />, page: <About/> },
    { text: 'Projets', icon: <ComputerOutlinedIcon />, page: <Projects /> },
     { text: 'Contact', icon: <CallIcon />, page: <Contact /> },
  ];

  const handleListItemClick = (page, index) => {
    setSelectedPage(page);
    setSelectedIndex(index);
    setOpen(false); 
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
     <IconButton
        onClick={() => setOpen(true)}
        sx={{ position: 'fixed', top: 16, right: 16, zIndex: 1300 }}
        color="primary"
      >
        <MenuIcon />
      </IconButton>

    
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        variant="temporary"
        sx={{
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: 'linear-gradient(to bottom, #001, #4db2b6)',
          },
        }}
      >
        <Name />
        <List>
          {liste.map((item, index) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton onClick={() => handleListItemClick(item.page, index)}>
                <ListItemIcon sx={{ color: 'white' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ color: 'white' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        {selectedPage}
      </Box>
    </Box>
  );
}

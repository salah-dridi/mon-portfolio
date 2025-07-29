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
const headerHeight = 64;

export default function MyDrawer() {
  const [selectedPage, setSelectedPage] = React.useState(<Home />);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const liste = [
    { text: 'Accueil', icon: <HomeIcon />, page: <Home /> },
    { text: 'About', icon: <InfoIcon />, page: <About /> },
    { text: 'Projects', icon: <ComputerOutlinedIcon />, page: <Projects /> },
    { text: 'Contact', icon: <CallIcon />, page: <Contact /> },
  ];

  const handleListItemClick = (page, index) => {
    setSelectedPage(page);
    setSelectedIndex(index);
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <CssBaseline />

     
      <Box
        sx={{
          height: `${headerHeight}px`,
          background: 'linear-gradient(to bottom, #001, #4db2b6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingX: 2,
          color: 'white',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1300,
          boxSizing: 'border-box',
        }}
      >
       
        <Box sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
               <Name />
        </Box>

       
        <IconButton
          onClick={() => setOpen(true)}
          sx={{ color: 'white' }}
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
      </Box>

      
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        variant="temporary"
        PaperProps={{
          style: {
            marginTop: headerHeight, 
            height: `calc(100% - ${headerHeight}px)`, 
          },
        }}
        sx={{
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: 'linear-gradient(to bottom, #001, #4db2b6)',
          },
        }}
      >
  
        <List>
          {liste.map((item, index) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                selected={selectedIndex === index}
                onClick={() => handleListItemClick(item.page, index)}
                sx={{
                  backgroundColor:
                    selectedIndex === index ? '#1976d2' : 'transparent',
                  '&:hover': {
                    backgroundColor:
                      selectedIndex === index
                        ? '#1565c0'
                        : 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} sx={{ color: 'white' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          paddingTop: `${headerHeight}px`,
          overflowY: 'auto',
        }}
      >
        {selectedPage}
      </Box>
    </Box>
  );
}

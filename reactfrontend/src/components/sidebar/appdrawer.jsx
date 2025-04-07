import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const AppDrawer = ({ children }) => {
  const menuItems = [
    { text: 'Demand', path: '/demand' }
  ];

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Drawer variant="permanent" anchor="left" style={{ width: drawerWidth }}>
          <div style={{ padding: '10px 10px 2px', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="h5">Navigation Menu</Typography>
          </div>
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.text} component={Link} to={item.path}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Grid>
      <Grid item>{children}</Grid>
    </Grid>
  );
};

export default AppDrawer;

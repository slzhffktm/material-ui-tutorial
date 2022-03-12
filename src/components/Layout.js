import React from 'react';
import {AppBar, Avatar, Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography} from "@mui/material";
import {AddCircleOutlineOutlined, SubjectOutlined} from "@mui/icons-material";
import {useHistory, useLocation} from "react-router-dom";
import {format} from 'date-fns';

const drawerWidth = 240

const styles = {
  root: {
    display: 'flex'
  },
  page: {
    width: '100%',
    background: '#f9f9f9',
    padding: 3
  },
  drawer: {
    width: drawerWidth,
    "& .MuiDrawer-paper": {
      width: drawerWidth
    }
  },
  active: {
    background: '#f4f4f4'
  },
  title: {
    padding: 2
  },
  appbar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  date: {
    flexGrow: 1,
  },
  avatar: {
    marginLeft: 2,
  }
}

function Layout(props) {
  const history = useHistory()
  const location = useLocation()

  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color="secondary" />,
      path: '/'
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: '/create'
    }
  ]

  return (
    <Box sx={styles.root}>
      <AppBar
        sx={styles.appbar}
        elevation={0}
      >
        <Toolbar>
          <Typography sx={styles.date}>
            Today is the {format(new Date(), 'do MMMM Y')}
          </Typography>
          <Typography>
            Mario
          </Typography>
          <Avatar
            src="/mario-av.png"
            sx={styles.avatar}
          />
        </Toolbar>
      </AppBar>

      <Drawer
        sx={styles.drawer}
        variant="permanent"
        anchor="left"
        classes={{}}
      >
        <Box>
          <Typography variant="h5" sx={styles.title}>
            Ninja Notes
          </Typography>
        </Box>

        {/* list links */}
        <List>
          {menuItems.map(item => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              sx={location.pathname == item.path ? styles.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text}/>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box sx={styles.page}>
        <Box sx={(theme) => (theme.mixins.toolbar)}></Box>
        {props.children}
      </Box>
    </Box>
  );
}

export default Layout;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// App Bar
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import TitleHandler from './components/TitleHandler';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  // App Bar
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },

  // Grid
  grid_main: {
    flexGrow: 1,
    marginTop: 40,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function App() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, "left": open });
  };


  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#d58387"}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon onClick={toggleDrawer("left", true)}/>
            <Drawer anchor={"left"} open={state["left"]} onClose={toggleDrawer("left", false)}>

              <div className={classes.list}>
                <center style={{marginTop: 40}}>Created By: Deval Parikh</center>
                <center style={{marginTop: 5}}><a href="http://devalparikh.me/">devalparikh.me</a></center>


              </div>
            </Drawer>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {/* HousingHelper */}
            YouTube Algorithm Tool v1
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
      <TitleHandler />

    </div>
  );
}
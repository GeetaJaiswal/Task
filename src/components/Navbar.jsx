import React, {useState} from 'react';
import {Grid, Box, Button,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    CssBaseline, Hidden, makeStyles, InputBase, alpha} from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from '@material-ui/icons/Search';
import classNames from "classnames";


    const drawerWidth = 250;

    const useStyles = makeStyles((theme) => ({
        appBar: {
          transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
          }),
          boxShadow: "none",
          padding: "25px"
        },
        appBarShift: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
          transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
          })
        },
        menuButton: {
          marginRight: theme.spacing(2)
        },
        title: {
            fontWeight: 800,
            fontSize: "38px",
            fontFamily: "none"
        },
        navlinks: {
            marginRight: "auto",
            display: "flex",
            margin: "auto",
            '&>*':{
                padding: "20px",
                fontWeight: 600,
                fontSize: "20px"
            }
        },
        drawer: {
          width: drawerWidth
        },
        content: {
          padding: theme.spacing(3),
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
          }),
          background: "white",
        },
        contentShift: {
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
          }),
          marginLeft: drawerWidth,
        },
        search: {
            position: 'relative',
            borderRadius: 24,
            backgroundColor: "#8080801f",
            '&:hover': {
              backgroundColor: alpha(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
              marginLeft: theme.spacing(1),
              width: 'auto',
            },
          },
          searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: "#80808080"
          },
          mobileSearchIcon: {
            display: "flex",
            marginLeft: 50,
          },
          inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
              width: '12ch',
              '&:focus': {
                width: '20ch',
              },
            },
          },
      }));    

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <Drawer open={open} onClose={() => setOpen(false)} variant="persistent">
            <Toolbar/>
                <List disablePadding className={classes.drawer}>
                    <ListItem button>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Categories" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Podcasts" />
                    </ListItem>
                </List>
            </Drawer>
            <AppBar
                position="static"
                color="white"
                className={classNames(classes.appBar, { [classes.appBarShift]: open })}
            >
                <Toolbar>
                <Hidden smUp>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        onClick={() => setOpen(!open)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Hidden>
          <Typography className={classes.title} variant="h6">
            BookPod<span style={{color: "blue"}}>.</span>
          </Typography>

        <Hidden smDown>
            <Grid className={classes.navlinks}>
                <Typography>Home</Typography>
                <Typography>Categories</Typography>
                <Typography>Podcasts</Typography>
            </Grid>
        </Hidden>

        <Hidden smDown>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>          
        </Hidden>
        <div className={classes.mobileSearchIcon}>
            <SearchIcon />
        </div>
        </Toolbar>
      </AppBar>
            <main
                className={classNames(classes.content, {
                    [classes.contentShift]: open
                })}
            ></main>
        </>
    )
}

export default Navbar

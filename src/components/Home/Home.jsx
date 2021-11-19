import React from 'react';
import {Grid, Box, Typography, Button, makeStyles, Paper, Toolbar, Hidden} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Writers from '../data/Data';
import WritersTemplate from '../Template/WritersTemplate';

const useStyles = makeStyles((theme)=>({

    header: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "nowrap",
        justifyContent: "center",
        textAlign: "center",
    },
    headerH3: {
        fontFamily: "fantasy",
        [theme.breakpoints.down('sm')]:{
            fontSize: "2rem",
        }
    },
    headerTypo: {
        color: "#00000094",
    },
    belowHeader: {
        display: "flex",
        justifyContent: "center",     
        position: "relative",
        justifyContent: "flex-start",
        [theme.breakpoints.down('sm')]:{
            justifyContent: "center"
        }
    },
    detail: {
        padding: "50px",
        borderRadius: "50px",
        position: "absolute",
        top: "35px",       
        width: "580px",
        color: "#00000094",
        [theme.breakpoints.down('sm')]:{
                width: "290px",
                left: "0px",
                top: "140px",
                borderRadius: "22px",
                padding: "30px",
            }
    },
    detailHeading: {
        fontFamily: "fantasy",
    },
    detailLeft: {
        left: "45%",
        position: "absolute",
        [theme.breakpoints.down('sm')]:{
           left: 35,
        }
    },
    details: {
        padding: "0 500px 0 50px",
        [theme.breakpoints.down('sm')]:{
            padding: "0 50px 0 50px",
            marginBottom: 380,
         }
    },
    socilaMedia: {
        position: "absolute",
        top: "360px",
        left: "240px",
        display: "flex",
        [theme.breakpoints.down('sm')]:{
            top: "500px",
            left: "20px",
            color: "#00000094"
         }
        
    },
    detailsPara: {
        fontSize: "25px",
        color: "#00000094",
    },
    writers: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    img: {
        width: "650px",
        [theme.breakpoints.down('sm')]:{
            width: "300px",
        }
    },
    featuredWriters: {
        backgroundColor: "#3f51b5",
        margin: "50px",
        borderRadius: "20px",
        [theme.breakpoints.down('sm')]:{
            margin: "25px",
        }
    },
    writersName: {
        color: "white",
        fontSize: "21px",
    },
    featuredTitle: {
        color: "white",
        fontFamily: "fantasy",
    },
    featuredInner: {
        padding: "60px",
        [theme.breakpoints.down('sm')]:{
            padding: "20px 10px 20px 10px",
        }
    },
    writer: {
        [theme.breakpoints.down('sm')]:{
            marginBottom: "50px",
        }
    }

}))

const Home = () => {

    const classes = useStyles();

    return (
        <>
            <Grid container className={classes.header}>
                <Box>
                    <Typography variant="h3" className={classes.headerH3}>Home of 100,000+</Typography>
                    <Typography variant="h3" className={classes.headerH3}  gutterBottom>Books and Podcasts</Typography>
                    <Typography className={classes.headerTypo}>Get the lastest books and listen to the</Typography>
                    <Typography className={classes.headerTypo} >lastest podcasts all in one place</Typography><br/>
                    <Button variant="contained" color="primary">Get Started</Button>
                </Box>
            </Grid> 

            <Toolbar/>
            
            <Grid container className={classes.details}>
                <Grid item lg={6} xs={12} className={classes.belowHeader}>
                    <Box>
                        <img src="images/1.jpg" alt="img" className={classes.img}/>
                    </Box>
                </Grid>
                <Grid item lg={6} sm={12} xs={12} className={classes.detailLeft}>
                    <Box>
                        <Paper className={classes.detail}>
                            <Typography color="primary"><b>LOREM IPSUM</b></Typography>
                            <Typography variant="h4" className={classes.detailHeading}>Lorem Ipsum <br/>dolor sit amet</Typography><br/>
                            <Typography>Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                        </Paper>
                        
                        <Box className={classes.socilaMedia}>
                            <Box p={2}>
                                <TwitterIcon/>
                            </Box> 
                            <Box p={2}>   
                                <FacebookIcon/>
                            </Box>
                            <Box p={2}>
                                <InstagramIcon/>
                            </Box>
                            <Box p={2}>
                                <LinkedInIcon/>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Toolbar/>
            <Grid className={classes.featuredWriters}>
                <Box textAlign="center" className={classes.featuredInner}>
                    <Typography variant="h3" className={classes.featuredTitle}>Featured Writers</Typography>
                    <Toolbar/>
                    <Grid container className={classes.writers}>
                        {/* <Grid item className={classes.writers}> */}
                                {Writers.map((writer, index) => {
                                    return (
                                    <WritersTemplate
                                        key={index}
                                        id={index}
                                        img={writer.img}
                                        name={writer.name}
                                    />
                                    );
                                })}
                        {/* </Grid> */}
                    </Grid>    
                    {/* <Grid container className={classes.writers}>
                        <Grid item lg={3} xs={6} mx={12} className={classes.writer}>
                            <img src="images/2.png" width="70px"/>
                            <Typography className={classes.writersName}>E R Braithwaite</Typography>
                        </Grid>
                        <Grid item lg={3} xs={6} mx={12} className={classes.writer}>
                            <img src="images/2.png" width="70px"/>
                            <Typography className={classes.writersName}>E R Braithwaite</Typography>
                        </Grid>
                        <Grid item lg={3} xs={6} mx={12} className={classes.writer}>
                            <img src="images/2.png" width="70px"/>
                            <Typography className={classes.writersName}>E R Braithwaite</Typography>
                        </Grid>
                        <Grid item lg={3} xs={6} mx={12} className={classes.writer}>
                            <img src="images/2.png" width="70px"/>
                            <Typography className={classes.writersName}>E R Braithwaite</Typography>
                        </Grid>
                    </Grid>    

                        <Hidden only="xs"><Toolbar/></Hidden>
                        <Grid item className={classes.writers}>
                            <Grid item lg={3} xs={6} mx={12} className={classes.writer}>
                                <img src="images/2.png" width="70px"/>
                                <Typography className={classes.writersName}>E R Braithwaite</Typography>
                            </Grid>
                            <Grid item lg={3} xs={6} mx={12} className={classes.writer}>
                                <img src="images/2.png" width="70px"/>
                                <Typography className={classes.writersName}>E R Braithwaite</Typography>
                            </Grid>
                            <Grid item lg={3} xs={6} mx={12} className={classes.writer}>
                                <img src="images/2.png" width="70px"/>
                                <Typography className={classes.writersName}>E R Braithwaite</Typography>
                            </Grid>
                            <Grid item lg={3} xs={6} mx={12} className={classes.writer}>
                                <img src="images/2.png" width="70px"/>
                                <Typography className={classes.writersName}>E R Braithwaite</Typography>
                            </Grid>
                        {/* </Box>    */}
                    {/* </Grid>    */}
                </Box>
            </Grid>
        </>
    )
}

export default Home

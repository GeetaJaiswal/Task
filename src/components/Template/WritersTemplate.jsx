import React from "react";
import {Grid, Typography, makeStyles, Toolbar, Hidden} from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    writer: {
        [theme.breakpoints.down('sm')]:{
            marginBottom: "50px",
        }
    },
    writersName: {
        color: "white",
        fontSize: "21px",
    },
}))

const WritersTemplate = (props) => {
    const classes = useStyles();
    return (
        <>
            <Grid item lg={3} xs={6} mx={12} className={classes.writer}>
                <img src={props.img} width="70px"/>
                <Typography className={classes.writersName}>{props.name}</Typography>
                <Hidden only="xs"><Toolbar/></Hidden>
            </Grid>
        </>
    );
}

export default WritersTemplate;

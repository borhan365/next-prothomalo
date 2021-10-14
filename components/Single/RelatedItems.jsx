import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import { Box, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom';
import React from 'react'

const useStyles = makeStyles({
    root: {

    },
    CapitalThumb: {
        width: '100%',
        height: '200px',
        overflow: 'hidden',
        marginBottom: '10px',
        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        }

    },
    Link: {
        textDecoration: 'none',
    },
    CapitalTitlte: {
        fontSize: '20px',
        fontWeight: 'bold',
    },
    CapitalDesc: {
        color: 'gray',
    },
    CapitalDate: {
        color: 'lightgray',
    },
});

function Items(props) {
    const classes = useStyles();
    return (
        <>
        <Grid item xs={3}>
            <Box className={classes.root}>
                <div className={classes.CapitalThumb}>
                    <img src={props.Thumb} alt={props.Title}/>
                </div>

                <div>
                    <Typography className={classes.Link} color="inherit" component={Link} to="/single">
                        <Typography className={classes.CapitalTitlte} variant="h3">
                        {props.Title}
                        </Typography>

                        <Typography className={classes.CapitalDesc} variant="subtitle1">
                            {props.Desc}
                        </Typography>
                    </Typography>
                    
                    <Typography className={classes.CapitalDate} variant="subtitle2">
                        {props.Date}
                    </Typography>
                    
                </div>
            </Box>
        </Grid>
        </>
    )
}

export default Items

import React from "react";
import {Card,CardContent,Typography,Grid} from "@material-ui/core";
import Countup from 'react-countup';

import classes from "./cards.module.css";
import cx from "classnames";

const cards=(props)=>{
    if(!props.data.confirmed){
        return <p>Loading...</p>
    }
    console.log(props);
    return(
        <div className={classes.container}>
        <Grid container spacing={3} justify="center">
            <Grid item component={Card} xs={12} md={3} className={cx(classes.card,classes.infected)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Infected
                    </Typography>
                    <Typography variant="h5">
                    <Countup
                        start={0}
                        end={props.data.confirmed.value}
                        duration={2}
                        separator=","
                    />
                    </Typography>
                    <Typography color="textSecondary">
                        {new Date(props.data.lastUpdate).toDateString()}
                    </Typography>
                    <Typography variant="body2">
                       No of active covid cases
                    </Typography>
                </CardContent>
            </Grid>

            <Grid item xs={12} md={3}  className={cx(classes.card,classes.recovered)} component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        RECOVERED
                    </Typography>
                    <Typography variant="h5">
                    <Countup
                        start={0}
                        end={props.data.recovered.value}
                        duration={2}
                        separator=","
                    />
                    </Typography>
                    <Typography color="textSecondary">
                        {new Date(props.data.lastUpdate).toDateString()}
                    </Typography>
                    <Typography variant="body2">
                       No of active covid cases
                    </Typography>
                </CardContent>
            </Grid>

            <Grid xs={12} md={3}  className={cx(classes.card,classes.deaths)} item component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        DEATHS
                    </Typography>
                    <Typography variant="h5">
                    <Countup
                        start={0}
                        end={props.data.deaths.value}
                        duration={2}
                        separator=","
                    />
                    </Typography>
                    <Typography color="textSecondary">
                        {new Date(props.data.lastUpdate).toDateString()}
                    </Typography>
                    <Typography variant="body2">
                       No of active covid cases
                    </Typography>
                </CardContent>
            </Grid>
        </Grid>
        </div>
    )
}

export default cards;
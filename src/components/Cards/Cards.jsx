import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import ContUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames';

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed) {
        return 'Loading..'
    }
    // console.log(confirmed, recovered, deaths, lastUpdate);

    return (
       <div className={styles.container}>
           <Grid container spacing={3} justify="center">
               <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                   <CardContent>
                    <Typography color="textSecondary" gutterBottom>Konfirmasi Positif</Typography>
                    <Typography variant="h5"><ContUp start={0} end={confirmed.value} duration={9.0} separator="."/></Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>  
                   </CardContent>
               </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                   <CardContent>
                    <Typography color="textSecondary" gutterBottom>Sembuh</Typography>
                    <Typography variant="h5"><ContUp start={0} end={recovered.value} duration={9.0} separator="."/></Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>  
                   </CardContent>
               </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                   <CardContent>
                    <Typography color="textSecondary" gutterBottom>Meninggal</Typography>
                    <Typography variant="h5"><ContUp start={0} end={deaths.value} duration={9.0} separator="."/></Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>  
                   </CardContent>
               </Grid>      
           </Grid>
       </div>
    )
}

export default Cards;
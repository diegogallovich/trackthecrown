import React from 'react';
// Material UI
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
// Countup
import CountUp from 'react-countup';
// Styles
import styles from './Cards.module.css';
// classnames
import cx from 'classnames';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  console.log(confirmed);
  // Asert data existence
  if (!confirmed) {
    return 'Loading...';
  }

  // Render
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify='center'>
        {/* 
        Active Cases 
        */}
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography className={styles.infectedTitle} gutterBottom>
              Infected
            </Typography>
            <Typography variant='h5'>
              <CountUp
                start={0}
                end={confirmed.value}
                duration={3}
                separator=','
              />
            </Typography>
            <Typography variant='body2'>Active cases</Typography>
            <Typography className={styles.dates}>
              {new Date(lastUpdate).toDateString()}
            </Typography>
          </CardContent>
        </Grid>
        {/* 
        Recovery Cases 
        */}
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography className={styles.recoveredTitle} gutterBottom>
              Recovered
            </Typography>
            <Typography variant='h5'>
              <CountUp
                start={0}
                end={recovered.value}
                duration={3}
                separator=','
              />
            </Typography>
            <Typography variant='body2'>Recovered cases</Typography>
            <Typography className={styles.dates}>
              {new Date(lastUpdate).toDateString()}
            </Typography>
          </CardContent>
        </Grid>
        {/* 
        Death Cases 
        */}
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography className={styles.deathsTitle} gutterBottom>
              Deaths
            </Typography>
            <Typography variant='h5'>
              <CountUp
                start={0}
                end={deaths.value}
                duration={3}
                separator=','
              />
            </Typography>
            <Typography variant='body2'>Deseased cases</Typography>
            <Typography className={styles.dates}>
              {new Date(lastUpdate).toDateString()}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;

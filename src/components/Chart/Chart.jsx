import React, { useState, useEffect } from 'react';
import { FETCH_DAILY_DATA } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

// Styles
import styles from './Chart.module.css';

// Component
const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const FETCH_API = async () => {
      setDailyData(await FETCH_DAILY_DATA());
    };

    console.log(dailyData);

    FETCH_API();
  });

  const LINE_CHART =
    dailyData.length > 0 ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [
            {
              data: dailyData.map(({ confirmed }) => confirmed),
              label: 'Infection cases',
              borderColor: '#3333ff',
              backgroundColor: 'rgba(64, 112, 232, 0.5)',
              fill: true,
            },
            {
              data: dailyData.map(({ deaths }) => deaths),
              label: 'Death cases',
              borderColor: 'red',
              backgroundColor: 'rgba(255, 0, 0, .65)',
              fill: true,
            },
          ],
        }}
      />
    ) : null;

  return <div className={styles.container}>{LINE_CHART}</div>;
};

export default Chart;

import axios from 'axios';

// API url
const URL = 'https://covid19.mathdro.id/api';

// Get data from api
export const FETCH_DATA = async (country) => {
  let changeableUrl = URL;
  if (country && country !== 'global')
    changeableUrl = `${URL}/countries/${country}`;
  console.log(changeableUrl);
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);

    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
    //
  } catch (error) {
    console.log(error);
  }
};

// Get daily data for chartjs
export const FETCH_DAILY_DATA = async () => {
  try {
    const { data } = await axios.get(`${URL}/daily`);
    const MODIFIED_DATA = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return MODIFIED_DATA;

    //
  } catch (error) {
    console.log(error);
  }
};

// Get data by country
export const FETCH_COUNTRIES = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${URL}/countries`);
    return countries.map((country) => country.name);
    //
  } catch (error) {
    console.log(error);
  }
};

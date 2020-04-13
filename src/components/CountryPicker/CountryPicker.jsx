import React, { useEffect, useState } from 'react';
import { FETCH_COUNTRIES } from '../../api';
// Material UI
import { NativeSelect, FormControl } from '@material-ui/core';
// Styles
import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const FETCH_API = async () => {
      setFetchedCountries(await FETCH_COUNTRIES());
    };

    FETCH_API();
  }, [setFetchedCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        default=''
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option className={styles.option} value='global'>
          Global
        </option>
        {fetchedCountries.map((country, i) => (
          <option className={styles.option} value={country} key={i}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;

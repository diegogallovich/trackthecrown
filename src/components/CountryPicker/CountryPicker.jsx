import React, { useEffect, useState } from 'react';
import { FETCH_COUNTRIES } from '../../api';
// Material UI
import { NativeSelect, FormControl } from '@material-ui/core';
// Styles
import styles from './CountryPicker.module.css';

const CountryPicker = () => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const FETCH_API = async () => {
      setFetchedCountries(await FETCH_COUNTRIES());
    };

    FETCH_COUNTRIES();
  }, [setFetchedCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect>
        <option value='global'>Global</option>
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;

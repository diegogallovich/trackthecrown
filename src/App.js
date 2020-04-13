import React from 'react';
// Components
import { Cards, Chart, CountryPicker } from './components';
// Styles
import styles from './App.module.css';
// API
import { FETCH_DATA } from './api';

// App component
class App extends React.Component {
  // State
  state = {
    data: {},
    country: '',
  };
  // Component did mount
  async componentDidMount() {
    const FETCHED_DATA = await FETCH_DATA();
    // Set State
    this.setState({ data: FETCHED_DATA });
  }

  handleCountryChange = async (country) => {
    const FETCHED_DATA = await FETCH_DATA(country);
    console.log(FETCHED_DATA);
    // set state
    this.setState({ data: FETCHED_DATA, country: country });
  };

  render() {
    // Grab data from state to pass as props to components
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <h1>
          C<i className='fas fa-virus'></i>VID-19
        </h1>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;

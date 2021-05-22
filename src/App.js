
import React from 'react';
import { Cards, Charts, CountryPicker, Footer} from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import logo from './images/bacteria.svg';
import {fetchIndo} from './api';

class App extends React.Component {

  state = {
    data: {},
    country: '',
 

  }
 
 async componentDidMount(){
    const fetcheData = await fetchData();

    this.setState({data: fetcheData})

    console.log(fetcheData);
  }

  // eslint-disable-next-line
  async componentDidMount(){

    
    const fetchedData = await fetchIndo();

    this.setState({data: fetchedData})
    console.log(fetchedData);
  }
  handleCountryChange = async (country) => {
   
    const fetcheData = await fetchData(country);
    // fetch data
    // set the data
    console.log(fetcheData);
    this.setState({data: fetcheData, country: country});
  }

  render() {
    const {data, country} = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={logo} alt="covid19"/> 
        <h3>Update COVID-19</h3> 
      <Cards data={ this.state.data}/>
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Charts data={data} country={country}/>
      <Footer/>
      </div> 
    );
  }
}

export default App;

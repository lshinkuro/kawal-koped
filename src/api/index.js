import axios from 'axios';

const config = {
    headers: {
         "Access-Control-Allow-Credentials" : "true" ,
         "Access-Control-Allow-Origin": "*",
         "Access-Control-Allow-Methods" : "GET,OPTIONS,PATCH,DELETE,POST,PUT",
         "Access-Control-Allow-Headers" :"X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
    }
  };
const url = 'https://covid19.mathdro.id/api';
// const url = "https://api.kawalcorona.com";

export const fetchIndo = async () => {
    try{
        let {data: {confirmed, deaths, recovered, lastUpdate}} = await axios.get(`${url}/countries/indonesia`, config);
       
        return {confirmed, recovered, deaths, lastUpdate};
        
    } catch (error){
        console.log(error);
    }

}


export const fetchData = async (country) => {
    let changeableUrl = url;

    if(country) {
        changeableUrl = `${url}/countries/${country}`;
    }
    try {
        const {data: {confirmed, deaths, recovered, lastUpdate}} = await axios.get(changeableUrl, config);

  

        return {
            confirmed,
            recovered, 
            deaths,
            lastUpdate, 
        };
        
    } catch (error) {
       console.log(error);
    }
}

export const fetchDailyData = async () => {
    try{
        const { data } = await axios.get(`${url}/daily`, config);

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));

        return modifiedData;
    } catch (error) {

    }
}

export const fetchCountries = async () => {
    try{
        const {data: {countries}} = await axios.get(`${url}/countries`, config);

        // console.log(response);
        return countries.map((country) => country.name);
    } catch (error) {
       console.log(error) ;
    }
}
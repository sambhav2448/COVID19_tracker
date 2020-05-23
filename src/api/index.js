import axios from "axios";

const url = 'https://covid19.mathdro.id/api';

export const fetchdata = async (country) => {

    let changedUrl=url;

    if(country){
        changedUrl=url+"/countries/"+country;
    }
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changedUrl);
        return {confirmed,recovered,deaths,lastUpdate}

    } catch (err) {
        
        alert(err);
    }
}

export const fetchDailyData = async ()=>{
    try{
        const {data}= await axios.get(`${url}/daily`);
        const modifiedData=data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate
        }));
        return modifiedData;
    }catch(err){
        console.log(err)
    }
}

export const fetchCountry = async ()=>{

    try{

        const {data:{countries}} = await axios.get("https://covid19.mathdro.id/api/countries");
        return countries.map((country)=>country.name);

    }catch(error){
        alert(error)
    }
}
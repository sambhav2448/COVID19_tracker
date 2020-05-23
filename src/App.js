import React, { Component } from 'react';
import Cards from "./Components/Cards/cards";
import Chart from "./Components/Chart/chart";
import Countrypicker from "./Components/CountryPicker/countrypicker";
import {fetchdata} from "./api"

import styles from "./App.module.css";

import covidImg from "./images/image.png";

class App extends Component{

    state={
        data:{},
        country:''
    }

   async componentDidMount(){
        const maindata = await fetchdata();
        this.setState({data:maindata})
    }

    handleChangeCountry=async (country)=>{
      const fetchDataCountry = await fetchdata(country);
      this.setState({data:fetchDataCountry,country:country});
    }
    render(){
    const {data,country}=this.state;

        return(
            <div className={styles.container}>
               
                <img className={styles.image} src={covidImg} alt="COVID19"/>
                <Cards data={data}/>
                <Countrypicker
                    handleCountry={this.handleChangeCountry}
                />
                <Chart
                    data={data}
                    country={country}
                />
            </div>
        )
    }
}

export default App;
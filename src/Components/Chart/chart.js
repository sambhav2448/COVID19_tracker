import React,{useEffect,useState} from "react";
import { fetchDailyData } from "../../api";
import {Line,Bar} from "react-chartjs-2";

import classes from './chart.module.css'


const Chart=(props)=>{
    const [dailyData,setDailydata]=useState([]);

    useEffect(()=>{
        const fetchapi=async ()=>{
            setDailydata(await fetchDailyData());
        }
        
        fetchapi();
    },[]);

    const lineChart=(
        dailyData.length
        ?
            (
            <Line
                data={{
                    labels:dailyData.map(({date})=>date),
                    datasets:[{
                        data:dailyData.map(({confirmed})=>confirmed),
                        label:"Infected",
                        borderColor:"rgb(50,90,230)",
                        fill:true
                    },{
                        data:dailyData.map(({deaths})=>deaths),
                        label:"Deaths",
                        borderColor:"red",
                        backgroundColor:"rgba(255,0,0,0.5)",
                        fill:true
                    }]
                }}
            />
        )
        :null
    );


    const BarChart=(
        props.data.confirmed
        ?
        (
            <Bar
            data={{
                labels:['Infected','Recovered','Deaths'],
                datasets:[{
                    label:"People",
                    backgroundColor:[
                    "rgba(0,0,255,0.5)",
                    "rgba(0,255,0,0.5)",
                    "rgba(255,0,0,0.5)"
                ],
                data:[props.data.confirmed.value,props.data.recovered.value,props.data.deaths.value]
                }]
                
            }}
            options={{
                legend:{display:false},
                title:{display:true,text:`Current state in ${props.country}`}

            }}
            />
        ):null
    )

    return(
       <div className={classes.container}>
           {props.country ? BarChart: lineChart}
       </div>
    )
}

export default Chart;
import React,{useEffect,useState} from "react";
import {NativeSelect , FormControl} from "@material-ui/core";

import classes from "./countrypicker.module.css";

import {fetchCountry} from "../../api";



const Countrypicker =(props)=>{

    const [fetchedcountries, setFetchedcountries] = useState([]);

    useEffect(() => {
        const getchCountry= async () =>{
            setFetchedcountries(await fetchCountry())
        }
        getchCountry()
    }, [setFetchedcountries]);

    console.log(fetchedcountries)
    return(
        <FormControl className={classes.FormControl}>
            <NativeSelect defaultValue=" " onChange={(e)=>{props.handleCountry(e.target.value)}}>
                <option value="">Global</option> 
                {fetchedcountries.map((country,id)=> <option key={id} value={country}>{country}</option> )}
            </NativeSelect>
        </FormControl>
    )
}

export default Countrypicker;
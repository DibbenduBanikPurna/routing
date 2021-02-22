import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const [country,setCountry]=useState([])
    const {countryName}=useParams()
    useEffect(()=>{
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(res=>res.json())
        .then(data=>{
          let element;
            for(let i=0;i<data.length;i++){
                 element=data[i]
            }
            setCountry(element)
            console.log(element)
        })
    },[])
    return (
        <div>
            <h2>Name: {country.name}</h2>
            <img style={{width:'80px'}} src={country.flag} alt={country.name}/>
            <h5>Population: {country.population}</h5>
            <h5>Area: {country.area}</h5>
            <h5>Region:{country.region}</h5>
            
        </div>
    );
};

export default CountryDetails;
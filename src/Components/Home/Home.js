import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [country,setCountry]=useState([])
    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res=>res.json())
        .then(data=>{
            
            const info=data.slice(0,20)
          
            setCountry(info)
        })

    },[])
    return (
        <div>
            <h2>Country: {country.length}</h2>
            {
                country.map(country=>{
                    return <Country key={country.alpha2Code} country={country} />
                })
            }

        </div>
    );
};

export default Home;
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {
    const {name,flag,alpha3Code}=props.country
    const history=useHistory()
    const handleClick=(names)=>{
        history.push(`/country/${names}`)
    }
    return (
        <div>
            <h5>Name: {name}</h5>
            <img style={{width:'150px'}} src={flag} alt={name}/>
            <br/>
            <Link to={`/country/${name}`}>
            <button>Details Here..{alpha3Code}</button>
            </Link>
            <button onClick={()=>handleClick(name)}> Show More</button>

        </div>
    );
};

export default Country;
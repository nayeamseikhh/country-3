import React from 'react';
import "./Country.css"

const Country = (props) => {
    console.log(props);
    const {name, population, region, flags} = props.country;
    const handleAddCountry = props.handleAddCountry;
    return (
        <div className='countryStyle'>
            <img src={flags.png} alt="" />
            <h2>Country's Name: {name.common}</h2>
            <h3>Population: {population}</h3>
            <h3>Region: {region}</h3>
            <h3>Total Country added: {}</h3>
            <h4>Total Population : {}</h4>
            
            <button className='Add-Button' onClick={() => handleAddCountry(props.country)}> <b>Add new Country For Add+</b> </button>
        </div>
    );
};

export default Country;
import React, {useEffect, useState} from 'react';
import './App.css';
import Country from './Component/country/country';
import Cart from './Cart/Cart';


function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=> res.json())
    .then(data => {setCountries(data);})
  }, [])

  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  }
  return (
    <div className="App">
      <h1> Total Country's Amount: {countries.length}</h1>
      <Cart cart = {cart}></Cart>
      {/* <input type="search" /> */}
      
      {
        countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.name.common} ></Country>)
      }
    </div>
  );
}

export default App;

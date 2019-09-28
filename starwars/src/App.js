import React, { useState, useEffect } from "react";
import './App.css';
import Axios from 'axios';
import Warlist from './components/Warlist';
import Cards from './Cards';

// import Title from './components/Title';
import Images from './components/Images';
// import Classification from './components/Classification';

const App = (props) => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

const [warData, setWarData] = useState({})

useEffect(() => {
  Axios.get(
    `https://swapi.co/api/species`
  )
  .then(res => {
    console.log(res.data);
    setWarData(res.data);
  })
  .catch(err => {
    console.log(err);
  });

}, []);

// useEffect(() => {
//   async function fetchData() {
//     try {
//       const speciesList = await Axios.get(
//         "https://swapi.co/api/species"
//       );
//       setWarData(speciesList.data);
//     } catch (err) {
//       console.log(err);
//     } //try block
//   } // fetchData()
//   fetchData();
// }, []);


  return (
   <div className='App'>
    <h1>React Wars</h1> 
    <Cards />
    <Images photo={warData.url} />
   </div>
  
  );
}

export default App;

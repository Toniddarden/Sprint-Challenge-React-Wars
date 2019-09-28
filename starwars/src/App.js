import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import Title from './components/Title';
import Images from "./components/Images";
import Classification from './components/Classification';

function App() {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [warData, setWarData] = useState({});

  useEffect(() => {
    Axios.get(`https://swapi.co/api/species`)
      .then(res => {
        console.log(res.data);
        setWarData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);


  return (
    <div className="App">
      <h1>React Wars</h1>
     <Title title={warData.title} />
      <Images image={warData.url} />
      <Classification classification={warData.classification} />
    </div>
  );
};

export default App;

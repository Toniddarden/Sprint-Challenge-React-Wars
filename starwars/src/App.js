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

  // What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.
 
// It is a Javascript library that helps style the UI in a faster more efficient way. For example it uses components which help manage state to store and separate each item that renders to the UI so it helps the developer focus on each item and its actions separately while also keeping connectivity. Hooks are used like methods to replace those Classes in JS. 
 
// What does it mean to think in react?
// To think like a builder or architect, by building each item that has a purpose in a specific way and order.  

// Describe state.
// A Hook or pair that holds a current state and a state value. Both work collectively through functions. 

// Describe props.
// - A property that holds and carries values in and out of functions. 

// What are side effects, and how do you sync effects in a React component to state or prop changes?
// You sync effects through the React DOM by importing it. Effects are nonfunctional function that only runs after the init render is completed. It will also only run if changes are made or certain values have changed. They help unclog an over functional  application.  


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

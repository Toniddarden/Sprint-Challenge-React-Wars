//parent file
import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from "./Title"; //pulling from child to get the formatting 
// import { Container } from './Styles';



const WarList = () => {
  const [warData, setwarData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("https://swapi.co/api/people");
        console.log(response);
        setwarData(response.data.results);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

//   useEffect(() => {
//     axios.get('https://swapi.co/api/people/')
//         .then((res) => {
//             const response = res.data.results;
//             setwarData(response);
//         })
// }, [])


if(warData.length === 0) {return <h2>loading....</h2>}

  return (
    <div>
    {warData.map((character, i) => {
      return <Title data={character} key={i}  />;
    })}
  </div>
  );
};

export default WarList;
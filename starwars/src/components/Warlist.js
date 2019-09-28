import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from '../Cards';
import { Container, Row } from "reactstrap";





    const Warlist = (props) => {
      const [warData, setWarData] = useState({})

useEffect(() => {
  axios.get(
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
      
      
       
        return (
          <Container>
            <Row>
              
                return (
                  <Cards
                    // title={data.title}
                    // description={data.description}
                    CardTitle={warData.name}
                    CardImage={warData.image}
                    // class={data.classification}
                    // key={data.id}
                  />
                );
            
            </Row>
          </Container>
        );
      }

      export default Warlist;
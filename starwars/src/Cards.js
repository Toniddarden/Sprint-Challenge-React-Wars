import React from 'react';


import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';


//   {warData.map(data => {
//     return (
//       <Cards
//         title={data.name}
//         description={data.description}
//         image={data.image}
//         cardClass={props.classification}
//       />
//     );
//   })}




export default function Cards(props) {
    return (
     <div> hello I am the cards.js file
      <Card>
        <CardBody>
        <CardImg src={props.image} width="50%" top />
          <CardTitle>{props.name}</CardTitle>
          {/* <CardSubtitle>{props.title}</CardSubtitle>
        </CardBody>
        <CardImg width="100%" src={props.image} alt="Star Wars Character" />
        <CardBody>
          <CardText>{props.classification}</CardText> */}
        </CardBody>
      </Card>
    </div>
    );
  }
  

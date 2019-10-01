//child
import React from 'react';
// import {PersonContainer} from './Styles'; // from the style file
import { Card, CardImgOverlay, CardTitle, CardText } from 'reactstrap';




const Title = (props) => {
return (
    <Card body inverse style={{ backgroundColor: 'blue', width: '200px', margin: '50px', padding: '20px' }}>
<CardImgOverlay top width="100%" src="/assets/256x186.svg" alt="Card image cap">
<CardTitle>Name: {props.data.name}</CardTitle>
<CardText>Gender: {props.data.gender}</CardText>
<CardText>Mass: {props.data.mass}</CardText>
</CardImgOverlay>

    </Card>

  
      
)
}

export default Title;
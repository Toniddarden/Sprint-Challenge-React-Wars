import React, { useState, useEffect } from 'react';
import axios from "axios";

const Images = (props) => {
    const [photo, setPhoto] = useState([]);



    useEffect(() => {
        axios.get(`https://swapi.co/api/species`)
        .then(res => {
            const photo = res.data.url
            setPhoto(photo);
        })
    }, [photo])

    return (
        <div>
            <img src={props.photo} alt="space character"></img>
            {/* <button>Previous photo</button> */}
        </div>
        
    )

}

export default Images;
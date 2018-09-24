import React from "react";

const Travel = props => (
	<div>
	    <h1>{props.destination}</h1>
	    <p>{props.country}</p>
	    <img src={props.photo} alt={props.destination} />
	    <p>{props.distance}</p>        
    </div>
);

export default Travel;
import React from 'react';
import '../App.css';

/** Generates a component using an arrow function. */
const MovieLogo = (props) => <img src={props.logo} className="App-logo" alt={props.alt} />

export default MovieLogo;

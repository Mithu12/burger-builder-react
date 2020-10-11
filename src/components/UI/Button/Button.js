import React from "react";
import classes from './Button.css';
const button =(props) => {
    const cName =  classes.Button +' '+ classes[props.cName];
    // console.log(cName);

    return (
        <button onClick={props.clicked} className={cName}> {props.children} </button>
    );
};

export default button;
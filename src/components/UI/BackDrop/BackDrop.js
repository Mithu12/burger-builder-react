import React from "react";
import classes from './BackDrop.css'


const backDrop = (props) => {
    return (
        props.show ? <div className={classes.BackDrop} onClick={props.cancelled}></div> : null
    )
}

export default backDrop;
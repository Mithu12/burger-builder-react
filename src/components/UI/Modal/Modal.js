import React from "react";
import classes from './Modal.css';
import Aux from "../../../hoc/Auxi";
import BackDrop from "../BackDrop/BackDrop";
const modal = (props) => {
    const style = {
        transform: props.view ? 'translate(0px,0px)' : 'translate(0px,-1000px)',
        opacity: props.view ? 1 : 0
    }
    const crossIconStyle = {
        position: 'fixed',
        fontSize: '30px',
        color: 'red',
        top: '0',
        right: '0',
    }
    // console.log(props.view)
    return (
        <Aux>
            <BackDrop show={props.view} cancelled={props.cancelled}/>
            <div className={classes.Modal} style={style}>
                <i className="fa fa-times-circle" style={crossIconStyle} onClick={props.cancelled}></i>
                {props.children}
            </div>
        </Aux>
    )
}

export default modal;
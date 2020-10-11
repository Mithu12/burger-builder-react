import React from "react";
import classes from './Logo.css';
import Logo from '../../../assets/Images/logo192.png'
const logo = () => (
    <div className={classes.Logo}>
        <img src={Logo} alt="Logo"/>
    </div>
)

export default logo;
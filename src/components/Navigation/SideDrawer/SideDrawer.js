import React from "react";
import Logo from "../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from './SideDrawer.css'

const sideDrawer = (props) => {
    console.log(props)
    let cssClasses = props.show ? classes.Open : classes.Close
    return (
        <div className={[classes.SideDrawer,cssClasses].join(' ')}>
            <div className={classes.Logo}>
            <Logo />

            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    )
}

export default sideDrawer;
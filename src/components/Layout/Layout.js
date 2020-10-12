import React, {Component} from "react";
import Aux from '../../hoc/Auxi';
import classes from './Layout.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import BackDrop from "../UI/BackDrop/BackDrop";


class Layout extends Component {

    state = {
        showSideDrawer:true
    }

    sideDrawerCloseHandler = () => {
        this.setState({
            showSideDrawer:false
        })
    }
    sideDrawerOpenHandler = () => {
        this.setState({
            showSideDrawer:true
        })
    }

    render() {
        return (
            <Aux>
                <BackDrop show={this.state.showSideDrawer} cancelled={this.sideDrawerCloseHandler} />
                <Toolbar showSideDrawer={this.sideDrawerOpenHandler}/>
                <SideDrawer show={this.state.showSideDrawer}/>
                <main className={classes.Components}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;
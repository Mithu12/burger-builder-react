import React from "react";
import Aux from "../../../hoc/Auxi";
import Button from "../../UI/Button/Button";
const orderSummery = (props) => {
    let styles = {
        textTransform : 'capitalize'
    }
    const orders = Object.keys(props.orders).map(igKey => {
        return (
            <li key={igKey}>
                <span style={styles}> {igKey} </span> : {props.orders[igKey]}
            </li>
        )
    });
    // console.log(orders);
    return (
        <Aux>
            <h2>Your Order</h2>
            <p>Added Ingredients : </p>
            <ul>
                {orders}
            </ul>
            <p><strong>Total Price : {props.price}</strong></p>
            <p>Continue to Checkout?</p>
            <Button cName='Success' clicked={props.continued}>Continue</Button>
            <Button cName='Danger' clicked={props.cancelled}>Cancel</Button>
        </Aux>
    )
}

export default orderSummery;

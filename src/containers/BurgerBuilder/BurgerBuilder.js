import React, {Component} from "react";
import Aux from "../../hoc/Auxi";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummery from "../../components/Burger/orderSummery/OrderSummery";
const PRICES = {
    salad: .4,
    meat: 1,
    bacon: .7,
    cheese: .5,
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 1,
            meat: 0,
        },
        totalPrice: 5.5,
        purchaseAble: false,
        purchasing : false,
    }

    addIngredientsHandler = (key) => {
        let ingredients = this.state.ingredients;
        ingredients[key]++;
        let price = this.state.totalPrice;
        price += PRICES[key];
        this.setState({ingredients: ingredients, totalPrice: price})
    }

    removeIngredientsHandler = (key) => {
        let ingredients = this.state.ingredients;
        if (ingredients[key] <= 0) {
            return
        }
        ingredients[key]--;
        let price = this.state.totalPrice;
        price -= PRICES[key];
        this.setState({ingredients: ingredients, totalPrice: price})
    }

    purchasing = () =>{
        this.setState({
            purchasing : true
        })
    }
    purchasingCancelled = () =>{
        // console.log('yoyo')
        this.setState({
            purchasing : false
        })
    }
    purchasingContinue = () => {
        alert('purchased');
        this.purchasingCancelled();
    }

    render() {

        let disabled = {...this.state.ingredients};
        for (let item in disabled) {
            disabled[item] = disabled[item] <= 0
        }
        // console.log(disabled)
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <Modal view={this.state.purchasing} cancelled={this.purchasingCancelled}>
                    <OrderSummery orders={this.state.ingredients}
                                  cancelled={this.purchasingCancelled}
                                  continued={this.purchasingContinue}
                                  price = {this.state.totalPrice}
                    />
                </Modal>

                {/*{console.log(this.state.totalPrice)}*/}
                <BuildControls addIng={this.addIngredientsHandler}
                               remIng={this.removeIngredientsHandler}
                               disabledItems={disabled}
                               purchasing = {this.purchasing}
                               price={this.state.totalPrice}
                />

            </Aux>
        );
    };
};

export default BurgerBuilder;
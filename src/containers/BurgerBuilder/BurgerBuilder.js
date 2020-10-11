import React,{Component} from "react";
import Aux from "../../hoc/Auxi";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const PRICES = {
    salad : .4,
    meat : 1,
    bacon : .7,
    cheese : .5,
}

class BurgerBuilder extends Component{
    state= {
        ingredients : {
            salad: 0,
            bacon : 0,
            cheese : 0,
            meat : 0,
        },
        totalPrice: 5,
        purchaseAble: false,
    }

    addIngredientsHandler = (key) => {
        let ingredients = this.state.ingredients;
        ingredients[key]++;
        let price = this.state.totalPrice;
        price += PRICES[key];
        this.setState({ingredients: ingredients,totalPrice: price})
    }

    removeIngredientsHandler = (key) => {
        let ingredients = this.state.ingredients;
        if(ingredients[key] <= 0)
        {
            return
        }
        ingredients[key]--;
        let price = this.state.totalPrice;
        price -= PRICES[key];
        this.setState({ingredients: ingredients,totalPrice: price})
    }

    render() {

        let disabled = {...this.state.ingredients};
        for(let item in disabled){
            disabled[item] = disabled[item]<=0
        }
        // console.log(disabled)
        return (
            <Aux>
                <div>
                    <Burger ingredients={this.state.ingredients}/>
                </div>
                <div>
                    {/*{console.log(this.state.totalPrice)}*/}
                    <BuildControls addIng={this.addIngredientsHandler}
                                   remIng={this.removeIngredientsHandler}
                                   disabledItems = {disabled}
                                   price = {this.state.totalPrice}
                    />
                </div>
            </Aux>
        );
    };
};

export default BurgerBuilder;
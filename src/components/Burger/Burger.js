import React from "react";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";
import classes from './Burger.css'
// import {object} from "prop-types";

const burger = (props) => {


    // let Keys = Object.keys(props.ingredients);
    // let Values = Object.values(props.ingredients);
    // let allIngredients = [];
    // Values.map((numOf, i) => {
    //
    //     for (let j = 0; j < numOf; j++) {
    //         allIngredients.push(<BurgerIngredient key={Keys[i] + j} type={Keys[i]}></BurgerIngredient>)
    //
    //     }
    // })
    // console.log(Values);

    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey}/>;
            });
        }).reduce((arr,el) =>{
        return arr.concat(el);
    },[])
    console.log(

    );
    if(transformedIngredients.length === 0)
        transformedIngredients = <p>Add ingredients</p>

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={'bread-top'}></BurgerIngredient>
            {/*{allIngredients}*/}
            {transformedIngredients}
            <BurgerIngredient type={'bread-bottom'}></BurgerIngredient>
        </div>
    );
};

export default burger;
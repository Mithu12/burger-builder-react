import React from "react";
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Meat', type: 'meat'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Salad', type: 'salad'},
    {label: 'Cheese', type: 'cheese'},
]


const buildControls = (props) => {
    // console.log(props.disabledItems)
    return (
        <div className={classes.BuildControls}>
            <p>{props.price.toFixed(2)}</p>
            {controls.map(elem => (
                <BuildControl key={elem.label} label={elem.label}
                              adder={() => props.addIng(elem.type)}
                              remover={() => props.remIng(elem.type)}
                              disabled = {props.disabledItems[elem.type]}

                />
            ))}
        </div>
    )
};

export default buildControls;
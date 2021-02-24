import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';



const burger = (props) => {
     // it returns an object, but we need to get the keys as an array, so we can apply a map, and make it dynamic
     let transformedIngredients = Object.keys(props.ingredients)
     .map(igkey => { // jagaban lecture 129
         return [...Array(props.ingredients[igkey])].map((_,i) => {
             return <BurgerIngredient key={igkey + i} type={igkey} /> //mad oo // since you are returning an array of jsx element (alternative is to use an AUX (HOC)),  then you have to set a unique key
         }); 
     })
     .reduce((arr,el) => {  // funke lecture 130
         //console.log(el)
         return arr.concat(el)
     },[]); // what's the [] () second argument for ?
    // console.log(transformedIngredients)

     if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients!</p>
     }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;
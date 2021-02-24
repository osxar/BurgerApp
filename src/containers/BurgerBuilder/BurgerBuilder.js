import React, {Component} from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component{

        // constructor(props) {
        //     super(props);
        //     this.state={...}
        // }

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        }
    }

        addIngredientHandler = (type) => {
            const oldCount = this.state.ingredients[type];
            const updatedCounted = oldCount + 1;
            const updatedCounted = oldCount + 1;

        }

        removeIngredientHandler = (type) => {

        }


    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls />
            </Aux>
        );
    }
}

export default BurgerBuilder;
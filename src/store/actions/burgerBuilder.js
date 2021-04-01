import * as actionTypes from './actionTypes';
// import axios from "../../axios-orders";

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENTS,
        ingredientName: name
    };
};

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENTS,
        ingredientName: name
    };
};

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    };
};

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    };
};

export const initIngredients = () => {
    return {
        type: actionTypes.INIT_INGREDIENTS
    };
    // return dispatch => {
    //     axios.get('https://react-my-burger-bf94a-default-rtdb.firebaseio.com/ingredients.json')
    //         .then(response => {
    //             dispatch(setIngredients(response.data));
    //             // this.setState({ingredients: response.data})
    //             // if (this.state.ingredients.meat !== 0 || this.state.ingredients.salad !== 0 || this.state.ingredients.bacon !== 0 || this.state.ingredients.cheese !== 0 ) {
    //             //     this.setState({purchasable: true});
    //             // }
    //         })
    //         .catch(error => {
    //             dispatch(fetchIngredientsFailed());
    //             // this.setState({error: true});
    //         });
    // };
};
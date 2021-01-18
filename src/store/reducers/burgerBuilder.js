import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../../shared/utility";

const initialState = {
    ingredients: null,
    totalPrice: 4,
    loading: false,
    error: false,
    building: false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const addIngredient = (state, action) => {
    const updatedIngredients = updateObject(state.ingredients, {[action.ingredientName]: state.ingredients[action.ingredientName] + 1});
    return updateObject(state, {ingredients: updatedIngredients, totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName], building: true});
};

const removeIngredient = (state, action) => {
    const updatedIngredients2 = updateObject(state.ingredients, {[action.ingredientName]: state.ingredients[action.ingredientName] - 1});
    return updateObject(state, {ingredients: updatedIngredients2, totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName], building: true});
};

const setIngredient = (state, action) => {
    return updateObject(state, {
        ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat
        },
        totalPrice: 4,
        error: false,
        building: false
    });
};

const fetchIngredientsFailed = (state, action) => {
    return updateObject(state, {error: true});
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENTS: return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENTS: return removeIngredient(state, action);
        case actionTypes.SET_INGREDIENTS: return setIngredient(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state, action);
        default: return state;
    }
};

export default reducer;
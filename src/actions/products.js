import { 
    GET_ALL_PRODUCTS, 
    SET_ALL_PRODUCTS,
    ADD_TO_CART, 
    SELECT_BRANDS, 
    SELECT_COLORS,
    SELECT_MIN_PRICE,
    SELECT_MAX_PRICE,
    SELECT_MIN_DISCOUNT,
    SELECT_MAX_DISCOUNT,
	RESET
 } from "../constants/products";

export const getAllProducts = data => {
    const action = {
        type: GET_ALL_PRODUCTS,
        data
    };
    return action;
};

export const setAllProducts = data => {
    const action = {
        type: SET_ALL_PRODUCTS,
        data
    };
    return action;
};

export const addToCart = data => {
    const action = {
        type: ADD_TO_CART,
        data
    };
    return action;
};


export const selectBrands = data => {
    const action = {
        type: SELECT_BRANDS,
        data
    };
    return action;
};

export const selectColors = data => {
    const action = {
        type: SELECT_COLORS,
        data
    };
    return action;
};

export const selectMinDiscount = data => {
    const action = {
        type: SELECT_MIN_DISCOUNT,
        data
    };
    return action;
};

export const selectMaxDiscount = data => {
    const action = {
        type: SELECT_MAX_DISCOUNT,
        data
    };
    return action;
};

export const selectMinPrice = data => {
    const action = {
        type: SELECT_MIN_PRICE,
        data
    };
    return action;
};

export const selectMaxPrice = data => {
    const action = {
        type: SELECT_MAX_PRICE,
        data
    };
    return action;
};

export const resetFilters = data => {
    const action = {
        type: RESET,
        data
    };
    return action;
};






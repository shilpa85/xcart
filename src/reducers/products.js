import { GET_ALL_PRODUCTS, 
    SET_ALL_PRODUCTS, 
    ADD_TO_CART, 
    SEARCH_TERM, 
    SELECT_BRANDS, 
    SELECT_COLORS,
    SELECT_MIN_PRICE,
    SELECT_MAX_PRICE,
    SELECT_MIN_DISCOUNT,
    SELECT_MAX_DISCOUNT,
    RESET 
} from "../constants/products";

const initialState = {
    productList: [],
    productsInCart: [],
    cartCount: 0,
    searchObject: {},
    searchTerm: "",
    selectedBrands: [],
    selectedColors: [],
    minSelectedDiscount: 0,
    maxSelectedDiscount: 0,
    minSelectedPrice:0,
    maxSelectedPrice:0

};

export default (state = initialState, action) => {

    switch (action.type) {

        case GET_ALL_PRODUCTS:
            return {
                ...state,
                searchObject: action.data,
            };

        case SET_ALL_PRODUCTS:
                return {
                    ...state,
                    productList: action.data,
                };

        case ADD_TO_CART:
            return {
                ...state,
                cartCount: action.data,
            };
        
        case SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.data,
            };
        
        case SELECT_BRANDS:
            return {
                ...state,
                selectedBrands: action.data,
            };

        case SELECT_COLORS:
            return {
                ...state,
                selectedColors: action.data,
            };
        
        case SELECT_MIN_DISCOUNT:
            return {
                ...state,
                minSelectedDiscount: action.data,
            };
        
        case SELECT_MAX_DISCOUNT:
            return {
                ...state,
                maxSelectedDiscount: action.data,
            };

        case SELECT_MIN_PRICE:
            return {
                ...state,
                minSelectedPrice: action.data,
            };
        
        case SELECT_MAX_PRICE:
            return {
                ...state,
                maxSelectedPrice: action.data,
            };

        case RESET:
            return {
                ...state,
				selectedBrands: [],
				selectedColors: [],
				minSelectedDiscount: 0,
				maxSelectedDiscount: 0,
				minSelectedPrice:0,
				maxSelectedPrice:0
            };      
            
        default:
            return state;
    }
};

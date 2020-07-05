import {
    FETCH_PRODUCTS,
    FILTER_PRODUCTS_BY_CATEGORY,
    FILTER_PRODUCTS_BY_ID,
} from "../actions/types";

const initialState = {
    items: [],
    filteredItems: [],
    id: "",
    categories: "",
    sort: ""
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                items: action.payload,
                filteredItems: action.payload
            };
        case FILTER_PRODUCTS_BY_CATEGORY:
            return {
                ...state,
                filteredItems: action.payload.items,
                categories: action.payload.categories
            };
        case FILTER_PRODUCTS_BY_ID:
            return {
                ...state,
                filteredItems: action.payload.items,
                id: action.payload.id
            };
        default:
            return state;
    }
}

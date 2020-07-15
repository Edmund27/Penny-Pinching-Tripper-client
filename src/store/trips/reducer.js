import { STORE_NEW_TRIP, STORE_TRIPS } from "./actions";

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case STORE_TRIPS:
            return [...action.payload];
        case STORE_NEW_TRIP:
            return [...state, ...action.payload];
        default:
            return state;
    }
}

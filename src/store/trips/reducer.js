import { STORE_NEW_TRIP } from "./actions";

const initialState = {
};

export default (state = initialState, action) => {
    switch (action.type) {
        case STORE_NEW_TRIP:
            return { ...initialState, ...action.payload };
        default:
            return state;
    }
}

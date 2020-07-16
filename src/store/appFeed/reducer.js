const initialState = {
    currentPosition: {latitude: null, longitude: null}
    };

export default (state = initialState, action) => {
    switch (action.type) {
        case "STORE_CURRENT_POSITION": 
            return { ...state, currentPosition: {latitude: action.payload.latitude, longitude: action.payload.longitude}}
        default:
            return state;
    }
}
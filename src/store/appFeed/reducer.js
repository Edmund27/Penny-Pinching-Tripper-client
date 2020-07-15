const initialState = {
    currentPosition: {latitude: 0, longitude: 0}
    };

export default (state = initialState, action) => {
    switch (action.type) {
        case "STORE_CURRENT_POSITION": 
            return { ...state, currentPosition: {latitude: action.payload.latitude, longitude: action.payload.longitude}}
        default:
            return state;
    }
}
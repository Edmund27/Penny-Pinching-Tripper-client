const initialState = {
    currentPosition: { latitude: 0, longitude: 0 },
    currentTrip: { destination: [], businesses: {} }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "STORE_CURRENT_POSITION":
            return { ...state, currentPosition: { latitude: action.payload.latitude, longitude: action.payload.longitude } }
        case "SET_CURRENT_TRIP":
            return { ...state, currentTrip: { destiantion: action.payload } }
        case "STORE_BUSINESSES":
            return { ...state, currentTrip: { ...state.currentTrip, businesses: action.payload } }
        default:
            return state;
    }
}
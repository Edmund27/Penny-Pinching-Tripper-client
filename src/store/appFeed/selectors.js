export const selectCurrentPosition = (state) => {
    return state.appFeed.currentPosition
}

export const selectCurrentTrip = (state) => {
    return state.appFeed.currentTrip
}

export const selectTripCoordinates = (state) => {
    return state.appFeed.currentTrip.businesses.region.center
}

export const selectBusinesses = (state) => {
    return state.appFeed.currentTrip.businesses
}
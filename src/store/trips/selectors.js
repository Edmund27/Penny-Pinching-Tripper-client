export const selectTrips = state => state.trips

export const selectTripById = (id) => state => {
    return state.trips.find(trip => trip.id === id)
}
import React, { useState , useEffect } from "react";
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { selectTripById } from '../../store/trips/selectors'
import { fetchTrips } from "../../store/trips/actions";

export default function TripPage() {
    const dispatch = useDispatch()
    const params = useParams()   
    const tripId = parseInt(params.id)
    const trip = useSelector(selectTripById(tripId))

    console.log( "TRIP: ", trip )

    useEffect(() => {
        if(!trip) {
            dispatch(fetchTrips)
        } 
    }, [])


    return (
        <div>
            
        </div>
    );
}

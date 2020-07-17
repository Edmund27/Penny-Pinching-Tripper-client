import React, { useState , useEffect } from "react";
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { selectUser } from '../../store/user/selectors'
import { selectTripById } from '../../store/trips/selectors'
import { fetchTrips } from "../../store/trips/actions";
import TripCard from './TripCard'

export default function TripPage() {
    const dispatch = useDispatch()
    const params = useParams()   
    const tripId = parseInt(params.id)
    const trip = useSelector(selectTripById(tripId))
    const userId = useSelector(selectUser).id

    useEffect(() => {
        if (userId) {
          dispatch(fetchTrips(userId));
        }
      }, [userId, dispatch]);
    
    if(!trip){
        return <>{"Loading"}</>
    } else {
        return (
            <div style={{margin: "5rem"}}>
                <TripCard trip={trip}/>
            </div>
        );
    }
}

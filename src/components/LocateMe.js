import React from 'react'
import { useDispatch } from "react-redux";
import { storePosition } from '../store/appFeed/actions'


export default function LocateMe() {
    const dispatch = useDispatch()

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(fetchPosition);
        } else {
            console.log('geolocation not supported');
        }
    }

    function fetchPosition(position) {
        dispatch(storePosition(position.coords))
    }
    
    return (
        <div>
            <button onClick={getLocation}> Get Location</button>
        </div>
    )
}

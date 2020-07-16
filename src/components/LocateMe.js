import React from 'react'
import { useDispatch } from "react-redux";
import { storePosition } from '../store/appFeed/actions'
import { Button } from 'react-bootstrap'

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
            <Button onClick={getLocation}> Get Location</Button>
        </div>
    )
}

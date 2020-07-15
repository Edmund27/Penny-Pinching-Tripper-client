import React from 'react'

export default function LocateMe() {
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(fetchPosition);
        } else {
            console.log('geolocation not supported');
        }
    }

    function fetchPosition(position) {
        dispatch(storePosition(position))
    }
    
    return (
        <div>
            <button onClick={getLocation}> Get Location</button>
        </div>
    )
}

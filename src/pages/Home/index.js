import React from "react";

export default function Home() {


    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log('geolocation not supported');
        }
    }

    function showPosition(position) {
        console.log("THIS IS YOU POSITION", position)
    }

    return (
        <div>
            Home
            <button onClick={getLocation}> Get Location</button>
        </div>
    )
}

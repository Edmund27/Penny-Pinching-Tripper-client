import React from 'react'
import { Map, TileLayer } from 'react-leaflet'

export default function HomePageMap() {
    console.log("*****")
    return (
            <Map center={[52.370216, 4.895168]} zoom={12}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> 
                    contributors' 
                /> 
            </Map>
    )
}


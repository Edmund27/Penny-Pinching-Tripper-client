import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

export default function HomePageMap() {

    return (
            <Map center={[52.370216, 4.895168]} zoom={14}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> 
                    contributors' 
                /> 
            </Map>
    )
}


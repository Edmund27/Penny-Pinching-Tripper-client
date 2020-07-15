import React from 'react'
import { Map, TileLayer, Marker } from 'react-leaflet'
import LocateMe from './LocateMe'

export default function HomePageMap() {

    return (
            <Map center={[52.370216, 4.895168]} zoom={12}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> 
                    contributors' 
                /> 
            <Marker
             position={[52.365162999999995, 4.9055504999999995]}
             />
            </Map>

    )
}


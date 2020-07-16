import React from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentPosition } from '../store/appFeed/selectors'
import { Map, TileLayer, Marker } from 'react-leaflet'

export default function HomePageMap() {
    const currentPosition = useSelector(selectCurrentPosition)

    return (
            <Map center={[currentPosition.latitude || 52.379189, currentPosition.longitude || 4.899431]} zoom={12}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> 
                    contributors' 
                />
            {currentPosition.latitude ? 
            <Marker 
                position={[currentPosition.latitude, currentPosition.longitude]}
            /> 
            : null}

            </Map>

    )
}


import React from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentPosition } from '../store/appFeed/selectors'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export default function HomePageMap(props) {
    const currentPosition = useSelector(selectCurrentPosition)
    console.log(props.businesses)
    let center
    let position


    if (props.coordinates) {
        center = [props.coordinates.latitude, props.coordinates.longitude]
    } else {
        center = [currentPosition.latitude, currentPosition.longitude]
    }


    //console.log("POSTIION", position)

    return (
        <Map center={center} zoom={12}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> 
                    contributors'
            />
            {props.coordinates && props.businesses.businesses.map((business, id) => (
                console.log(business.coordinates.latitude, business.coordinates.longitude),
                (business.coordinates.longitude & business.coordinates.latitude) && <Marker position={[business.coordinates.latitude, business.coordinates.longitude]} >
                    <Popup>
                        <span>
                            <strong>{business.name}</strong>
                            {/* <p>{business.is_closed ? "is opened" : "is closed"}</p>
                            <p>rating: {business.rating}</p> */}
                            <br /> {business.is_closed ? "is opened" : "is closed"}
                            <br /> rating: <strong>{business.rating}</strong>
                            <br /> <img src={business.image_url} width="150" height="150"></img>
                        </span>
                    </Popup>
                </Marker>
            )
            )}
            {/* <Marker
                //position={[currentPosition.latitude, currentPosition.longitude]}
            /> */}
        </Map>

    )
}


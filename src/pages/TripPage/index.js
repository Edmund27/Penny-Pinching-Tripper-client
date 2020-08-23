import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import Map from '../../components/Map'
import LocateMe from '../../components/LocateMe'
import { selectTrips } from "../../store/trips/selectors";
import { selectTripCoordinates, selectBusinesses } from "../../store/appFeed/selectors";
import { fetchBusinesses } from "../../store/appFeed/actions";



export default function TripPage() {
    const dispatch = useDispatch();
    const [businessType, setBusinessType] = useState('restaurants');
    const [priceCategory, setPriceCategory] = useState(1);
    const { id } = useParams();
    //const tripData = useSelector(selectCurrentTrip);
    const trips = useSelector(selectTrips);
    //console.log("TRIPS", trips, "ANTONIA.CANDY")
    const currentTrip = trips.find(trip => trip.id == id);

    useEffect(() => {
        dispatch(fetchBusinesses(currentTrip.destinationCity, businessType, priceCategory))
    }, []);

    const businesses = useSelector(selectBusinesses);
    // businesses && const tripCoordinates = useSelector(selectTripCoordinates);
    //console.log("TRIP DATA", businesses && businesses.region.center)




    const submitFilter = () => {
        console.log(currentTrip.destinationCity, businessType, priceCategory)
        dispatch(fetchBusinesses(currentTrip.destinationCity, businessType, priceCategory))

    }

    return (
        <div>
            <h2>Trip to {currentTrip.destinationCity}, {currentTrip.destinationCountry} </h2>
            <div style={{
                width: "100%",
                height: "500px"
            }}>
                <Map businesses={businesses} coordinates={businesses && businesses.region.center} />
            </div>
            <LocateMe />

            <select name="price" className="countries order-alpha" id="countryId" onChange={(event) => setPriceCategory(event.target.value)}>
                <option value={1}>$</option>
                <option value={2}>$$</option>
                <option value={3}>$$$</option>
                <option value={4}>$$$$</option>
                    )
            </select>

            <select name="business" className="countries order-alpha" id="countryId" onChange={(event) => setBusinessType(event.target.value)}>
                <option value="food">restaurants</option>
                <option value="hotel">hotels</option>
                    )
            </select>
            <button
                onClick={() => submitFilter()}
                type="button"
                className="btn btn-primary btn-circle btn-md"
            >
                find
            </button>
        </div>


    );
}

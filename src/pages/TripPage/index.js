import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import Map from '../../components/Map'
import { selectTrips } from "../../store/trips/selectors";
import { selectBusinesses } from "../../store/appFeed/selectors";
import { fetchBusinesses } from "../../store/appFeed/actions";
import { Col, Form, Container, Button } from "react-bootstrap";



export default function TripPage() {
    const dispatch = useDispatch();
    const [businessType, setBusinessType] = useState('restaurants');
    const [priceCategory, setPriceCategory] = useState(1);
    const { id } = useParams();
    const trips = useSelector(selectTrips);
    const currentTrip = trips.find(trip => trip.id === parseInt(id));

    useEffect(() => {
        dispatch(fetchBusinesses(currentTrip.destinationCity, businessType, priceCategory))
    }, [businessType, currentTrip.destinationCity, dispatch, priceCategory]);

    const businesses = useSelector(selectBusinesses);
    // businesses && const tripCoordinates = useSelector(selectTripCoordinates);
    //console.log("TRIP DATA", businesses && businesses.region.center)




    const submitFilter = () => {
        console.log(currentTrip.destinationCity, businessType, priceCategory)
        dispatch(fetchBusinesses(currentTrip.destinationCity, businessType, priceCategory))

    }

    return (
        <Container className="text-center">
            <Container className="m-3">
                <h2>Trip to {currentTrip.destinationCity}, {currentTrip.destinationCountry} </h2>
                <Container className="m-5">
                    <Form style={{ opacity: '.7' }} as={Col} md={{ span: 3, offset: 0 }} className="float-left">
                        <Form.Group controlId="formBasicStartDate">
                            <Form.Label>Price</Form.Label>
                            <Form.Control as="select" size="lg" onChange={(event) => setPriceCategory(event.target.value)}>
                                <option value={1}>$</option>
                                <option value={2}>$$</option>
                                <option value={3}>$$$</option>
                                <option value={4}>$$$$</option>
                            </Form.Control>
                        </Form.Group>

                        <br />

                        <Form.Group controlId="formBasicStartDate">
                            <Form.Label>Business Type</Form.Label>
                            <Form.Control as="select" size="lg" onChange={(event) => setBusinessType(event.target.value)}>
                                <option value="food">restaurants</option>
                                <option value="hotel">hotels</option>
                            </Form.Control>
                        </Form.Group>

                        <br />
                        <br />

                        <Form.Group controlId="formBasicStartDate">
                            <Button
                                onClick={() => submitFilter()}
                                type="button"
                                variant="info"
                                block
                            >
                                Find
            </Button>
                        </Form.Group>
                    </Form>




                    <Container style={{
                        width: "70%",
                        height: "500px"
                    }}
                        className="float-right"
                    >
                        <Map businesses={businesses} coordinates={businesses && businesses.region.center} />
                    </Container>

                    {/* <select name="price" className="countries order-alpha" id="countryId" onChange={(event) => setPriceCategory(event.target.value)}>
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
            <Button
                onClick={() => submitFilter()}
                type="button"
                className="btn btn-primary btn-circle btn-md"
                variant="info"
            >
                find
            </Button> */}

                </Container>
            </Container>
        </Container>


    );
}

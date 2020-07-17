import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getYelp } from '../../store/appFeed/actions'
import Card from 'react-bootstrap/Card'
import Map from '../../components/Map'
import LocateMe from '../../components/LocateMe'
import moment from 'moment'
import { Button, Form } from 'react-bootstrap'

export default function TripCard(props) {
    const dispatch = useDispatch()
    const trip = props.trip
    const [budget, set_budget] = useState(0)
    const [search_category, set_search_category] = useState("restaurants")

    const city = "amsterdam"


    const handleSubmit = (event) => {
        event.preventDefault()

        dispatch(getYelp(
            budget,
            search_category,
            city
            ))

        set_budget(0)
        set_search_category("")
    }

    return (
            <Card style={{ width: '52rem' }}>
                <div style={{width: "44rem", height: "28rem", margin: "4rem"}}>
                    <Map/>
                </div>
                <Card.Body>
                    <Card.Title>{trip.destinationCountry}</Card.Title>
                    <Card.Text>
                        Start: {moment(trip.startDate).format('YYYY-MM-DD')}
                    </Card.Text>
                    <Card.Text>
                        End: {moment(trip.endDate).format('YYYY-MM-DD')}
                    </Card.Text>
                    <Card.Text>
                        Budget: {trip.budget}
                    </Card.Text>
                    <LocateMe/>
                    <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>How much do you want to spend today?</Form.Label>
                        <Form.Control                             
                            as="select"
                            value={budget}
                            onChange={e => set_budget(e.target.value)}
                            >
                            <option value={1}>$</option>
                            <option value={2}>$$</option>
                            <option value={3}>$$$</option>
                            <option value={4}>$$$$</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>What are you looking for?</Form.Label>
                        <Form.Control 
                            as="select"
                            value={search_category}
                            onChange={e => set_search_category(e.target.value)}
                            >
                            <option value={"restaurants"}>A plate of food</option>
                            <option value={"hotels"}>A place to sleep</option>
                        </Form.Control>
                    </Form.Group>
                    <Button type="submit">Search</Button>
                    </Form>
                </Card.Body>
            </Card>
    )
}

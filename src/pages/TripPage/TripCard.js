import React from 'react'
import Card from 'react-bootstrap/Card'
import Map from '../../components/Map'
import LocateMe from '../../components/LocateMe'
import moment from 'moment'

export default function TripCard(props) {
    const trip = props.trip
    
    return (
            <Card style={{ width: '18rem' }}>
                <div style={{width: "14rem", height: "14rem", margin: "2rem"}}>
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
                </Card.Body>
            </Card>
    )
}

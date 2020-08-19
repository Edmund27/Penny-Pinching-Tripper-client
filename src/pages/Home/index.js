import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// import Map from '../../components/Map'
// import LocateMe from '../../components/LocateMe'
import NewTripForm from '../../components/NewTripForm'
import { selectTrips } from "../../store/trips/selectors";
import { fetchTrips } from "../../store/trips/actions";
import { setCurrentTrip } from "../../store/appFeed/actions";
import { selectUser } from "../../store/user/selectors";
import { Col, Container, Row, Card, Button, Jumbotron } from "react-bootstrap";
// import CurrencyConverter from "../../components/CurrencyConverter/index";



export default function Home() {
  const dispatch = useDispatch();
  const [openTripForm, setOpenTripForm] = useState(false);
  const trips = useSelector(selectTrips);
  const userId = useSelector(selectUser).id
  const history = useHistory()

  useEffect(() => {
    if (userId) {
      dispatch(fetchTrips(userId));
    }
  }, [userId, dispatch]);

  const openTrip = (id, city, country) => {
    dispatch(setCurrentTrip(city, country))
    history.push(`/home/${id}`)
  }




  const tripFormToggle =
    openTripForm
      ? <div>
        <button
          onClick={() => setOpenTripForm(false)}
          type="button"
          className="btn btn-primary btn-circle btn-md"
        >
          <strong style={{ fontSize: "2em" }}>Close form</strong>
        </button>
        <NewTripForm />
      </div>
      : <div >
        <button
          onClick={() => setOpenTripForm(true)}
          type="button"
          className="btn btn-primary btn-circle btn-md"
        >
          <strong style={{ fontSize: "2em" }}>Add New Trip</strong>
        </button>
      </div>




  return (
    <Container >
      <div>

        {tripFormToggle}
      </div>

      <Row >
        {trips.length && trips.map((trip, i) => {
          const startDateArray = trip.startDate.split(/[ T.:|]+/)
          const endDateArray = trip.endDate.split(/[ T.:|]+/)
          return (
            <Col xs={4} key={i} className="box">
              <Jumbotron>
                <h1>{trip.destinationCity}, {trip.destinationCountry}</h1>
                <p>
                  {startDateArray[0]} - {endDateArray[0]}
                </p>
                <p>
                  <Button variant="primary" action onClick={() => openTrip(trip.id, trip.destinationCity, trip.destinationCountry)}>Open trip</Button>
                </p>
              </Jumbotron>
              {/* <Card >
                <Card.Header>{trip.destinationCity}, {trip.destinationCountry}</Card.Header>
                <Card.Body>
                  <Card.Title>{startDateArray[0]} - {endDateArray[0]}</Card.Title>
                  <Button variant="primary" action onClick={() => openTrip(trip.id)}>Open trip</Button>
                </Card.Body>
              </Card> */}
              {/* <Link to={`/home/${trip.id}`}>
                    <div className="card text-dark">
                      <div className="card-body">
                        <h5 className="card-text">
                          {`Trip to ${trip.destinationCity}, ${trip.destinationCountry}`}
                        </h5>
                      </div>
                    </div>
                  </Link>
                  <p>
                    {`from ${startDateArray[0]}`}
                  </p>
                  <p>
                    {`until ${endDateArray[0]}`}
                  </p>
                  <p>
                    {`your budget ${trip.budget}`}
                  </p> */}
            </Col>
          );
        })}
      </Row>
    </Container>
  )
}

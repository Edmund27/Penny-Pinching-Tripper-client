import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Map from '../../components/Map'
import LocateMe from '../../components/LocateMe'
import NewTripForm from '../../components/NewTripForm'
import { selectTrips } from "../../store/trips/selectors";
import { Col, Container, Row } from "react-bootstrap";


export default function Home() {
  const [openTripForm, setOpenTripForm] = useState(false);
  const trips = useSelector(selectTrips);


  console.log("TRIPS", trips)

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
      : <div>
        <button
          onClick={() => setOpenTripForm(true)}
          type="button"
          className="btn btn-primary btn-circle btn-md"
        >
          <strong style={{ fontSize: "2em" }}>Add New Trip</strong>
        </button>
      </div>


  return (
    <div>
      <div>
        {tripFormToggle}
      </div>
      <div>
        <Container>
          <Row>
            {trips.length && trips.map((trip, i) => {
              const startDateArray = trip.startDate.split(/[ T.:|]+/)
              const endDateArray = trip.endDate.split(/[ T.:|]+/)
              console.log("START DATE ARRAY", startDateArray)
              return (
                <Col xs={5} key={i} className="box">
                  <Link to={`/home/${trip.id}`}>
                    <div className="card text-dark">
                      <div className="card-body">
                        <h5 className="card-text">
                          {`Trip to ${trip.destinationCountry}`}
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
                  </p>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <div style={{
        width: "100%",
        height: "500px"
      }}>
        <Map />
      </div>
      <LocateMe />
    </div>
  )
}

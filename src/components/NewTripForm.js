import React, { useState } from "react";
import { Col, Form, Container, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createTrip } from "../store/trips/actions";
import csc from 'country-state-city'

export default function NewTripForm() {
  //const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [budget, setBudget] = useState(0);
  const [countryId, setCountryId] = useState();
  const [stateId, setStateId] = useState();
  const [cityName, setCityName] = useState("");


  const dispatch = useDispatch();

  function submitForm(event) {
    event.preventDefault();
    const countryName = csc.getCountryById(countryId).name

    dispatch(createTrip(countryName, cityName, startDate, endDate, budget));

    //setDestination("");
    setStartDate("");
    setEndDate("");
    setBudget("");
    setCountryId(null)
    setStateId(null)
    setCityName('')

  }

  const selectCity =
    <Form.Group>
      <Form.Label>Your Location</Form.Label>
      <Form.Control as="select" onChange={(event) => setCountryId(event.target.value)} >
        <option >Select Country</option>
        {csc.getAllCountries().map((country) => {
          return (
            <option key={country.id} value={country.id}>{country.name}</option>
          )
        })}
      </Form.Control>
      {countryId &&
        <Form.Control as="select" name="state" className="states order-alpha" id="stateId" onChange={(event) => setStateId(event.target.value)}>
          <option >Select State</option>
          {csc.getStatesOfCountry(countryId).map((state) => {
            return (
              <option key={state.id} value={state.id}>{state.name}</option>
            )
          })}
        </Form.Control>}
      {stateId && <Form.Control as="select" name="city" className="cities order-alpha" id="cityId" onChange={(event) => setCityName(event.target.value)}>
        <option >Select City</option>
        {csc.getCitiesOfState(stateId).map((city) => {
          return (
            <option key={city.id} value={city.name}>{city.name}</option>
          )
        })}
      </Form.Control>}
    </Form.Group >


  return (
    <Container>
      <Form as={Col} md={{ span: 3, offset: 0 }} className="mt-1">
        {selectCity}
        {/* <Form.Group controlId="formBasicDestination">
          <Form.Label>Destination</Form.Label>
          <Form.Control
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
            type="text"
            // autocomplete="off"
            placeholder="Enter your destination"
            required
          /> 
        </Form.Group>*/}
        <Form.Group controlId="formBasicStartDate">
          <Form.Label>Departure</Form.Label>
          <Form.Control
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
            type="date"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicEndDate">
          <Form.Label>Return</Form.Label>
          <Form.Control
            value={endDate}
            onChange={(event) => setEndDate(event.target.value)}
            type="date"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicBudget">
          <Form.Label>Budget</Form.Label>
          <Form.Control
            value={budget}
            onChange={(event) => setBudget(event.target.value)}
            type="number"
            min="0"
            // max="100"
            // step="5"
            placeholder="Enter your budget"
            required
          />
        </Form.Group>
        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container >
  );
}

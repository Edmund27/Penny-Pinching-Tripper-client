import React, { useState } from "react";
import { Col, Form, Container, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createTrip } from "../store/trips/actions";

export default function NewTripForm() {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [budget, setBudget] = useState(0);

  const dispatch = useDispatch();

  function submitForm(event) {
    event.preventDefault();

    dispatch(createTrip(destination, startDate, endDate, budget));

    setDestination("");
    setStartDate("");
    setEndDate("");
    setBudget("");

  }


  return (
    <Container>
      <Form as={Col} md={{ span: 3, offset: 0 }} className="mt-1">
        <Form.Group controlId="formBasicDestination">
          <Form.Label>Destination</Form.Label>
          <Form.Control
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
            type="text"
            // autocomplete="off"
            placeholder="Enter your destination"
            required
          />
        </Form.Group>
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
    </Container>
  );
}

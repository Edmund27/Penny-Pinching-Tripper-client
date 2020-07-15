import React from "react";
import { Col, Form, Container, Button } from "react-bootstrap";

export default function NewTripForm() {
  return (
    <Container>
      <Form as={Col} md={{ span: 3, offset: 0 }} className="mt-1">
        <Form.Group controlId="formBasicDestination">
          <Form.Label>Destination</Form.Label>
          <Form.Control
            // value=
            // onChange={(event) => setDestination(event.target.value)}
            type="text"
            // autocomplete="off"
            placeholder="Enter your destination"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicStartDate">
          <Form.Label>Departure</Form.Label>
          <Form.Control
            // value=
            // onChange={(event) => setStartDate(event.target.value)}
            type="date"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicEndDate">
          <Form.Label>Return</Form.Label>
          <Form.Control
            // value=
            // onChange={(event) => setEndDate(event.target.value)}
            type="date"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicBudget">
          <Form.Label>Budget</Form.Label>
          <Form.Control
            // value=
            // onChange={(event) => setBudget(event.target.value)}
            type="number"
            min="0"
            // max="100"
            // step="5"
            placeholder="Enter your budget"
            required
          />
        </Form.Group>
        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" /*onClick={submitForm}*/>
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}

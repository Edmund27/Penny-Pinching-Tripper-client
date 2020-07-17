import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { signUp } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import csc from 'country-state-city'

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();
  const [countryId, setCountryId] = useState();
  const [stateId, setStateId] = useState();
  const [cityName, setCityName] = useState("");

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    event.preventDefault();

    const countryName = csc.getCountryById(countryId).name

    dispatch(signUp(name, email, password, cityName, countryName));

    setEmail("");
    setPassword("");
    setName("");
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
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Signup</h1>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={event => setName(event.target.value)}
            type="text"
            placeholder="Enter name"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={event => setEmail(event.target.value)}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={event => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        {selectCity}
        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Sign up
          </Button>
        </Form.Group>
        <Link to="/login">Click here to log in</Link>

      </Form>
    </Container>
  );
}

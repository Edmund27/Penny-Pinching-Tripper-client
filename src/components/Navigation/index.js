import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import "./styles.css";


export default function Navigation() {
  const token = useSelector(selectToken);
  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Navbar className="nav-background" bg="light" expand="lg">
      <img
        src="https://www.nicepng.com/png/full/253-2536210_simple-at-getdrawings-com-vector-black-and-white.png"
        //"https://www.nicepng.com/png/full/299-2995376_travel-icons-transparent-background.png"
        width="100"
        height="100"
        alt="penny"
      ></img>
      <Navbar.Brand as={NavLink} to="/home" style={{ 'font-family': 'Futura', 'font-size': '25px' }}>
        Penny Pinching Tripper
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          {loginLogoutControls}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

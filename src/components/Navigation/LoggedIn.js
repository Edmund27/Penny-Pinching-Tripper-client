import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/user/actions";
import Button from "react-bootstrap/Button";
import { NavDropdown } from "react-bootstrap";
import NavbarItem from "./NavbarItem";
import CurrencyConverter from "../../components/CurrencyConverter/index";

export default function LoggedIn() {
  const dispatch = useDispatch();

  return (
    <>
      <NavbarItem path="/home" linkText="Home" />

      <NavDropdown title="Currency Converter" id="basic-nav-dropdown">
        <NavDropdown.Header style={{ opacity: '.8' }}><CurrencyConverter /></NavDropdown.Header>
      </NavDropdown>

      <Button variant="outline-dark" onClick={() => dispatch(logOut())}>Logout</Button>
    </>
  );
}

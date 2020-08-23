import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";
import NavbarItem from "./NavbarItem";
import CurrencyConverter from "../../components/CurrencyConverter/index";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [openConverter, setOpenConverter] = useState(false);

  // const converterToggle = openConverter
  //   ? <Nav.Item style={{ padding: ".5rem 1rem" }}>
  //     <CurrencyConverter />
  //     <Button onClick={() => setOpenConverter(false)}>Converter</Button>
  //   </Nav.Item>
  //   : <Button onClick={() => setOpenConverter(true)}>Converter</Button>

  return (
    <>

      <NavbarItem path="/home" linkText="Home" />
      {/* <NavbarItem path="/userpage" linkText="User Page" /> */}
      <Nav.Item ><CurrencyConverter /></Nav.Item>
      <Button onClick={() => dispatch(logOut())}>Logout</Button>
    </>
  );
}

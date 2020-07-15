import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import TripPage from "./pages/TripPage";
import UserPage from "./pages/UserPage";
import Convertor from "./pages/Convertor";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import { Jumbotron } from "react-bootstrap";
import { selectToken } from "./store/user/selectors";


const Other = () => (
  <Jumbotron>
    <h1>Other</h1>
  </Jumbotron>
);

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoading = useSelector(selectAppLoading);
  const token = useSelector(selectToken);



  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  useEffect(() => {
    if (token == null) {
      history.push("/login");
    }
  }, [token, history]);


  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/home/:id" component={TripPage} />
        <Route path="/userpage" component={UserPage} />
        <Route path="/convertor" component={Convertor} />
        <Route path="/other" component={Other} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;

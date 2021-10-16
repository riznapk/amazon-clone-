import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is logged in
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        //the user is not loggedin
        dispatch({ type: "SET_USER", user: authUser });
      } 
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

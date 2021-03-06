import React from "react";
import "./App.css";
import Home from "./views/home/Home";
import Details from "./views/details/Details";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/character/:id" component={Details} />
          <Route exact path="/nav" component={Navbar} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;

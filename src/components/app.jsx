import React from "react";
import "./css/app.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";
import NavBar from "./navbar";
import Properties from "./properties";
import { Route } from "react-router-dom";
import AddProperty from "./addproperty";

library.add(faStroopwafel);

const App = () => (
  <div>
    <NavBar />
    <switch>
      <Route exact path="/" component={Properties} />
      <Route exact path="/add-property" component={AddProperty} />
    </switch>
  </div>
);

export default App;

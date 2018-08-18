import React from 'react';
import './css/navbar.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

library.add(faStroopwafel);

const NavBar = () => (
  <div>
    <ul className="nav">
      <Link className="item" to="/">View Properties</Link>
      <Link className="item" to="/add-propety">Add Property</Link>
    </ul>
  </div>
);

export default NavBar;


//<Link className="item" to="/">View Properties</Link>
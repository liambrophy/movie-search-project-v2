import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="nav__container">
        <div className="nav__logo--container">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs82lgU1CLvFOxHsmyIbR85bbIx2qX6wS-fA&usqp=CAU" alt="" className="nav__logo" />
          <h1 className="nav__logo--header">MovieSearch</h1>
        </div>
        <ul>
          <Link to="/">
            <li className="nav__link">Home</li>
          </Link>
          <li className="nav__link">About</li>
          <li className="nav__link">Contact</li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;
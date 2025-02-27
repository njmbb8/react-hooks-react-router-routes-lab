import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

  return (
    <div className = 'navbar'>
      <NavLink
        to='/'
        exact
        style = {linkStyles}
        activeStyle={{background: "darkblue"}}
      >
        Home
      </NavLink>
      <NavLink
        to='/Movies'
        exact
        style = {linkStyles}
        activeStyle={{background: "darkblue"}}
      >
        Movies
      </NavLink>
      <NavLink
        to='/Directors'
        exact
        style = {linkStyles}
        activeStyle={{background: "darkblue"}}
      >
        Directors
      </NavLink>
      <NavLink
        to='/Actors'
        exact
        style = {linkStyles}
        activeStyle={{background: "darkblue"}}
      >
        Actors
      </NavLink>
    </div>
  )
}

export default NavBar;

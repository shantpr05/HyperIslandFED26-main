import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/PropsComponent">PropsComponent</NavLink>
        </li>
        <li>
          <NavLink to="/EffectsComponent">EffectsComponent</NavLink>
        </li>
        <li>
          <NavLink to="/MyStateComponent"> MyStateComponent</NavLink>
        </li>           
      </ul>
    </nav>
  );
};

export default Nav;
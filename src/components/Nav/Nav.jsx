import React from 'react';
import {NavLink} from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/counter">Counter</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
    </nav>
  )
}

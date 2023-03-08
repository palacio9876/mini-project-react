import React from 'react'
import { Nav } from "../../components/Nav/Nav.jsx";
import Logo from "../../assets/img/logo.png";
import { Button } from "../../components/Button/Button.jsx";
import "../../assets/css/Header.css";

export const Header = () => {
  return (
    <header>
        <img src={Logo} alt="Logo" />
        <Nav />
        <Button />
    </header>
  )
}

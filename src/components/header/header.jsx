import React from "react";
import { Link } from "react-router-dom";// Import necessary dependencies
import "./header.scss";

export default function Header() {

  const disconnect = () => {
    console.log('disconnect');
  };

  return (
    <header>
      <Link className="logoLink" to="/">
        {/* <img src={Logo} alt="" className="logo" /> */}
        My Blog
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/login">Connexion</Link>
          </li>
          <li>
            <Link to="/register">Inscription</Link>
          </li>
          <li>
            <Link to="/dashboard">Tableau de bord</Link>
          </li>
          <li>
            <Link to="/" onClick={disconnect}>Déconnexion</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

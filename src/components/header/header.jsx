import React from "react";
import { Link } from "react-router-dom";// Import necessary dependencies
import "./header.scss";

export default function Header() {

  const disconnect = () => {
    console.log('disconnect');
  };

  return (
    <header>
      <Link className="logo" to="/">MyBlog</Link>
      <nav>
        <ul>
          {/* Si l'utilisateur n'est pas connecté */}
          <li>
            <Link to="/login">Connexion</Link>
          </li>
          <li>
            <Link to="/register">Inscription</Link>
          </li>
          {/* Si l'utilisateur est connecté */}
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

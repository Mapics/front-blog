import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";

import axios from "axios";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [formRegister, setFormRegister] = useState({
    name: "",
    firstname: "",
    email: "",
    password: "",
  });

  const formChange = (e) => {
    setFormRegister({ ...formRegister, [e.target.name]: e.target.value });
  };

  const addUser = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/register", formRegister);
      setFormRegister({
        name: "",
        firstname: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register">
      <div className="containerRegister">
        <form onSubmit={addUser}>
          <h2 className="title">Inscription</h2>
          <p>Créez votre compte</p>
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Entrez votre nom"
            value={formRegister.name}
            onChange={formChange}
            required
          />
          <label htmlFor="firstname">Prénom</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Entrez votre prénom"
            value={formRegister.firstname}
            onChange={formChange}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Entrez votre email"
            value={formRegister.email}
            onChange={formChange}
            required
          />
          <label htmlFor="password">Mot de passe</label>
          <div className="containerPassword">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
              placeholder="Entrez votre mot de passe"
              value={formRegister.password}
              onChange={formChange}
              required
            />
            <button className="passwordVisibility" onClick={handleShowPassword}></button>
          </div>
          <button type="submit">Continuer</button>
        </form>
        <div className="haveAccount">
          <p>Déjà un compte ?</p>
          <Link to="/login">Connectez-vous</Link>
        </div>
      </div>
    </div>
  );
}

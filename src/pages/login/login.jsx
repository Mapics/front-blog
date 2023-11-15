import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.scss";

import axios from "axios";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const connexionUser = async (e) => {
    e.preventDefault();

    try {
      const reponse = await axios.post("http://localhost:8000/login", {
        email: email,
        password: password,
      });

      if (reponse.data) {
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <div className="containerLogin">
        <form onSubmit={connexionUser}>
          <h2 className="title">Login</h2>
          <p>Connectez-vous à votre compte</p>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Entrez votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Mot de passe</label>
          <div className="containerPassword">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Entrez votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="passwordVisibility" onClick={handleShowPassword}></button>
          </div>
          <button type="submit">Se connecter</button>
        </form>
        <div className="notHaveAccount">
          <p>Vous n'avez pas de compte ?</p>
          <Link to="/register">Inscrivez-vous</Link>
        </div>
      </div>
    </div>
  );
}

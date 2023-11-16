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

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const reponse = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (reponse.ok) {
        console.log('Connexion réussie');
      } else {
        console.error('Erreur lors de la connexion');
      }

    } catch(err) {
      console.error('Erreur inattendue', err);
    } finally {
      setEmail('');
      setPassword('');
    }
  }
    return (
    <div className="login">
      <form onSubmit={handleLogin}>
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
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Entrez votre mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Connexion</button>
      </form>
    </div>
  );
}
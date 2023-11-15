import React, { useState } from "react";
import "./login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <form action="">
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

import React, { useState } from 'react'
import './register.scss'

export default function Register() {
  const [name, setName] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="register">
      <form action="">
        <h2 className="title">Register</h2>
        <p>Créez votre compte</p>
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Entrez votre nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="firstname">Prénom</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="Entrez votre prénom"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          required
        />
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
        <button className="showPassword"></button>
        <button type="submit">Connexion</button>
      </form>
    </div>
  )
}

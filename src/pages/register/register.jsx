import React, { useState } from 'react'
import './register.scss'
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [username, setUsername] = useState("");
  const [userfirstname, setUserfirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      console.log("ca passe")
      const response = await fetch('http://localhost:8000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          username: username,
          userfirstname: userfirstname,
        }),
      });

      if (response.ok) {
        console.log('Inscription réussie');
        navigate('/login');  // Redirige vers la page de connexion après l'inscription
      } else {
        console.error('Erreur lors de l\'inscription');
      }
    } catch (error) {
      console.error('Erreur inattendue', error);
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleSignup}>
        <h2 className="title">Register</h2>
        <p>Créez votre compte</p>
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          name="name"
          id="username"
          placeholder="Entrez votre nom"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="firstname">Prénom</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="Entrez votre prénom"
          value={userfirstname}
          onChange={(e) => setUserfirstname(e.target.value)}
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
        <button type="submit">Inscription</button>
      </form>
    </div>
  );
}
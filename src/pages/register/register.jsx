<<<<<<< Updated upstream
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
=======
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
        navigate.push('/login');  // Redirige vers la page de connexion après l'inscription
      } else {
        console.error('Erreur lors de l\'inscription');
      }
    } catch (error) {
      console.error('Erreur inattendue', error);
>>>>>>> Stashed changes
    }
  };

  return (
    <div className="register">
<<<<<<< Updated upstream
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
=======
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
>>>>>>> Stashed changes

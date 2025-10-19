import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../services/ApiServices.js";

export const Home = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(userData);
      alert("User registered successfully!");
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form className="form mt-5 m-auto" onSubmit={handleSubmit}>
      <p className="title">Register</p>
      <p className="message">Signup now and get full access to our app.</p>

      <label>
        <input
          className="input"
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
        />
        <span>Email</span>
      </label>

      <label>
        <input
          className="input"
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          required
        />
        <span>Password</span>
      </label>

      <button className="submit" type="submit">
        Submit
      </button>

      <p className="signin">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </form>
  );
};

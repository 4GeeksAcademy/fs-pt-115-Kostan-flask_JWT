import React, { useState } from "react";
import { login } from "../services/ApiServices";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form);
      alert("Login successful!");
      navigate("/private");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>🔐 Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          className="form-control my-2"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          className="form-control my-2"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button className="btn btn-primary mt-3">Login</button>
      </form>
    </div>
  );
};

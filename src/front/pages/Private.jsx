// src/pages/Private.jsx
import React, { useEffect, useState } from "react";
import { getPrivateData } from "../services/ApiServices";
import { useNavigate } from "react-router-dom";

export const Private = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must log in first!");
      navigate("/login");
      return;
    }

    getPrivateData()
      .then(setUser)
      .catch((err) => {
        alert(err.message);
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, [navigate]);

  if (!user) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container mt-5 text-center">
      <h2>🔒 Private Page</h2>
      <h1>Welcome, <b>{user.email}</b>!</h1>
      <a href="https://youtu.be/xvFZjo5PgG0?list=RDxvFZjo5PgG0">¡Click Here!</a><br></br>
      <button
        className="btn btn-danger mt-3 m-auto"
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
};

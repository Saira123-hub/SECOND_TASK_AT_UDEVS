


import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './WelcomeScreen.css'; 

function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-5 fade-in">
      <h1 className="mb-3 display-4 fw-bold text-primary animate-heading">
        🎓 University Portal
      </h1>
      <p className="lead">Welcome! Please register to continue.</p>
      <button 
        className="btn btn-outline-primary btn-lg animate-button"
        onClick={() => navigate('/register')}
      >
        Go to Registration
      </button>
    </div>
  );
}

export default WelcomeScreen;

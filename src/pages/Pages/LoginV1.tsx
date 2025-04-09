import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// img
import authlogin from "../../assets/images/authentication/img-auth-login.png";
import logodark from "../../assets/images/logo-dark.svg";

import axios from "axios";
import { Card } from "react-bootstrap";

const LoginV1 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/auth/login",
        new URLSearchParams({
          username,
          password,
        }),
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );

      localStorage.setItem("token", response.data.access_token);
      navigate("/dashboard");
    } catch (err) {
      setError("Wrong user or password");
    }
  };

  return (
    <div className="auth-main v1">
      <div className="auth-wrapper">
        <div className="auth-form">
          <Card className="my-5">
            <Card.Body>
              <div className="text-center">
                <img
                  src={authlogin}
                  alt="login visual"
                  className="img-fluid mb-3"
                />
                <h4 className="f-w-500 mb-1">Login to Darkvision Dashboard</h4>
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {error && <p className="text-danger text-center">{error}</p>}

              <div className="d-grid mt-4">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginV1;

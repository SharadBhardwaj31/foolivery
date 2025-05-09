import React, { useState } from "react";
import "./style.css";
import { LockKeyhole, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email.length === 0) {
      alert("Email is required");
    } else if (password.length === 0) {
      alert("Password is required");
    } else if (password.length < 8) {
      alert("Password should be atleast of 8 characters");
    }

    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log(data);

    setEmail("");
    setPassword("");
  };

  return (
    <main className="signup">
      <section className="signupContainer">
        <div className="signupHeader">
          <h1>Login to Foolivery</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="signupInput">
            <Mail size={22} strokeWidth={1.5} />
            <input
              type="email"
              placeholder="Enter your mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="signupInput">
            <LockKeyhole size={22} strokeWidth={1.5} />
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Login</button>
        </form>

        <p>
          {" "}
          Don&apos;t have account?<Link to="/signup">Signup</Link>
        </p>
      </section>
    </main>
  );
};

export default Login;

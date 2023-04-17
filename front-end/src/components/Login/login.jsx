import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

import "./login.css";

const Login = ({ setUser: setLoginUser }) => {
  const [user, setUser] = useState({
    email: ``,
    password: ``,
  });

  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const login = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      `${process.env.REACT_APP_PEEP_URL}/login`,
      user
    );
    alert(res.data.message);
    console.dir(res.data.user);
    setLoginUser(res.data.user);
    setUser({ email: ``, password: `` });
    setLoggedIn(res.data.user ? true : false);
    if (res.data.user) {
      // console.log(res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));
    }
  };
  return (
    <>
      {loggedIn && <Navigate to="/" />}
      <div className="login-home">
        <div className="login-card my-5">
          <form onSubmit={login}>
            <div className="mb-3 ">
              <label className="form-label">Username / Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={user.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>
            <div className="mb-3 l">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                onChange={handleChange}
                value={user.password}
                placeholder="Password"
              />
            </div>
            <div className="text-center submit-links">
              <button type="submit" className="btn btn-primary login-button">
                Login
              </button>
              <span>
                <Link to="/register" className="register-link">
                  Don&#x27;t have an account? Register now!
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

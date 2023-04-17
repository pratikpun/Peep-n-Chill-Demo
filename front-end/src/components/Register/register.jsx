import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./register.css";
import axios from "axios";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const { name, email, password } = user;
    if (name && email && password) {
      const res = await axios.post(
        `${process.env.REACT_APP_PEEP_URL}/register`,
        user
      );
      if (res.data.user) {
        setIsRegistered(true);
        // localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/login");
      }
      alert(res.data.message);
      setUser({ email: ``, password: ``, name: `` });
      return;
    }
    alert(`Invalid input`);
  };
  return (
    <div className="register-home">
      <div className=" form-card my-5">
        <h3 className="text-center">Create a new account, it's simple!</h3>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label> Name: </label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input
              className="form-control"
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <small className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input
              className="form-control"
              type="password"
              id="create-account-email"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Password"
            />
          </div>
          <div className="submit-links text-center">
            <button type="submit" className="btn btn-primary ">
              Register
            </button>
            <span>
              <Link to="/login">Have an account? Login</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

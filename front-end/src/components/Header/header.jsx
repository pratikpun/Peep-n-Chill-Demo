import { useState, useEffect } from "react";
import "./header.css";

const Header = ({ currentUser }) => {
  const [user, setUser] = useState({});
  const [loggedInUser] = useState(JSON.parse(localStorage.getItem("user")));
  useEffect(() => {
    // console.log(loggedInUser.name);
    // const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, [loggedInUser]);

  // console.log(user);
  const logout = () => {
    localStorage.clear();
    setUser({});
  };
  return (
    <div className="header">
      <div className="container ">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid p-3">
            <a className="navbar-brand border-bottom logo" href="/">
              Peep n Chitter
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto ">
                {localStorage.getItem("user") ? (
                  <>
                    <h5>
                      <span className="username"> Hi, {user.name} || </span>{" "}
                    </h5>
                    <a
                      className="nav-link links"
                      aria-current="page"
                      href="/add"
                    >
                      POST
                    </a>
                    <a href="/" className="nav-link links" onClick={logout}>
                      LOGOUT
                    </a>
                  </>
                ) : (
                  <>
                    <a className="nav-link links" aria-current="page" href="/">
                      HOME
                    </a>
                    <a
                      className="nav-link links"
                      aria-current="page"
                      href="/add"
                    >
                      POST
                    </a>

                    <a className="nav-link links" href="/login">
                      LOGIN
                    </a>
                    <a className="nav-link links" href="/register">
                      REGISTER
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;

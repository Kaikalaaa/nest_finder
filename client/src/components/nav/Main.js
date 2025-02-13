import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";

export default function Main() {
  // context
  const [auth, setAuth] = useAuth();
  // hooks
  const navigate = useNavigate();

  const logout = () => {
    setAuth({ user: null, token: "", refreshToken: "" });
    localStorage.removeItem("auth");
    navigate("/login");
  };

  const loggedIn =
    auth.user !== null && auth.token !== "" && auth.refreshToken !== "";

  const handlePostAdClick = () => {
    if (loggedIn) {
      navigate("/ad/create");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="nav d-flex justify-content-between lead" style={{ backgroundColor: "#0b0c10", color: "#c5c6c7", padding: "10px" }}>
      <NavLink className="nav-link" aria-current="page" to="/" style={{ color: "#c5c6c7", marginRight: "10px", textDecoration: "none", fontWeight: "bold" }}>
        HOME
      </NavLink>

      <NavLink className="nav-link" aria-current="page" to="/search" style={{ color: "#c5c6c7", marginRight: "10px", textDecoration: "none", fontWeight: "bold" }}>
        SEARCH
      </NavLink>

      <NavLink className="nav-link" aria-current="page" to="/buy" style={{ color: "#c5c6c7", marginRight: "10px", textDecoration: "none", fontWeight: "bold" }}>
        BUY
      </NavLink>

      <NavLink className="nav-link" aria-current="page" to="/rent" style={{ color: "#c5c6c7", marginRight: "10px", textDecoration: "none", fontWeight: "bold" }}>
        RENT
      </NavLink>

      <NavLink className="nav-link" aria-current="page" to="/agents" style={{ color: "#c5c6c7", marginRight: "10px", textDecoration: "none", fontWeight: "bold" }}>
        AGENTS
      </NavLink>

      <a className="nav-link pointer" onClick={handlePostAdClick} style={{ color: "#c5c6c7", marginRight: "10px", textDecoration: "none", fontWeight: "bold" }}>
        POST AD
      </a>

      {!loggedIn ? (
        <>
          <NavLink className="nav-link" style={{ color: "#c5c6c7", marginRight: "10px", textDecoration: "none", fontWeight: "bold" }} to="/login">
            Login
          </NavLink>
          <NavLink className="nav-link" style={{ color: "#c5c6c7", marginRight: "10px", textDecoration: "none", fontWeight: "bold" }} to="/register">
            Register
          </NavLink>
        </>
      ) : (
        <div className="dropdown">
          <li>
            <a
              className="nav-link dropdown-toggle pointer"
              data-bs-toggle="dropdown"
            >
              {auth?.user?.name ? auth.user.name : auth.user.username}
            </a>
            <ul className="dropdown-menu">
              <li>
                <NavLink className="nav-link" style={{ color: "#c5c6c7", marginRight: "10px", textDecoration: "none", fontWeight: "bold" }} to="/dashboard">
                  Dashboard
                </NavLink>
              </li>
              <li>
                <a onClick={logout} className="nav-link" style={{ color: "#c5c6c7", marginRight: "10px", textDecoration: "none", fontWeight: "bold" }}>
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </div>
      )}
    </nav>
  );
}

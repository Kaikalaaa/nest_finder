import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <ul className="nav nav-tabs" style={{ color: "#c5c7c6", textDecoration: "none" }}>
      <li className="nav-item">
        <NavLink className="nav-link" to="/dashboard" activeStyle={{ color: "#66FCF1" }}>
          Dashboard
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/user/wishlist" activeStyle={{ color: "#66FCF1" }}>
          Wishlist
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/user/enquiries" activeStyle={{ color: "#66FCF1" }}>
          Enquiries
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/ad/create" activeStyle={{ color: "#66FCF1" }}>
          Create Ad
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/user/profile" activeStyle={{ color: "#66FCF1" }}>
          Profile
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/user/settings" activeStyle={{ color: "#66FCF1" }}>
          Settings
        </NavLink>
      </li>
    </ul>
  );
}

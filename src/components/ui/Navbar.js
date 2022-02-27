import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

const NavItem = ({ path, children }) => (
  <NavLink
    className={({ isActive }) =>
      "nav-item nav-link " + (isActive ? "active" : "")
    }
    to={path}
  >
    {children}
  </NavLink>
);

export const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch({ types: types.logout });
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Heroes app
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavItem path={"/marvel"}>Marvel</NavItem>
          <NavItem path={"/dc"}>DC</NavItem>
          <NavItem path={"/search"}>Search</NavItem>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-info">{user.name}</span>
          <button className="nav-item nav-link btn" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};

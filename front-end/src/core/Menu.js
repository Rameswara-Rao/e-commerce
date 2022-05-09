import React from "react";
import { useNavigate , NavLink } from "react-router-dom";
import { isAutheticated, signout } from "../auth/helper";

const Menu = () => {
  const navigate = useNavigate();
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  return (
    <div>
      <ul className="nav nav-tabs bg-dark">
        <li className="nav-item">
          <NavLink
            to={"/"}
            className="nav-link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to={"/cart"}
            className="nav-link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Cart
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to={"/Dashboard"}
            className="nav-link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to={"/admin/Dashboard"}
            className="nav-link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            A. Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to={"/signup"}
            className="nav-link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            SignUp
          </NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink
            to={"/signin"}
            className="nav-link"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            signin
          </NavLink>
        </li> */}
        {!isAutheticated() && (
        <li className="nav-item">
        <NavLink
          to={"/signin"}
          className="nav-link"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          signin
        </NavLink>
      </li>
      )}
        {isAutheticated() && (
        <li className="nav-item">
          <span
            className="nav-link text-warning"
            onClick={() => {
              signout(() => {
                navigate("/");
              });
            }}
          >
            Signout
          </span>
        </li>
      )}
      </ul>
    </div>
  );
};

export default Menu;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./role/authContext";

const Navigation = () => {
  const { userRole, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/register");
  };
  if (!userRole) return null;

  return (
    <div>
      <ul
        style={{
          display: "flex",
          justifyContent: "flex-end",
          listStyleType: "none",
          padding: 0,
          margin: 0,
        }}
      >
        <li style={{ margin: "0 10px" }}>
          <Link to="/profile">Profile</Link>
        </li>

        {userRole === "admin" ? (
          <>
            <li style={{ margin: "0 10px" }}>
              <Link to="/admin">Home</Link>
            </li>
            <li style={{ margin: "0 10px" }}>
              <Link to="/settings">Settings</Link>
            </li>
          </>
        ) : (
          <>
            <li style={{ margin: "0 10px" }}>
              <Link to="/user">Home</Link>
            </li>
          </>
        )}

        {userRole && (
          <>
            <li style={{ margin: "0 10px" }}>
              <button onClick={handleLogout}> Logout</button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navigation;

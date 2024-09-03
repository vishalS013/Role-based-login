import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./role/authContext";
import './navigation.css';

const Navigation = () => {
  const { userRole, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/register");
  };

  if (!userRole) return null;

  const linkStyle = {
    textDecoration: 'none',
    color: 'black', 
    fontWeight: 'bold', 
  };

  const buttonStyle = {
    backgroundColor: 'lightcoral',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    cursor: 'pointer',
    padding: '10px 20px',
    margin:0,
    fontSize: '16px',
    transition: 'background-color 0.3s, transform 0.2s',
  };

  return (
    <div className="" style={{display:"flex", width:'100%',justifyContent:"end",alignItems:"flex-end",}}>
      <ul
        style={{
          display: "flex",
          alignItems:"center",
          listStyleType: "none",
        }}
      >
        <li style={{ margin: "0 10px" }}>
          <Link to="/profile" style={linkStyle}>Profile</Link>
        </li>

        {userRole === "admin" ? (
          <>
            <li style={{ margin: "0 10px" }}>
              <Link to="/admin" style={linkStyle}>Home</Link>
            </li>
            <li style={{ margin: "0 10px" }}>
              <Link to="/settings" style={linkStyle}>Settings</Link>
            </li>
            <li style={{ margin: "0 10px" }}>
              <Link to="/data" style={linkStyle}>Data </Link>
            </li>
          </>
        ) : (
          <>
            <li style={{ margin: "0 10px" }}>
              <Link to="/user" style={linkStyle}>Home</Link>
            </li>
            <li style={{ margin: "0 10px" }}>
              <Link to="/feed" style={linkStyle}>Feeds</Link>
            </li>
          </>
        )}
 
        {userRole && (
          <li style={{ margin: "0 10px" }}>
            <button
              onClick={handleLogout}
              style={buttonStyle}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'gray'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'lightcoral'}
              onMouseDown={(e) => e.currentTarget.style.transform = 'scale(1)'}
              onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navigation;

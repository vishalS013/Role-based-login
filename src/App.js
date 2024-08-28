import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Register from "./Register";
import { AuthProvider } from "./role/authContext";
import PrivateRoute from "./role/PrivateRoute";
import User from "./User";
import Admin from "./Admin";
import Settings from "./paths/Settings";
import Profile from "./paths/Profile";
import Navigation from "./navigation";

function App() {
  return (
    <main className="App">
      <AuthProvider>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />

            <Route element={<PrivateRoute requiredRole="admin" />}>
              <Route path="/admin" element={<Admin />} />
              <Route path="/settings" element={<Settings />} />
             
            </Route>

            <Route element={<PrivateRoute requiredRole="user" />}>
              <Route path="/user" element={<User />} />
            </Route>

            <Route path="/" element={<Navigate to="/register" />} />
          </Routes>
        </Router>
      </AuthProvider>
    </main>
  );
}

export default App;

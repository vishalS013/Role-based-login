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
import Data from "./paths/Data";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Feed from "./paths/Feed";
const queryClient = new QueryClient();

function App() {
  return (
    <main >
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />

            <Route element={<PrivateRoute requiredRole="admin" />}>
              <Route path="/admin" element={<Admin />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/data" element={<Data />} />

             
            </Route>

            <Route element={<PrivateRoute requiredRole="user" />}>
              <Route path="/user" element={<User />} />
              <Route path="/feed" element={<Feed />} />

            </Route>

            <Route path="/" element={<Navigate to="/register" />} />
          </Routes>
        </Router>
      </QueryClientProvider>
      </AuthProvider>
  
    </main>
  );
}

export default App;

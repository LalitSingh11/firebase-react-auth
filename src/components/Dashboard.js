import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  if (!currentUser) return <Navigate to="/login" />;

  async function handleLogout() {
    setError("");
    try {
      await logout();
      navigate("/login");
    } catch (e) {
      console.log(e);
      setError("Failed to logout");
    }
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h3>Profile</h3>
          {error && <Alert variant="danger">{error}</Alert>}
          Email: {currentUser?.email}
        </Card.Body>
      </Card>
      <Button variant="link" onClick={handleLogout}>
        Log Out
      </Button>
    </>
  );
}

export default Dashboard;

import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox to reset your password.");
    } catch (e) {
      console.error("", e);
      setError("Failed to Reset Password");
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2>Password Reset </h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <br />
            <Button disabled={loading} type="submit">
              Reset Password
            </Button>
          </Form>
          <div>
            <Link to="/login">Login</Link>
          </div>
        </Card.Body>
      </Card>
      <div>
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
}

export default ForgotPassword;

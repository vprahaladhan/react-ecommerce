// import bcrypt from 'bcrypt';
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory, Link } from 'react-router-dom';

function Login({ setUser }) {
  const history = useHistory();
  const { location } = history;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    let user = {
      name,
      email,
      password
    }; 

    let URL = `${process.env.REACT_APP_LOCAL_URL}/users`;
    URL += location.pathname.includes('login') ? `?email=${email}` : ''; 

    const response = await fetch(URL, {
      method: location.pathname.includes('login') ? 'GET' : 'POST',
      body: location.pathname.includes('login') ? null : JSON.stringify(user),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });

    user = await response.json();
    user = location.pathname.includes('login') && user.length === 0 ? null : user[0];

    console.log('Logged in User >> ', user);

    setUser(user);
    console.log('History > ', history);
    // history.goBack();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        {
          location.pathname.includes('signup') && 
          <Form.Group size="lg" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
          </Form.Group>
        }
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          {location.pathname.includes('login') ? 'Login' : 'Sign up'}
        </Button>
        {
          location.pathname.includes('login') ? 
            <label>Not registered? <Link as={Link} to='/signup'>Sign up</Link></label> 
            : 
            <label>Already registered? <Link as={Link} to='/login'>Login</Link></label>
        }
      </Form>
    </div>
  );
}

export default Login;
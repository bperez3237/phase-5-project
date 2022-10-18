import React, {useState} from "react";
import {Button, Form} from 'react-bootstrap'
import DismissableError from "../Error/DismissableError";

function SignUpForm({ setUser, setShowLogin, error, setError}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [name,setName] = useState("")
    const [isLoading, setIsLoading] = useState(false);
  
    function handleSubmit(e) {
      e.preventDefault();
      // setError('');
      setIsLoading(true);
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          password_confirmation: passwordConfirmation,
          name: name
        }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((user) => setUser(user));
        } else {
          console.log('error')
          r.json().then((err) => setError(err));
        }
      });
    }

    return (
      <div>
        {error && <DismissableError error={error} setError={setError} />}
        <Form className="justify-content-center" onSubmit={handleSubmit} style={{"width":"300px"}}>
        <Form.Group>
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password">Password Confirmation</Form.Label>
          <Form.Control
            type="password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Button type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
          <Button onClick={()=>setShowLogin(true)}>Cancel</Button>
        </Form.Group>
      </Form>
      </div>
    )


}

export default SignUpForm;
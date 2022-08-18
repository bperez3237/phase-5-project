import {Button, Form} from 'react-bootstrap'
import {useState} from 'react'

function LoginForm({setUser}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: username, password: password})
            }).then(r=>r.json()).then((user)=>setUser(user))

    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}/>
                <Form.Label>Password</Form.Label>
                <Form.Control 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Button type='submit'>Login</Button>
        </Form>
    )
}

export default LoginForm;
import {Button, Form} from 'react-bootstrap'
import {useState} from 'react'

function LoginForm({setUser, showLogin, setShowLogin}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    function handleSubmit(e) {
        e.preventDefault()

        const loginObj = {
            username: username, 
            password: password
        }

        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginObj)
            }).then((r)=>{
                if (r.ok) {
                    r.json().then((user)=>setUser(user))
                } else {
                    r.json().then((err)=>console.log('error',err))
                }
            })
    }
 
    return (
        <Form onSubmit={handleSubmit} style={{"width":"300px"}}>
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
            <Button onClick={()=>setShowLogin(false)}>Sign Up</Button>
        </Form>
    )
}

export default LoginForm;
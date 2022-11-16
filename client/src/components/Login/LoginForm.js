import {Button, Form} from 'react-bootstrap'
import {useState} from 'react'
import DismissableError from '../Error/DismissableError';

function LoginForm({setUser, showLogin, setShowLogin, error, setError}) {
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
                    r.json().then((err)=>setError(err))
                }
            })
    }
 
    return (
        <Form id='form' onSubmit={handleSubmit} >
            {error && <DismissableError error={error}  setError={setError}/>}
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control 
                type="username"
                value={username} 
                onChange={(e) => setUsername(e.target.value)}/>
                <Form.Label>Password</Form.Label>
                <Form.Control 
                type="password"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <div className='button-group'>
                <Button id='login-button' type='submit'>Login</Button>
                <Button id='signup-button' onClick={()=>setShowLogin(false)}>Sign Up</Button>
            </div>
        </Form>
    )
}

export default LoginForm;
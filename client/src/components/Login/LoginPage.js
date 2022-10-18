import LoginForm from "./LoginForm";
import SignUpForm from './SignUpForm'
import {useState} from 'react'
import {Container} from 'react-bootstrap'

function LoginPage({setUser}) {
    const [showLogin, setShowLogin] = useState(true)
    const [error, setError] = useState('')

    return(
        <Container className='d-flex p-3 m-3' style={{width: '500px',background:'gray'}}>
            <h1 style={{color: 'white'}}> Welcome to Work Week</h1>
            {showLogin ? (<LoginForm setUser={setUser} showLogin={showLogin} setShowLogin={setShowLogin} error={error} setError={setError}/>
            ) : (
            <SignUpForm setUser={setUser} setShowLogin={setShowLogin}  error={error} setError={setError}/>
            )}
        </Container>
    )
}


export default LoginPage;
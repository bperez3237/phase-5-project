import LoginForm from "./LoginForm";
import SignUpForm from './SignUpForm'
import {useState} from 'react'
import {Container} from 'react-bootstrap'
import './Login.css'
import Logo from "../Logo";


function LoginPage({setUser}) {
    const [showLogin, setShowLogin] = useState(true)
    const [error, setError] = useState('')

    return(
        <Container>
            <Logo />
            <div className='form'>
                {showLogin ? 
                (<LoginForm setUser={setUser} showLogin={showLogin} setShowLogin={setShowLogin} error={error} setError={setError}/>
                ) : (
                <SignUpForm setUser={setUser} setShowLogin={setShowLogin}  error={error} setError={setError}/>
                )}
            </div>
        </Container>
    )
}


export default LoginPage;
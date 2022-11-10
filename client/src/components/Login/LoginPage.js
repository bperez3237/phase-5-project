import LoginForm from "./LoginForm";
import SignUpForm from './SignUpForm'
import {useState} from 'react'
import {Container} from 'react-bootstrap'
import './Login.css'
import logo from '../../images/Hard_hat_logo.jpg'
function LoginPage({setUser}) {
    const [showLogin, setShowLogin] = useState(true)
    const [error, setError] = useState('')

    return(
        <Container className='p-3 m-3'>
            <div className='logo-container row'>
                <h1 id='app-title'>Hard Hat Manager</h1>
                <img id='logo' src={logo} alt='hard_hat_logo'/>
            </div>
            <div className='form row'>
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
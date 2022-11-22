import LoginForm from "./LoginForm";
import SignUpForm from './SignUpForm'
import {useState} from 'react'
import './Login.css'
import Logo from "../Logo";


function LoginPage({setUser}) {
    const [showLogin, setShowLogin] = useState(true)
    const [error, setError] = useState('')

    return(
        <div className='login-container'>
            <Logo />
            <div className='form'>
                {showLogin ? 
                (<LoginForm setUser={setUser} showLogin={showLogin} setShowLogin={setShowLogin} error={error} setError={setError}/>
                ) : (
                <SignUpForm setUser={setUser} setShowLogin={setShowLogin}  error={error} setError={setError}/>
                )}
            </div>
        </div>
    )
}


export default LoginPage;
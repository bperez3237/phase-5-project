import LoginForm from "./LoginForm";
import SignUpForm from './SignUpForm'
import {useState} from 'react'

function LoginPage({setUser}) {
    const [showLogin, setShowLogin] = useState(true)

    return(
        <>{showLogin ? (<LoginForm setUser={setUser} showLogin={showLogin} setShowLogin={setShowLogin} />
        ) : (
            <SignUpForm setUser={setUser} setShowLogin={setShowLogin} />
        )}
        </>
    )
}


export default LoginPage;
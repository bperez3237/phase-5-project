import { Button } from 'react-bootstrap';
import {useState} from 'react'
import './Error.css'
import { useEffect } from 'react';
import ErrorMessage from './ErrorMessage';

function DismissableError({error}) {
    const [show, setShow] = useState(true)
    const [messages, setMessages] = useState([])

    useEffect(()=>{
        setShow(true)
        setMessages([...messages,error])
    },[error])

    function close() {
        setShow(false)
        setMessages([])
    }

    return(show) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <h1>Error!</h1>
                <ErrorMessage messages={messages} />
                <Button className='close-btn' onClick={close}>close</Button>
            </div>
        </div>
    ) : "";
}

export default DismissableError;
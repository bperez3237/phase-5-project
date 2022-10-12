
import Modal from 'react-modal';
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
                <h1>{JSON.stringify(error)}</h1>
                <ErrorMessage messages={messages} />
                <button className='close-btn' onClick={()=>setShow(false)}>close</button>
            </div>
        </div>
    ) : "";
}

export default DismissableError;
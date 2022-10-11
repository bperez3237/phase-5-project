
import Modal from 'react-modal';
import {useState} from 'react'
import './Error.css'
import { useEffect } from 'react';

function DismissableError({error}) {
    const [show, setShow] = useState(true)

    useEffect(()=>{
        setShow(true)
    },[error])

    function close() {
        setShow(false)
    }

    return(show) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <h1>Error!</h1>
                <h1>{JSON.stringify(error)}</h1>
                <button className='close-btn' onClick={()=>setShow(false)}>close</button>
            </div>
        </div>
    ) : "";
}

export default DismissableError;
import {Alert} from 'react-bootstrap'
import {useState} from 'react'

function DismissableError({error}) {
    const [show, setShow] = useState(true)
    console.log(error, show)


    if (show) {return(
        <Alert variant='danger' onClose={()=>setShow(false)} dismissible>
            <Alert.Heading>Error: {JSON.stringify(error)}</Alert.Heading>
        </Alert>
    )} else return <></>
}

export default DismissableError;
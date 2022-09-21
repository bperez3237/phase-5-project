import {Alert} from 'react-bootstrap'

function DismissableError({error}) {
    const [show, setShow] = useState(true)

    if (show) {return(
        <Alert variant='danger' onClose={()=>setShow(false)}>
            <Alert.Heading>Error status: {error?.status}</Alert.Heading>
            <p>
                This error says: {error?.error}
            </p>
            <p>
                {error?.exception}
            </p>
        </Alert>
    )}
}

export default DismissableError;
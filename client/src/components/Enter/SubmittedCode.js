import {Container, Button} from 'react-bootstrap'

function SubmittedCode({costCode, setSubmittedStatus}) {

    function handleClick(e) {
        console.log(e.target.value)
        setSubmittedStatus(false)
    }


    return(
        <Container className='me-auto' style={{border:'1px',borderStyle:'solid'}}>
            <h2>{costCode.code} is submitted. </h2>
            <Button onClick={handleClick} className='justify-content-end' value={costCode.code}>Edit</Button>
        </Container>)
}

export default SubmittedCode;
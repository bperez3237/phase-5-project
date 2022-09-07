import {Form, Container} from 'react-bootstrap'

function ViewSearch({ value, setValue}) {

    return(
        <Container>
            <Form>
                <Form.Group>
                    <Form.Label>Search List:</Form.Label>
                    <Form.Control onChange={(e)=>setValue(e.target.value)} value={value}></Form.Control>
                </Form.Group>
            </Form>
        </Container>
    )
}

export default ViewSearch;
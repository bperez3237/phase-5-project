import {Form } from 'react-bootstrap'

function ViewSearch({ value, setValue}) {

    return(
            <Form className='p-3'>
                <Form.Group>
                    <Form.Label>Search List:</Form.Label>
                    <Form.Control onChange={(e)=>setValue(e.target.value)} value={value}></Form.Control>
                </Form.Group>
            </Form>
    )
}

export default ViewSearch;
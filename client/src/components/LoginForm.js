import {Button, Form} from 'react-bootstrap'

function LoginForm() {

    return (
        <Form>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control></Form.Control>
                <Form.Label>Password</Form.Label>
                <Form.Control></Form.Control>
            </Form.Group>
            <Button>Login</Button>
        </Form>
    )
}

export default LoginForm;
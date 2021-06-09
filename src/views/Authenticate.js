import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function Authenticate(props) {
    return (
        <Container>
            <Form xs={4} md={6} lg={8}>
                <Form.Group controlId="formBasicEmail" variant="light">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter username" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="outline-light" type="submit" block>
                    Submit
                </Button>
                <Button variant="link" onClick={props.handleLogin}>Register</Button>
            </Form>
        </Container>
    );
};
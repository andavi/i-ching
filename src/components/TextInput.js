import Form from 'react-bootstrap/Form';

export default function textInput(props) {
    return (
        <Form.Group controlId={props.controlId} variant="light">
            <Form.Label>{props.label}</Form.Label>
            <Form.Control name={props.name} type={props.type} placeholder={props.placeholder} />
        </Form.Group>
    );
};
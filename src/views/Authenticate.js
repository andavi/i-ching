import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import TextInput from '../components/TextInput.js';
import { render } from '@testing-library/react';
// import { propTypes } from 'react-bootstrap/esm/Image';


export default function Authenticate(props) {

    const [loggingIn, setLoggingIn] = React.useState(true);
    // const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleInputChange(e) {
        const inputText = e.target.value;
        const inputName = e.target.name;
        let un

        if (inputName === 'username') {
            setUsername(inputText);
        } else if (inputName === 'password') {
            setPassword(inputText);
        } else if (inputName === 'password-confirm') {

        }
    }

    function handleClick(e) {
        console.log(`${e.target} ${e.type} event!`);
    }

    const authenticate =  elems => [null, null];  //TODO
    const showMistakes = () => ({});  // TODO

    function handleSubmit(e) {
        e.preventDefault();
        const formElements = e.target.elements;
        const [formMistakes, badCredentials] =  authenticate(formElements, [username, password]); // TODO
        if (formMistakes || badCredentials) {
            return showMistakes(formMistakes, badCredentials);  // TODO
        } 

        setUsername(username);
        props.setState(state => ({
            beenWelcomed: true,
            isAuthennticated: true,
            username: username
          }))
    }

    function toggleLogin(e) {
        setLoggingIn(!loggingIn);
    }

        return (
            <>
        <Form onSubmit={handleSubmit}>

                <h2>{loggingIn ? 'Login' : 'Register'}</h2>

                <TextInput controlId="formBasicUsername" label="Username" name="username" type="username" placeholder="Enter Username" onChange={setUsername} />

                <TextInput controlId="formBasicPassword" label="Password" name="password" type="password" placeholder="Enter Password" onChange={handleInputChange}/>

                {loggingIn || (
                    <TextInput controlId="formBasicPassword" label="PasswordConfirm" name="password-confirm" type="password" placeholder="Confirm Password" onChange={handleInputChange}/>
                )}


                <Button variant="outline-light" type="submit" block onClick={handleClick}>
                    Submit
                </Button>

        </Form>
        <Button variant="link" onClick={toggleLogin}>{!loggingIn ? 'Login' : 'Register'}</Button>
        </>
    );
};

import React from 'react';
import logo from './logo.svg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import TextInput from '../components/TextInput.js';
// import { render } from '@testing-library/react';
// import { propTypes } from 'react-bootstrap/esm/Image';


export default function Authenticate(props) {
    const [welcomed, setWelcomed] = React.useState(false);
    const [loggingIn, setLoggingIn] = React.useState(true);
    // const [username, setUsername] = React.useState('');
    // const [password, setPassword] = React.useState('');

    // let welcomed = false;
    // let loggingIn = true;
    let un = '';
    let pw = '';
    let pwc = '';

    function handleInputChange(e) {
        const inputText = e.target.value;
        const inputName = e.target.name;

        if (inputName === 'username') {
            un = inputText;
        } else if (inputName === 'password') {
            pw = inputText;
        } else if (inputName === 'password-confirm') {
            pwc = inputText;
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
        const [badCredentials] =  authenticate(formElements, [un, pw, pwc]); // TODO
        if (badCredentials) {
            return showMistakes(badCredentials);  // TODO
        } 

        // setUsername(username);
       this.props.onAuthenticated(e.target.elements.username.value);
    }

    // function handleWelcomed() {
    //     setWelcomed(true);
    // }

    // function toggleLogin(e) {
    //     loggingIn = !loggingIn;
    // }

        return (
            !welcomed 
                ? 
                <div className="Welcome">
                    <img src={logo} className="Welcome-logo" alt="logo" />
                    <Button variant="outline-light" block onClick={() => setWelcomed(true)}>Login</Button>
                </div>
                : 
            <>
                <Form onSubmit={handleSubmit}>

                    <h2>{loggingIn ? 'Login' : 'Register'}</h2>

                    <TextInput controlId="formBasicUsername" label="Username" name="username" type="username" placeholder="Enter Username" onChange={handleInputChange} />

                    <TextInput controlId="formBasicPassword" label="Password" name="password" type="password" placeholder="Enter Password" onChange={handleInputChange}/>

                    {loggingIn || (
                        <TextInput controlId="formBasicPassword" label="PasswordConfirm" name="password-confirm" type="password" placeholder="Confirm Password" onChange={handleInputChange}/>
                    )}


                    <Button variant="outline-light" type="submit" block onClick={handleClick}>
                        Submit
                    </Button>

                </Form>
                <Button variant="link" onClick={() => setLoggingIn(!loggingIn)}>{!loggingIn ? 'Login' : 'Register'}</Button>
            </>
        
    );
};

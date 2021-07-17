import logo from './logo.svg';
import Button from 'react-bootstrap/Button';


export default function Welcome(props) {


    return (
      <div className="Welcome">
        <img src={logo} className="Welcome-logo" alt="logo" />
        {/* <button className="App-button" onClick={ props.handleClick }>Login</button> */}
        <Button variant="outline-light" block onClick={() => props.handleWelcomed()}>Login</Button>
      </div>
    )
  }
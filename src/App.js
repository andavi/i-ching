import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';

function Welcome(props) {
  return (
    <div className="Welcome">
      <img src={logo} className="Welcome-logo" alt="logo" />
      {/* <button className="App-button" onClick={ props.handleClick }>Login</button> */}
      <Button variant="outline-light" block onClick={props.handleClick}>Login</Button>
    </div>
  )
}

function Authenticate(props) {
  return (
    <h1>Welcome</h1>
  )
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {beenWelcomed: false, isAuthenticated: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      beenWelcomed: true
    }))
  }
  
  render() {
    return (
      <div className="App">
          <header className="App-header">
            <h1>I-Ching</h1>
              <p>
                The Book of Changes
              </p>
          </header>
          {this.state.beenWelcomed ? <Authenticate /> : <Welcome handleClick={this.props.handleClick} /> }
      </div>
    );
  }
}

export default App;

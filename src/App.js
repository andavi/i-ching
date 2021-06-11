import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Welcome from './views/Welcome.js';
import Authenticate from './views/Authenticate.js';
import Main from './views/Main.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {beenWelcomed: false, username: null};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      beenWelcomed: true
    }))
  }

  handleAuthenticated(username) {
    this.setState(state => this.state.map())
  }
  
  render() {
    return (
      <div className="App">
          <Header />
          {this.state.username 
            ? 
            <Main username={this.state.username} /> 
            : 
            ( this.state.beenWelcomed ? <Authenticate /> : <Welcome handleClick={this.handleClick} /> )}
      </div>
    );
  }
}

export default App;

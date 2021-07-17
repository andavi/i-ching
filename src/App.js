import React from 'react';
import './App.css';
import Header from './components/Header.js';
// import Welcome from './views/Welcome.js';
import Authenticate from './views/Authenticate.js';
import Main from './views/Main.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: null};
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  //   this.setState(state => ({
  //     beenWelcomed: true
  //   }))
  // }

  handleAuthenticated(username) {
    this.setState(state => ({ ...this.state, username: username }))
  }
  
  render() {
    return (
      <div className="App">
          <Header username={this.state.username} />
          {!this.state.username 
          ? <Authenticate onAuthenticated={this.handleAuthenticated} />
          : <Main username={this.state.username} /> }
      </div>
    );
  }
}

export default App;

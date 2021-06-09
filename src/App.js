import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Welcome from './views/Welcome.js';
import Authenticate from './views/Authenticate.js';


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
          <Header />
          {this.state.beenWelcomed ? <Authenticate /> : <Welcome handleClick={this.handleClick} /> }
      </div>
    );
  }
}

export default App;

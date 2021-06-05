import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>I-Ching</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The Book of Changes
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Consult the Oracle
        </a>
      </header>
    </div>
  );
}

export default App;

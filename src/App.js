import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Check out the storybook for a few components
        </p>
        <a
          className="App-link"
          href="https://60df8791a562af0039e44784-ilyniliiza.chromatic.com/?path=/story/atoms-button--default"
          target="_blank"
          rel="noopener noreferrer"
        >
          Storybook Demo
        </a>
      </header>
    </div>
  );
}

export default App;

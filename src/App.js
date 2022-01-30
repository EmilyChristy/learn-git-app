import logo from "./logo.svg";
import "./App.css";

//DEveloped to demo git features
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Learn <code>git</code> by doing.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          git revert
        </a>
      </header>
      <p>The first commit adds this paragraph</p>
      <p>The second commit adds this text</p>
      <p>The third commit adds this paragriph with some baaaaaxshd typos</p>
    </div>
  );
}

export default App;

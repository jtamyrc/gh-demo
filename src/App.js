import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>A testing Project</p>
                <a
                    className="App-link"
                    href="https://github.com/jtamyrc/gh-demo"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    This is a
                </a>
            </header>
        </div>
    );
}

export default App;

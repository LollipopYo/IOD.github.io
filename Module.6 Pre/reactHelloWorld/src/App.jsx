import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [bool, setBool] = useState(false);
  const [inputValue, setInputValue] = useState();
  const h1 = ({ firstName, lastName }) => (
    <div>
      <h1>Hello {firstName}</h1>
      <h2>{lastName}</h2>
    </div>
  );

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {h1({ firstName: "Melody", lastName: "Ting" })}
      <div className="card">
        <input onKeyUp={(event) => setInputValue(event.target.value)} />
        {inputValue}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <button onClick={() => setBool(!bool)}>Bool</button>
        {bool ? <div>Yes</div> : <div>No</div>}

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

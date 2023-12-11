import './App.css';
import MyComponent from './components/MyComponent';
import {useState} from "react";
import Title from './components/Title';

function App() {
  const n = 15
  const [name] = useState("Gabriel")

  const redTitle = false;
  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>
      {/* CSS de coponente */}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>
      {/* Inline CSS */}
      <p style={{color: "magenta", padding: "25px", borderTop: "2px solid red"}}>Este elemento foi estilizado de forma inline</p>
      <p style={{color: "magenta", padding: "25px", borderTop: "2px solid red"}}>Este elemento foi estilizado de forma inline</p>
      {/* CSS Inline dinâmico */}
      <h2 style={n < 10 ? ({color:"purple"}) : ({ color:"pink" })}>Css Dinâmico</h2>
      <h2 style={n > 10 ? ({color:"purple"}) : ({ color:"pink" })}>Css Dinâmico</h2>
      <h2 style={name === "Gabriel" ? ({color:"green", backgroundColor: "#000"}) : ( null )}>Css Dinâmico</h2>
      {/* Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>
      Este título vai ter classe dinâmica</h2>
      {/* CSS Modules */}
      <Title />
      <h2 className= "my_title">Testando</h2>
    </div>
  );
}

export default App;

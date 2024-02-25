import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <h1>Context</h1>
     <BrowserRouter>
    {/* 2 - links com react router */}
     <Navbar/>
     <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/products" element ={<Products/>} />
      <Route path="/about" element ={<About />} />

     
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

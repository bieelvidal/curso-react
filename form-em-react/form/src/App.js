
import MyForm from './components/MyForm';
import './App.css';


function App() {
  return (
    <div className="App">
    <h2>Forms</h2>
    <MyForm user= {{name: "Joias", email:"josias@gmail.com", bio: "Sou um advogado", role: "admin"}} />
    </div>
  );
}

export default App;

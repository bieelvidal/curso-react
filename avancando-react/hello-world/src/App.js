import './App.css';
import { useState } from "react";



import City from "./assets/city.jpg";
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';


function App() {
const name = "Joaquin";
const [userName] = useState ("Maria");
const cars = [

  {id: 1, brand: "ferrari", color:"Amarela", newCar: true, km: 0},
  {id: 2, brand: "Kia", color:"Branco", newCar: false, km: 34385},
  {id: 3, brand: "Renault", color:"Azul", newCar: false, km: 2234}
];


const [message, setMessage] = useState("")

const handleMessage = (msg) => {
setMessage(msg)
};

function showMessage() {
  console.log("Evento de componente pai!")
};


const users = [
  {id: 1, name: "Gabriel", job: "Programador", age: 16},
  {id: 2, name: "Rhuan", job:"Fumador de pod", age: 24},
  {id: 3, name: "Thayan", job:"Tarado da Academia", age:17},
  {id: 4, name: "Lucas", job:"Agronomo", age:28},
];
  return (
    <div className="App">
    <h1>Avançando em React</h1>
    {/* Imagem em public */}
    <div>
      <img src="/img1.jpg" alt="Paisagem" />
    </div>
    {/* Imagem em asset */}
    <div>
      <img src={City} alt="Cidade" />
    </div>
    <ManageData />
    <ListRender />
    <ConditionalRender/>
    {/* props */}
    <ShowUserName name={userName}/>
    {/* destructuring */}
    <CarDetails brand= "VW" km={100000} color="Azul" newCar={false}f/>
    {/* reaproveitando */} 
    <CarDetails brand="Ford" color ="Vermelho" km={0} newCar={true}/>
    <CarDetails brand="Fiat" color ="Branco" km={4500} newCar={false}/>
    {/* loop em array de objetos */}
    {cars.map((car) => (
      <CarDetails 
      key={car.id}
      brand={car.brand} 
      color={car.color}
      km={car.km} 
      newCar={car.newCar}/>
    ))}

    {/* fragment*/}
    <Fragment propFragment= "teste"/>

    {/* children*/}
    <Container myValue="testing"> 
      <p>E este é o conteúdo</p>
       </Container>
       <Container myValue="testing 2">
        <h5>Testando o Container</h5>
       </Container>
    {/* executar função */}
    <ExecuteFunction MyFunction={showMessage}/>
    {/* state lift */}
    <Message msg={Message} />
    <ChangeMessageState handleMessage={handleMessage}/>
    {/* Desafio */}
    {users.map((user) => (
      <UserDetails 
      key={user.id} 
      name={user.name}
      job={user.job}
      age={user.age}
     />
    ))}
     </div>
  );
};

export default App;

//import {useContext} from "react";
import ChangeCounter from "../components/ChangeCounter"
//import {CounterContext}  from "../context/CounterContext";

// 4 - refatorando com hook 
import { UseCounterContext } from "../hooks/useCounterContext";

const Home = () => {

    // const {counter} = useContext(CounterContext);

    const {counter} = UseCounterContext();
  return (
    <div>
      <h1>Home</h1>
      <p>Valor do contador:</p>
      {/* 3 - alterando valor contexto */}
      <ChangeCounter />
    </div>
  )
}

export default Home;

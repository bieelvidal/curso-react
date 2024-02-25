import {useContext} from "react"
import {CounterContext} from "../contextCounterContext";


export const UseCounterContext = () => {

    const context = useContext(CounterContext);

    if(!context) {

        console.log("Contexto não encontrado!")
    }

    return context;
};
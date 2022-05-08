import { useReducer } from "react"
import { RESET, INCREASE_BY, doReset, doIncreaseBy } from './actions/actions';
import {  ICounterState } from "./interfaces/interfaces"
import { counterReducer } from "./state/counterReducer";


const INITIAL_STATE : ICounterState = {
  counter: 0,
  previous: 0,
  changes: 0
}



export const CounterReducerComponent = () => {
  
  const [{counter, previous, changes}, dispatch] = useReducer(counterReducer, INITIAL_STATE)

  const handleReset= ()=>{
    dispatch(doReset())
  }

  const increaseBy =(value: number)=>{
    dispatch(doIncreaseBy(value))

  }

    return (
    <>
    <h2>Counter Reducer Segmentado: {counter}</h2>
    <h2>Counter Previous: {previous}</h2>
    <h2>Counter Changes: {changes}</h2>

    <button onClick={handleReset}>
        RESET

    </button>
    
    <button onClick={()=>increaseBy(1)}>
        +1
    </button>

    <button onClick={()=>increaseBy(5)}>
        +5
    </button>

    <button onClick={()=>increaseBy(10)}>
        +10
    </button>
    </>
  )
}

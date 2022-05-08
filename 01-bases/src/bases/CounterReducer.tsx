import { useReducer } from "react"


interface ICounterState{
  counter: number,
  previous: number,
  changes: number
}

type CounterAction = 
| { type: 'increaseBy',payload: {value: number}}
| {type:'reset'}

const INITIAL_STATE : ICounterState = {
  counter: 0,
  previous: 0,
  changes: 0
}

const counterReducer = (state: ICounterState, action: CounterAction) : ICounterState=> {

  const {counter, changes} = state

switch(action.type){
  case "increaseBy":
    return {
      ...state,
      counter:counter+action.payload.value,
      previous:counter,
      changes:changes+1
    }
    case "reset":
    return {
      ...state,
      counter: 0,
      previous:0,
      changes: 0
    }
  default:
    return state
}

}

export const CounterReducerComponent = () => {
  
  const [{counter, previous, changes}, dispatch] = useReducer(counterReducer, INITIAL_STATE)

  const handleReset= ()=>{
    dispatch({type:"reset"})
  }

  const increaseBy =(value: number)=>{
    dispatch({type: "increaseBy", payload:{value}})

  }

    return (
    <>
    <h2>Counter Reducer: {counter}</h2>
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

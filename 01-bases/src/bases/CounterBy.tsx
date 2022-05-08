import { useState } from "react"

interface IProps{
    initialValue?: number
}

interface ICounterState{
  counter: number;
  clicks: number
}
//initialValue va a tener valor 0 por default
export const CounterBy = ({initialValue = 0}:IProps ) => {
  //Sin  destructuring
  // const [counterState, setCounterState] = useState<ICounterState>({
  //   counter:initialValue,
  //   clicks: 0
  // })
  // const{counter, clicks}= counterState
  // const handleClick= (value: number)=>{
  //   setCounterState(prev =>({...counterState, counter: prev.counter +value, clicks: prev.clicks+1}))
  // }

  //con destructuring
  const [{counter,clicks}, setCounterState] = useState<ICounterState>({
    counter:initialValue,
    clicks: 0
  })
  
  const handleClick= (value: number)=>{
    setCounterState(({counter,clicks}) =>({
      counter: counter + value, 
      clicks: clicks + 1
    }))
  }

   
    return (
    <>
    <h1>Counter: {counter}</h1>
    <h1>Clicks: {clicks}</h1>

    <button onClick= {()=> handleClick(1)}>
        +1

    </button>
    <button onClick={()=>handleClick(5)}>
        +5

    </button>
    </>
  )
}

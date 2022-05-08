import { CounterAction } from "../actions/actions"
import { ICounterState } from "../interfaces/interfaces"

export const counterReducer = (state: ICounterState, action: CounterAction) : ICounterState=> {

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
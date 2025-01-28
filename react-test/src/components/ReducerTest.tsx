import { useReducer } from "react";

// countの更新方法
type ActionType = |"increment" | "decrement"

type Action = {
  type: ActionType,
  payload: number
}

// リデューサー関数
const reducer = (state: number, action: Action): number => {
  switch (action.type) {
    case "increment":
      return state + action.payload
    case "decrement":
      return state - action.payload
    default:
      return state;
  }
};
export const ReducerTest = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  const countUp = ()=>{
    dispatch({type:"increment",payload:2})
  }

  const countDown = ()=>{
    dispatch({type:"decrement",payload:2})
  }


  return (
    <>
      <p>{count}</p> 
      <button onClick={countUp}>+</button>    
      <button onClick={countDown}>-</button>    
    </>
  )
}

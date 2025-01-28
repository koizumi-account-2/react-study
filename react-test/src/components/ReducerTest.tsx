import { useReducer } from "react";

// countの更新方法
type Action = |"increment" | "decrement"

// リデューサー関数
const reducer = (state: number, action: Action): number => {
  switch (action) {
    case "increment":
      return ++state
    case "decrement":
      return --state
    default:
      return state;
  }
};
export const ReducerTest = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  const countUp = ()=>{
    dispatch("increment")
  }

  const countDown = ()=>{
    dispatch("decrement")
  }


  return (
    <>
      <p>{count}</p> 
      <button onClick={countUp}>+</button>    
      <button onClick={countDown}>-</button>    
    </>
  )
}

import React, { useReducer } from 'react'

export const ReducerTest = () => {
    const [rstate,dispatch] = useReducer((prev,action)=>{
        if(action === "+"){
            return ++prev
        }else{
            return --prev

        }
    },0);

    const countUp = ()=>{
        //dispatch();
    }
    const countDown = ()=>{
        //dispatch()
    }
    return (
        <>
        <div>{rstate}</div>
        <button onClick={countUp}>+</button>    
        <button onClick={countDown}>-</button>    
        </>
    )
}
/**
import React, { useReducer } from "react";

// 型定義
type State = {
  count: number;
};

type Action =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number };

// リデューサー関数
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
};

export const Counter = () => {
  const initialState: State = { count: 0 };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Decrement
      </button>
    </div>
  );
};
 */
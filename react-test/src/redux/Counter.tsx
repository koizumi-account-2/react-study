import { useDispatch } from "react-redux"
import { TAppDispatch, TRootState } from "./store";
import { useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";

export const Counter = () => {
    const count = useSelector((state:TRootState)=>state.counter.value);

    const dispatch = useDispatch<TAppDispatch>();

    return (
        <>
            <div>{count}</div>
            <div>
                <button onClick={()=>dispatch(increment())}>+</button>
                <button onClick={()=>dispatch(incrementByAmount(5))}>+5</button>
                <button onClick={()=>dispatch(decrement())}>-</button>
            </div>
        </>
    )
}

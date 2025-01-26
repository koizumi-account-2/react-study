import { useState } from 'react'

export const CounterWithLabel = ({label}:{label:string}) => {
    const [count,setCount] = useState<number>(0);

    const countUp = ()=>{
        setCount(prev => prev + 1);
    }
    return (
        <>
            <h3>{label}</h3>
            <div>Counter:{count}</div>
            <button onClick={countUp}>+</button>
        </>
    )
}

import { useState } from "react";

export const Counter = () => {
    console.log("A")
    const [count,setCount] = useState<number>(0);

    const countUp = ()=>{
        console.log(`clickEvent start count:${count}`);
        // const newCounnt = count + 1;
        // setCount(newCounnt)
        setCount(prev => prev + 1);
        console.log(`clickEvent end count:${count}`);
    }
    console.log("B")
    return (
        <>
            <div>Counter:{count}</div>
            <button onClick={countUp}>+</button>
        </>
    )
}

import { useState } from "react";

export const Counter = () => {
    console.log("A")
    const [count,setCount] = useState<number>(0);

    const countUp = ()=>{
        console.log(`clickEvent start count:${count}`);

        // Aパターン
        // setCount(count + 1);
        // setCount(count + 1);

        // Bパターン
        setCount(prev => prev + 1);
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

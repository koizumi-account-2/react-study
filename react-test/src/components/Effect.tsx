import { useEffect, useState } from "react";

export const Effect = () => {
    const [count,setCount] = useState(0);
    useEffect(()=>{
        console.log(`updated:${count}`);
        return ()=>{
            console.log("clean")
        }
    },[count])
    const clickHandler=()=>{
        setCount(prev => ++prev);
    }
    return (
        <>
            <p>{count}</p>
            <button onClick={clickHandler}>+</button>
        </>
    )
}

// 正しい?
// export const Effect = ({name}:{name:string}) => {
//     const [title,setTitle] = useState<string>("");
//     useEffect(()=>{
//         setTitle(`${name}さんへ`);
//     },[name])
//     return (
//         <p>{title}</p>
//     )
// }
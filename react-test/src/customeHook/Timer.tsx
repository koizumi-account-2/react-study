import { useEffect, useState } from "react";

export const Timer = () => {
    const [time,setTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState(false);
    useEffect(()=>{
        let interval:number | undefined;
        if(isRunning){
            interval = window.setInterval(()=>{
                setTime(prev => ++prev)
            },1000)
        }
        return ()=>{
            if(interval)window.clearInterval(interval);
        }
    },[isRunning])
    return (
        <>
            <div>TIME:{time}</div>
            <button onClick={()=>setIsRunning(true)}>START</button>
            <button onClick={()=>setIsRunning(false)}>STOP</button>
        </>
    )
}

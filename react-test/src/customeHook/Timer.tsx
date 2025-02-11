import { useEffect, useState } from "react";
import { useTimer } from "./useTimer";

export const Timer = () => {
    // const [time,setTime] = useState<number>(0);
    // const [isRunning, setIsRunning] = useState(false);
    // useEffect(()=>{
    //     let interval:number | undefined;
    //     if(isRunning){
    //         interval = window.setInterval(()=>{
    //             setTime(prev => ++prev)
    //         },1000)
    //     }
    //     return ()=>{
    //         if(interval)window.clearInterval(interval);
    //     }
    // },[isRunning])
    const {start,stop,time} = useTimer(false);

    return (
        <>
            <div>TIME:{time}</div>
            <button onClick={start}>START</button>
            <button onClick={stop}>STOP</button>
        </>
    )
}

import { useEffect, useState } from "react";

type UseTimerProps = (
    initialRunning:boolean
)=>{
    start:()=>void,
    stop:()=>void,
    time:number,
    isRunning:boolean
}


export const useTimer:UseTimerProps = (initialRunning)=>{
    const [time,setTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState(initialRunning);
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

    return {
        time,
        isRunning,
        start:()=>setIsRunning(true),
        stop:()=>setIsRunning(false),
    }
}
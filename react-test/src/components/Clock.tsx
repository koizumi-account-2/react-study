import { useState, useEffect} from "react"

export const Clock = () => {
    //console.log('render');
    const [time,setTime] = useState(0);
    //1秒ごとにtimeを１ずつ増やす
    // window.setInterval(()=>{
    //     console.log('setInterval');
    //     setTime(prev => prev + 1);
    // },1000)

    useEffect(() => {
        // 1秒ごとにtimeを１ずつ増やす
        const intervalId = window.setInterval(()=>{
            setTime(prev => prev + 1);
        },1000)
        // クリーンアップ処理
        return ()=>{
            clearInterval(intervalId);
        }
    }, []);

    return (
        <div>time:{time}</div>
    )
}

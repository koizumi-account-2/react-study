import { useEffect, useState } from 'react'

const q = "パンはパンでも食べられないパンは？"
const a = "フライパン"

export const Quiz = () => {
    const [time,setTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState(true);
    const [answer ,setAnswer] = useState("");
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

    // 回答の入力イベント
    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setAnswer(e.target.value)
    }
    // 回答ボタンのクリックハンドラ
    const clickHander =() =>{
        // 一旦タイマーは停止
        setIsRunning(false);
    }
    return (
        <>
            <div>問題:{q}</div>
            {
                isRunning ?
                <>
                    <input type="text" onChange={changeHandler} value={answer}/>
                    <button onClick={clickHander}>回答</button>
                </>
                :
                <div>
                    結果:{a === answer ? <div>{time}秒で正解</div>:"不正解"}
                </div>
            }
        </>
    )
}

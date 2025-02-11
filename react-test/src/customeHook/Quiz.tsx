import { useEffect, useState } from 'react'
import { useTimer } from './useTimer';

const q = "パンはパンでも食べられないパンは？"
const a = "フライパン"

export const Quiz = () => {
    const [answer ,setAnswer] = useState("");
    const {stop,time,isRunning} = useTimer(true);

    // 回答の入力イベント
    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setAnswer(e.target.value)
    }
    // 回答ボタンのクリックハンドラ
    const clickHander =() =>{
        // 一旦タイマーは停止
        stop()
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

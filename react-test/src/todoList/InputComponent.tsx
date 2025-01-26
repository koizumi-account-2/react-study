import { useState } from "react";

type InputComponent = {
    clickEvent:(inputVal:string)=>void
}

export const InputComponent:React.FC<InputComponent> = ({clickEvent}) => {
    // 入力値の管理
    const [inputVal,setInputVal] = useState<string>("");

    // textboxのchangeHandler
    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setInputVal(e.target.value);
    }

    // 追加ボタンのクリックハンドラ
    const clickHandler = ()=>{
        clickEvent(inputVal);
        setInputVal("");
    }
    return (
        <>
            <input type="text" onChange={changeHandler} value={inputVal}/>
            <button onClick={clickHandler}>追加</button>
        </>
    )
}


import { useState } from "react";
import { Todo } from "./types";

type TodoInput = {
    addTodo:(todo:Todo)=>void
}

const generateId = () => Math.random().toString(36).substring(2, 9);
export const TodoInput:React.FC<TodoInput> = ({addTodo}) => {
    // 入力値の管理
    const [inputVal,setInputVal] = useState<string>("");

    // textboxのchangeHandler
    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setInputVal(e.target.value);
    }

    // 追加ボタンのクリックハンドラ
    const clickHandler = ()=>{
        addTodo({id:generateId(),content:inputVal});
        setInputVal("");
    }
    return (
        <>
            <input type="text" onChange={changeHandler} value={inputVal}/><button onClick={clickHandler}>追加</button>
        </>
    )
}

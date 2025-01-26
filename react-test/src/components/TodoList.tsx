import { useState } from "react";

type Todo = {
    id:string,
    content:string
}
const generateId = () => Math.random().toString(36).substring(2, 9);

export const TodoList = () => {
    // 初期値
    const todoList:Todo[] = [
        {id:"1",content:"AAA"},
        {id:"2",content:"BBB"},
        {id:"3",content:"CCC"}
    ]
    // todoListの管理
    const [todos, setTodos] = useState<Todo[]>(todoList);
    // 入力値の管理
    const [inputVal,setInputVal] = useState<string>("");

    // textboxのchangeHandler
    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setInputVal(e.target.value);
    }

    // 追加ボタンのクリックハンドラ
    const clickHandler = ()=>{
        setTodos([...todos,{id:generateId(),content:inputVal}]);
        setInputVal("");
    }

    // checkBoxクリック時の処理 削除するTodoのidを引数で取得し、todoListから削除する
    const deleteTodo = (id:string)=>{
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    }

    return (
        <>
            <div>TodoList</div>
            <input type="text" onChange={changeHandler} value={inputVal}/><button onClick={clickHandler}>追加</button>
            <ul>
                {todos.map(todo =>  <li key={todo.id}><input type="checkbox" onChange={()=>deleteTodo(todo.id)}/>{todo.content}</li>)}
            </ul>
        </>
    )
}

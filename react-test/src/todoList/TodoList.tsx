import { useState } from "react";
import { Todo } from "./types";
import { TodoContent } from "./TodoContent";
import { InputComponent } from "./InputComponent";

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

    // todoの追加
    const addTodo = (content:string)=>{
        setTodos([...todos,{id:generateId(),content}]);
    }
    // todoの削除
    const deleteTodo = (id:string)=>{
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    }
    
    return (
        <>
            <div>TodoList</div>
            <InputComponent clickEvent={addTodo}/>
            <ul>
                {todos.map(todo =>  <TodoContent key={todo.id} todo={todo} deleteTodo={deleteTodo}/>)}
            </ul>
        </>
    )
}

import { useState } from "react";
import { Todo } from "./types";
import { TodoInput } from "./TodoInput";
import { TodoContent } from "./TodoContent";

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
    const addTodo = (todo:Todo)=>{
        setTodos([...todos,todo]);
    }
    // todoの削除
    const deleteTodo = (id:string)=>{
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    }
    
    return (
        <>
            <div>TodoList</div>
            <TodoInput addTodo={addTodo}/>
            <ul>
                {todos.map(todo =>  <TodoContent key={todo.id} todo={todo} deleteTodo={deleteTodo}/>)}
            </ul>
        </>
    )
}

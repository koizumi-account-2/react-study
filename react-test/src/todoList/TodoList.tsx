import { useState } from "react";
import { Todo } from "./types";
import { TodoInput } from "./TodoInput";
import { TodoContent } from "./TodoContent";

export const TodoList = () => {
    console.log("TODOLIST")
    // 初期値
    const todoList:Todo[] = [
        {id:"1",content:"AAA"},
        {id:"2",content:"BBB"},
        {id:"3",content:"CCC"}
    ]
    // todoListの管理
    const [todos, setTodos] = useState<Todo[]>(todoList);


    return (
        <>
            <div>TodoList</div>
            <TodoInput todos={todos} setTodos={setTodos}/>
            <ul>
                {todos.map(todo =>  <TodoContent key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>)}
            </ul>
        </>
    )
}
import { Todo } from "./types"

type TodoContent = {
    todo:Todo, 
    deleteTodo:(id:string)=>void
}

export const TodoContent:React.FC<TodoContent> = ({todo,deleteTodo}) => {
    return (
        <li key={todo.id}>
            <input type="checkbox" onChange={()=>deleteTodo(todo.id)}/>
            {todo.content}
        </li>
    )
}

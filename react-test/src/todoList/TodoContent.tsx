import { Todo } from "./types"

type TodoContent = {
    todo:Todo, 
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

export const TodoContent:React.FC<TodoContent> = ({todo,todos,setTodos}) => {
    console.log("TODOCONTENT")

    // checkBoxクリック時の処理 削除するTodoのidを引数で取得し、todoListから削除する
    const deleteTodo = (id:string)=>{
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    }
    return (
        <li key={todo.id}><input type="checkbox" onChange={()=>deleteTodo(todo.id)}/>{todo.content}</li>
    )
}

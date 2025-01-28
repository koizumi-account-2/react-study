import { useContext } from "react"
import { MyContext } from "./user"

export const ComponentE = ({user}:{user:string}) => {
    console.log("E render")
    const userName = useContext(MyContext);
    return (
        <div>
            <h3>##ComponentE</h3>
            <p>ユーザ名：{user}</p>
            <p>userName : {userName}</p>
        </div>
    )
}

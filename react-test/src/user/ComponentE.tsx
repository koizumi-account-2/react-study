import { useContext } from "react"
import { MyContext } from "./user"

export const ComponentE = () => {
    console.log("E render")
    const context = useContext(MyContext);
    return (
        <div>
            <h3>##ComponentE</h3>
            <p>ユーザ名：{context?.user}</p>
        </div>
    )
}

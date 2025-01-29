import { useContext } from "react"
import { UserContext } from "./UsertProvider";

export const ComponentE = () => {
    console.log("E render")
    const context = useContext(UserContext);
    return (
        <div>
            <h3>##ComponentE</h3>
            <p>ユーザ名：{context?.user}</p>
        </div>
    )
}

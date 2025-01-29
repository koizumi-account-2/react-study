import { useContext } from "react"
import { UserContext } from "./UserProvider";

export const ComponentD = () => {
    console.log("D render")
    const context = useContext(UserContext);
    return (
        <div>
            <h3>##ComponentD</h3>
            ユーザ名入力：<input type="text" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>context?.setUser(e.target.value)} />
        </div>
    )
}

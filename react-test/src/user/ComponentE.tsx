import { useUserContext } from "./UserProvider";

export const ComponentE = () => {
    console.log("E render")
    const user = useUserContext();
    return (
        <div>
            <h3>##ComponentE</h3>
            <p>ユーザ名：{user}</p>
        </div>
    )
}

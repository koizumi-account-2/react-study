import { useUserContext } from "./UserProvider";

export const ComponentE = () => {
    console.log("E render")
    const context = useUserContext();
    return (
        <div>
            <h3>##ComponentE</h3>
            <p>ユーザ名：{context?.user}</p>
        </div>
    )
}

import { useUserDispatch } from "./UserProvider";

export const ComponentF = () => {
    console.log("F render")
    const setUser = useUserDispatch();
    const clickHandler = ()=>{
        setUser?.("");
    }
    return (
        <div>
            <h3>##ComponentF</h3>
            <button onClick={clickHandler}>RESET</button>
        </div>
    )
}
import { useUserDispatch } from "./UserProvider";

export const ComponentD = () => {
    console.log("D render")
    const setUser = useUserDispatch();
    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setUser?.(e.target.value);
    }
    return (
        <div>
            <h3>##ComponentD</h3>
            ユーザ名入力：<input type="text" onChange={changeHandler} />
        </div>
    )
}

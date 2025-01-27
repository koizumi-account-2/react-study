export const ComponentD = ({setUser}:{setUser:React.Dispatch<React.SetStateAction<string>>}) => {
    console.log("D render")
    return (
        <div>
            <h3>##ComponentD</h3>
            ユーザ名入力：<input type="text" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setUser(e.target.value)} />
        </div>
    )
}

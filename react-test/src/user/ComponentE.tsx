export const ComponentE = ({user}:{user:string}) => {
    console.log("E render")
    return (
        <div>
            <h3>##ComponentE</h3>
            <p>ユーザ名：{user}</p>
        </div>
    )
}

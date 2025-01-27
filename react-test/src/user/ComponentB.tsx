import { ComponentD } from "./ComponentD"

export const ComponentB = ({setUser}:{setUser:React.Dispatch<React.SetStateAction<string>>}) => {
    console.log("B render")
    return (
        <div>
            <h3>#ComponentB</h3>
            <ComponentD setUser={setUser}/>
        </div>
    )
}

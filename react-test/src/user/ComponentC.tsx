import { ComponentE } from "./ComponentE"

export const ComponentC = ({user}:{user:string}) => {
    console.log("C render")
    return (
        <div>
            <h3>#ComponentC</h3>
            <ComponentE user={user}/>
        </div>
    )
}

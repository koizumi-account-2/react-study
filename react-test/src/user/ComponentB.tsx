import { ComponentD } from "./ComponentD"

export const ComponentB = () => {
    console.log("B render")
    return (
        <div>
            <h3>#ComponentB</h3>
            <ComponentD/>
        </div>
    )
}

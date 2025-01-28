import { ComponentE } from "./ComponentE"

export const ComponentC = () => {
    console.log("C render")
    return (
        <div>
            <h3>#ComponentC</h3>
            <ComponentE/>
        </div>
    )
}

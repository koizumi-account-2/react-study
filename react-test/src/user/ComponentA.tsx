import { ComponentB } from "./ComponentB";
import { ComponentC } from "./ComponentC";
import { UsertProvider } from "./UsertProvider";

export const ComponentA = () => {
    console.log("A render")
    

    return (
        <UsertProvider>
            <h3>ComponentA</h3>
            <ComponentB />
            <ComponentC />
        </UsertProvider>
    )
}
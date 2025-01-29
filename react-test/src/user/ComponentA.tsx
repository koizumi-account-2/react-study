import { ComponentB } from "./ComponentB";
import { ComponentC } from "./ComponentC";
import { UserProvider } from "./UserProvider";

export const ComponentA = () => {
    console.log("A render")
    

    return (
        <UserProvider>
            <h3>ComponentA</h3>
            <ComponentB />
            <ComponentC />
        </UserProvider>
    )
}
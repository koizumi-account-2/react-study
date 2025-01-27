import { useState } from "react"
import { ComponentB } from "./ComponentB";
import { ComponentC } from "./ComponentC";

export const ComponentA = () => {
    console.log("A render")
    const [user , setUser] = useState<string>("");
    return (
        <div>
            <h3>ComponentA</h3>
            <ComponentB setUser={setUser}/>
            <ComponentC user={user}/>
        </div>
    )
}
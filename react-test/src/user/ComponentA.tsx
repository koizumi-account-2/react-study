import { useState } from "react"
import { ComponentB } from "./ComponentB";
import { ComponentC } from "./ComponentC";
import { MyContext } from "./user";

export const ComponentA = () => {
    console.log("A render")
    const [user , setUser] = useState<string>("");
    return (
        <MyContext.Provider value="Tom">
            <h3>ComponentA</h3>
            <ComponentB setUser={setUser}/>
            <ComponentC user={user}/>
        </MyContext.Provider>
    )
}
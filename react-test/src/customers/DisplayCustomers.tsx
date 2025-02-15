import { useState } from "react"
import { Customers } from "./Customers";

export const DisplayCustomers = () => {
    const [toggle ,setToggle] = useState(false);
    return (
        <>
            <button onClick={()=>setToggle(prev => !prev)}>{toggle?"非表示":"表示"}</button>
            {toggle && <Customers/>}
        </>
    )
}

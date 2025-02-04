import React from "react"
import { FoodType } from "./type"
import { useFoodListCotext, useSelectedIdDispatchContext } from "./FoodListProvider"

export const FoodList = () => {
    const foods = useFoodListCotext();
    const selectFood = useSelectedIdDispatchContext();
    const columNames = ["id","name","price"]
    const clickHandler = (item:FoodType)=>{
        console.log(`${item.name}`)
        if(selectFood) selectFood(item.id);
    }
    return (
        <>
            <h2>食べ物一覧</h2>
            <table>
                <thead>
                    <tr>
                        {columNames.map(column => <th key={column}>{column.toUpperCase()}</th>)}
                    </tr>
                </thead>
                <tbody>
                {
                    foods?.map(item => (
                        <tr key={item.id} onClick={()=>clickHandler(item)} style={{cursor:"pointer"}}>
                            {columNames.map(column=>(
                                <td key={`${column}-${item.id}`}>{column in item ? item[column as keyof FoodType]:""}</td>
                            ))}
                        </tr>
                    ))
                }
                </tbody>

            </table>
        </>

    )
}

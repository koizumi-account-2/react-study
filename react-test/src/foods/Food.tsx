import { useEffect, useState } from "react";
import { useFoodListCotext, useFoodListDispatchContext, useSelectedIdContext, useSelectedIdDispatchContext } from "./FoodListProvider"
import { FoodType } from "./type";
const defaultFood:FoodType = {
    id:"",
    name:"",
    price:0
}
const generateId = () => Math.random().toString(36).substring(2, 4);
export const Food = () => {
    const selectedFoodId = useSelectedIdContext();
    const selectId = useSelectedIdDispatchContext()

    const foodList = useFoodListCotext();
    const foodListDispatch = useFoodListDispatchContext();
    const food = foodList?.find(food => food.id === selectedFoodId);


    const [editFood , setEditFood] = useState<FoodType>(food || defaultFood);
    useEffect(()=>{
        setEditFood(food || defaultFood)
    },[food])


    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setEditFood(prev =>({...prev,[e.target.name]:e.target.value}));
    }

    // 保存イベント
    const save = ()=>{
        console.log(editFood)
        if(foodListDispatch){
            // 追加処理
            if(editFood.id === ""){
                const newFood:FoodType = {
                    ...editFood,
                    id: generateId()
                }
                foodListDispatch(prev => [...prev,newFood]);   
                if(selectId)selectId(newFood.id)
            // 更新処理
            }else{
                foodListDispatch(prev => prev.map(item => item.id === editFood.id?editFood:item));
            }   
        }
    }

    // 削除処理
    const deleteFood = ()=>{
        if(foodListDispatch)foodListDispatch(prev => prev.filter(item => item.id !== editFood.id));
        setEditFood(defaultFood)
    }

    // 追加処理
    const createFood = ()=>{
        if(selectId)selectId("")
        setEditFood(defaultFood)
    }


    return (
        <>
            <h2>選択したFood</h2>
            {food && <button onClick={createFood}>追加</button>}
            <div>
                {food && <p>ID : {food.id}</p>}

                <p>名前</p>
                <input type="text" name="name" value={editFood.name} onChange={changeHandler} />

                <p>値段</p>
                <input type="text" name="price" value={editFood.price} onChange={changeHandler} />

                <p>
                    <button onClick={save}>保存</button>
                    {food && <button onClick={deleteFood}>削除</button>}
                </p>
            </div>
        </>

    )
}

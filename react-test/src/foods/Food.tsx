import { useEffect, useState } from "react";
import { useFoodListCotext, useFoodListDispatchContext, useSelectedIdContext } from "./FoodListProvider"
import { FoodType } from "./type";
const defaultFood:FoodType = {
    id:"",
    name:"",
    price:0
}
export const Food = () => {
    const selectedFoodId = useSelectedIdContext();
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

    const clickHandler = ()=>{
        console.log(editFood)
        if(foodListDispatch)foodListDispatch(prev => prev.map(item => item.id === editFood.id?editFood:item));
    }

     const deleteFood = ()=>{
        if(foodListDispatch)foodListDispatch(prev => prev.filter(item => item.id !== editFood.id));
        setEditFood(defaultFood)
     }

    return (
        <>
            <h2>選択したFood</h2>
            {food ? 
                <div>
                    <p>ID : {editFood.id}</p>

                    <p>名前</p><input type="text" name="name" value={editFood.name} onChange={changeHandler}/>
                    <p>値段</p><input type="text" name="price" value={editFood.price} onChange={changeHandler}/>
                    <p>
                        <button onClick={clickHandler}>保存</button>
                        <button onClick={deleteFood}>削除</button>
                    </p>
                </div>
            :
            <>なし</>}
        </>

    )
}

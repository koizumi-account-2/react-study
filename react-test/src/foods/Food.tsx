import { useFoodListCotext, useFoodListDispatchContext, useSelectedIdContext } from "./FoodListProvider"

export const Food = () => {
    const selectedFoodId = useSelectedIdContext();
    const foodList = useFoodListCotext();
    const foodListDispatch = useFoodListDispatchContext();
    const food = foodList?.find(food => food.id === selectedFoodId);

    return (
        <>
            <h2>選択したFood</h2>
            {food ? 
                <div>
                    <p>ID : {food.id}</p>
                    <p>名前 : {food.name}</p>
                    <p>値段 : {food.price}</p> 
                </div>
            :
            <>なし</>}
        </>

    )
}

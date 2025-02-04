import { Dispatch, createContext, SetStateAction, useState, ReactNode, useContext } from "react";
import { FoodType } from "./type";
const defaultFoodList:FoodType[] = [
    {
        id:"1",
        name:"banana",
        price: 230
    },
    {
        id:"2",
        name:"apple",
        price: 100
    },
    {
        id:"3",
        name:"meat",
        price: 500
    }
]

export const FoodListCotext = createContext<FoodType[] | undefined>(undefined);
export const FoodListDispatchContext = createContext<Dispatch<SetStateAction<FoodType[]>> | undefined>(undefined);

export const SelectedIdContext = createContext<string | undefined>(undefined);
export const SelectedIdDispatchContext = createContext<Dispatch<SetStateAction<string>> | undefined>(undefined);


export const useFoodListCotext = ()=>{
    return useContext(FoodListCotext);
}
export const useFoodListDispatchContext = () =>{
    return useContext(FoodListDispatchContext);
}


export const useSelectedIdContext = ()=>{
    return useContext(SelectedIdContext)
}
export const useSelectedIdDispatchContext = ()=>{
    return useContext(SelectedIdDispatchContext)
}

export const FoodListProvider = ({children}:{children:ReactNode}) => {

    const [foodList,setFoodList] = useState<FoodType[]>(defaultFoodList);
    const [selectedId,selectId] = useState<string>("");
    

    return (
       <FoodListCotext.Provider value={foodList}>
            <FoodListDispatchContext.Provider value={setFoodList} >
                <SelectedIdContext.Provider value={selectedId}>
                    <SelectedIdDispatchContext.Provider value={selectId}>
                        {children}
                    </SelectedIdDispatchContext.Provider>
                </SelectedIdContext.Provider>
            
            </FoodListDispatchContext.Provider>
       </FoodListCotext.Provider>
    )
}

import { Food } from "./Food"
import { FoodList } from "./FoodList"

export const FoodManage = () => {

    return (
        <div style={{display:"flex"}}>
            <div style={{width:"50%"}}>
                <FoodList/>
            </div>
            <div style={{width:"50%"}}>
                <Food/>
            </div>        
        </div>
    )
}
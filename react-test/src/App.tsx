import { FoodListProvider } from "./foods/FoodListProvider"
import { FoodManage } from "./foods/FoodManage"

function App() {
  return (  
    <>
    <FoodListProvider>
       <FoodManage/>
    </FoodListProvider>
    </>
  )
}

export default App

import { Suspense } from "react"
import { Customers } from "./form/Customers"


function App() {
  return (  
    <Suspense fallback={"Aaaaaaaaaaaaaa"}>
      <Customers/>
      
    </Suspense>
  )
}

export default App

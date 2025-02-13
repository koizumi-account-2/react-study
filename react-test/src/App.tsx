import { Suspense } from "react"
import { SuspenseDemo } from "./suspense/SuspenseDemo"

function App() {
  return ( 

      <Suspense fallback={<span>wait...</span>}>
        <SuspenseDemo/>
      </Suspense>
  )
}

export default App

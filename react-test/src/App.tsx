import { useState } from "react"
import { Effect } from "./components/Effect"

function App() {
  const [isShow,setShow] = useState(true);
  return (
    <>
      <button onClick={()=>setShow(prev => !prev)}>切り替え</button>
      {isShow && <Effect/>}
    </>
  )
}

export default App

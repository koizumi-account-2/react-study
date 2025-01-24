import { Hello } from "./components/Hello"
import { Parent1, Parent2, Parent3, Parent4 } from "./components/Parent"

function App() {
  return (
    <>
      <Hello></Hello>
      <h3>Parent1</h3>
      <Parent1></Parent1>
      <h3>Parent2</h3>
      <Parent2></Parent2>
      <h3>Parent3</h3>
      <Parent3></Parent3>
      <h3>Parent4</h3>
      <Parent4></Parent4>
    </>
  )
}

export default App

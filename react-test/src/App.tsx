import { Event } from "./components/Event"
import { MyButton } from "./components/MyButton"

function App() {
  const eventA = ()=>{
    console.log('Aがクリックされました');
  }
  const eventB = ()=>{
    alert('Bがクリックされました')
  }


  return (
    <>
      <Event></Event>
      <MyButton clickEvent={eventA} label="ボタンA"></MyButton>
      <MyButton clickEvent={eventB} label="ボタンB"></MyButton>
    </>
  )
}

export default App

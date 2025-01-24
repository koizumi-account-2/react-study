import React from 'react'

export const Event:React.FC = () => {
  return (
    <>
        <input
            type="text"
            onBlur={() => console.log("Blur検知")}
            onFocus={() => console.log("Focus検知")}
            onChange={(e) => console.log(e.target.value) }
        />

        <button
            onMouseEnter={() => console.log("カーソルIN")}
            onMouseLeave={() => console.log("カーソルOUT")}
            onClick={() => console.log("Clicked")}
        >ボタン</button>
    </> 
  )
}


//React.ChangeEvent<HTMLInputElement>

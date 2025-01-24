import React from 'react'

type ButtonProps = {
    label: string,
    clickEvent: ()=>void
}

// クリックイベントのデコレータ
const decorator = (clickEvent:()=>void)=>{
    console.log('イベントスタート');
    clickEvent();
    console.log('イベントエンド');
}

export const MyButton:React.FC<ButtonProps>= ({label,clickEvent}) => {
  return (
    <button onClick={clickEvent}>{label}</button>
  )
}

// export const MyButton:React.FC<ButtonProps>= ({label,clickEvent}) => {
//   return (
//     <button onClick={()=>decorator(clickEvent)}>{label}</button>
//   )
// }

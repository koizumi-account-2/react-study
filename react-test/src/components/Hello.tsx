import React from "react"

export const Hello:React.FC = ()=>{
    const str = 'hello';
    const num = 123;
    const bool = true;
    const obj = {
        name: 'taro'
    };
    const ary = [10,20,30];
    const greet = (name:string):string=>{
        return `こんにちは!${name}さん`;
    }
    return (
        <>
            <p>{str}</p>
            <p>{num}</p>
            <p>{bool}</p>
            {/* <p>{obj}</p>  エラー*/} 
            <p>{ary}</p>
            <p>{greet(obj.name)}</p>
        </>
    )
}
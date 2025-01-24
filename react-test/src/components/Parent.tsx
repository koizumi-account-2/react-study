// 一番単純なパターン
const Child1=({name}:{name:string})=>{
    return <p>{`${name}`}</p>
}

export const Parent1:React.FC=()=>{
    return <Child1 name='aaa'></Child1>
}

// React.FCを記載
const Child2:React.FC<{name:string}>=({name})=>{
    return (
        <>
            <p>{`${name}`}</p>
        </>

    )
}

export const Parent2:React.FC=()=>{
    return <Child2 name='aaa'></Child2>
}


// 引数の型定義を追加
type Props = {
    name: string,
    age: number
}

const Child3:React.FC<Props>=(props)=>{
    return (
        <>
            <p>{props.name}</p>
            <p>{props.age}</p>
        </>

    )
}

export const Parent3:React.FC=()=>{
    return <Child3 name='aaa' age={123}></Child3>
}



// childrenを使用
// 引数の型定義を追加
type PropsWithChildren = {
    name: string,
    age: number,
    children: React.ReactNode
}
const Child4:React.FC<PropsWithChildren>=({name,age,children})=>{
    return (
        <>
            <p>{name}</p>
            <p>{age}</p>
            <div>
                {children}
            </div>
        </>

    )
}

export const Parent4:React.FC=()=>{
    return <Child4 name='aaa' age={123}>xxxx</Child4>
}

// interface ChildProps{
//     name: string,
//     age:number,
//     greet:()=>string
// }
import React, { useState } from 'react'

type Person={
    name:string,
    age:number
}

export const Profile = () => {
    // console.log("render")
    const defaultPerson:Person = { name: "Tom", age: 18 };
    const [person,setPerson]= useState<Person>(defaultPerson)
    const changeName= (e:React.ChangeEvent<HTMLInputElement>)=>{
        // console.log("changeEvent Fire")
        setPerson({...person,name:e.target.value});
    }
    return (
        <>
            <p>{person.name}</p>
            <p>{person.age}</p>
            <input type='text' onChange={changeName}/>    
        </>
    )
}

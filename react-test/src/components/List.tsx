import React, { useState } from 'react'

export const List = () => {
    const defaultFriends = ["佐藤","鈴木","田中"];
    const [friends,setFriends] = useState(defaultFriends);
    const clickHandler = ()=>{
        setFriends(["山田",...friends])
    }
    return (
        <>  
            <button onClick={clickHandler}>追加</button>
            {friends.map(friend => <li key={friend}>{friend}</li>)}
        </>
    )
}

import React, { useState } from 'react'

export const List = () => {
    const defaultFriends = ["佐藤","鈴木","田中"];
    const [friends,setFriends] = useState(defaultFriends);
    const clickHandler = ()=>{
		    // 先頭の要素を削除
        setFriends(friends.slice(1))
    }
    return (
        <>  
            <button onClick={clickHandler}>削除</button>
            {/* indexをkeyとして使用する */}
            {friends.map(friend => <input type="text" defaultValue={friend} key={friend}/>)}
    
        </>
    )
}
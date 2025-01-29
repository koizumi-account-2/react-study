import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

// 状態userのcontext
const UserContext = createContext<string>("");

// 状態更新関数setUserのcontext
const UserDispatchContext = createContext<Dispatch<SetStateAction<string>> | undefined>(undefined);


export const UserProvider = ({children}:{children:ReactNode}) => {

    
    const [user, setUser] = useState<string>("");
    return (
        <UserContext.Provider value={user}>
            <UserDispatchContext.Provider value={setUser}>
                {children}
            </UserDispatchContext.Provider>
        </UserContext.Provider>
    )
}

export const useUserContext = ()=>{
    return useContext(UserContext);
}

export const useUserDispatch = ()=>{
    return useContext(UserDispatchContext);
}

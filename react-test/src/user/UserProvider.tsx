import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

// コンテキストの型定義
type ContextType = {
  user: string;
  setUser: Dispatch<SetStateAction<string>>;
};

const UserContext = createContext<ContextType | undefined>(undefined);

export const UserProvider = ({children}:{children:ReactNode}) => {
    const [user, setUser] = useState<string>("");
    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = ()=>{
    return useContext(UserContext);
}
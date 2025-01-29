import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

// コンテキストの型定義
type ContextType = {
  user: string;
  setUser: Dispatch<SetStateAction<string>>;
};

export const UserContext = createContext<ContextType | undefined>(undefined);

export const UsertProvider = ({children}:{children:ReactNode}) => {

    
    const [user, setUser] = useState<string>("");
    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

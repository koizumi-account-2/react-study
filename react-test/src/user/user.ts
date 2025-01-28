import { createContext, Dispatch, SetStateAction } from "react";

// コンテキストの型定義
type ContextType = {
  user: string;
  setUser: Dispatch<SetStateAction<string>>;
};
export const MyContext = createContext<ContextType | undefined>(undefined);
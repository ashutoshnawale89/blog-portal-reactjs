import { useState, createContext, ReactNode, Dispatch, SetStateAction  } from "react";

interface BlogContextType {
    loginToken: string;
    setLoginToken: Dispatch<SetStateAction<string | null >>;
    userData: object | null;
    setUserData: Dispatch<SetStateAction<object | null>>;
}

export const BlogContext = createContext<BlogContextType | null>(null);

interface props {
    children: ReactNode;
}

export const BlogProvider = ({ children }: props) => {
    const [loginToken, setLoginToken] = useState<string | null>(null);
    const [userData, setUserData] = useState<object | null>(null);
    return (
        <BlogContext.Provider value={{ loginToken: loginToken!, setLoginToken, userData, setUserData }}>
            {children}
        </BlogContext.Provider>
    );
};



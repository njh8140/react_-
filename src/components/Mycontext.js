import { createContext, useState, useContext, useEffect } from "react";

// Context 생성
export const MyContext = createContext();

// Provider 정의
export const MyProvider = ({ children }) => {
    const [state, setState] = useState({
        emlAddr: "",
    });

    useEffect(() =>{
      const checkSession = () => {
        if(!sessionStorage.getItem("emlAddr")){
          setState({emlAddr:sessionStorage.getItem("emlAddr") || ""});
        }
      };

      window.addEventListener("storage", checkSession);
      return () => window.removeEventListener("storage",checkSession);
    },[])

    return (
        <MyContext.Provider value={{ state, setState }}>
            {children}
        </MyContext.Provider>
    );
};
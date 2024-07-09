import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import useLocalStorage from "../hooks/useLocalStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const [isAuth, setIsAuth] = useState(false);

  const [isAuth, setIsAuth] = useLocalStorage('Auth', false)

  const login = () => {
    setIsAuth(true);
    toast.success("Successfully logged In !");
  };

  const logout = () => {
    setIsAuth(false);
    toast.success("Successfully logged out !");
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth  = ()=>{
    const data =  useContext(AuthContext)
    return data;
}

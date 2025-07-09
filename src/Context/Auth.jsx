import { createContext, useState } from "react";

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

   const logIn = () => setIsUserLoggedIn(true);

  const logOut = () => {
    // logout logic
    setIsUserLoggedIn(false);
    setCartItems([]); // optional
  };

  return (
    <authContext.Provider value={{ cartItems, setCartItems, logOut, isUserLoggedIn, logIn }}>
      {children}
    </authContext.Provider>
  );
};


export default authContext;
  
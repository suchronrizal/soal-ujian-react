import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

function CartProvider({isCart, setIsCart, children}) {
  const [cart, setCart] = useState([]);
  const setDataCart = (cart) => setCart(cart)
      
  return (
      <>
        <MenuContext.Provider
          value={{
           isCart, 
           setIsCart,
           cart,
           setDataCart
          }}
        >
        {children}
        </MenuContext.Provider>
      </>
  );
}

const useGlobalContext = () => useContext(MenuContext);
export {CartProvider, useGlobalContext};

import {createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({children}) => {
const [cart, setCart] = useState([])

const addCart=(products)=>{
    const newCart =([...cart, products])
   setCart(newCart)
       console.log("Carrito:", newCart)

}

  return (
    
    <CartContext.Provider value={{cart, addCart }}>
        {children}
    </CartContext.Provider>
  )
}

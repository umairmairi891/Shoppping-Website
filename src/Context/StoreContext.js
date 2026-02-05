import { createContext, useContext } from "react"
import { Product as INITIAL_PRODUCT } from "../Types";
export const StoreContext = createContext({
   Product:{
    id:Date.now(),
    name,
    price:'',
    rating:'',
    category:'',
    image:'',
    description:'',
  },
  addToCart: (product) => { },
  onAddProduct: (newProduct) => { },
  updateQuantity: (id, delta) => { },
  removeFromCart: (id) => { },
  handleLogin: (userData) => { },
  handleLogout: () => { },
  authState:false,
});



export const useStore = () => {
  return useContext(StoreContext)
}

export const storeProvider = StoreContext.Provider;

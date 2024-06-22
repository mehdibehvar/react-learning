import { createContext, useReducer } from "react";

export const cartStore = createContext();
const initialState = {
  loading: false,
  error: null,
  qty: 0,
  cartItems: [],
};
export const cartActionType = {
  add: "ADD-TO-CART",
  remove: "REMOVE-FROM-CART",
  decrease: "decrease-in-CART",
};

const reducer = (state, action) => {
  switch (action.type) {
    case cartActionType.add: {
      const product = action.payload;
      const newCartItems=[...state.cartItems,product];
      return {
        ...state,
        loading: false,
        qty:newCartItems.length,
        cartItems:newCartItems
      };
    }

    case cartActionType.remove: {
      const product = action.payload;
      const newCartItems=state.cartItems.filter((item)=>item.id!==product.id);
      return {
        ...state,
        loading: false,
          qty:newCartItems.length,
          cartItems:newCartItems
      };
    }
    case cartActionType.decrease: {
      const product = action.payload;
      const itemsFilterd=state.cartItems.filter((item)=>item.id==product.id);
      const otherItems=state.cartItems.filter((item)=>item.id!==product.id);
      const newCartItems=[...otherItems,...itemsFilterd.slice(0, itemsFilterd.length - 1)]
      return {
        ...state,
        loading: false,
          qty:newCartItems.length,
          cartItems:newCartItems
      };
    }
    default:
      return state;
  }
};

const CartStoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <cartStore.Provider value={value}>{children}</cartStore.Provider>
  );
};

export default CartStoreProvider;

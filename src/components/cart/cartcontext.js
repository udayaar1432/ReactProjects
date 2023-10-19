import { createContext, useReducer } from "react";

const CartContext = createContext();


const initialState = {
  items: [],
  count: 0
};

const cartReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: [...state.items, action.value],
        count: state.count + action.value.qty
      };
      case "REMOVE_CART":
      return{
          ...state,
          items:state.items.filter((item)=>item.id !== action.payload.id),
          count: state.count - action.payload.qty
      }
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const CartContextProvider = (props) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContextProvider, CartContext };

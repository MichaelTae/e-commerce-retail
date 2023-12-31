// import { createContext, useReducer } from 'react';
// import { createAction } from '../utils/reducer/reducer.utils';
// const addCartItem = (cartItems, productToAdd) => {
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === productToAdd.id
//   );
//   if (existingCartItem) {
//     return cartItems.map((cartItem) =>
//       cartItem.id === productToAdd.id
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     );
//   }
//   return [...cartItems, { ...productToAdd, quantity: 1 }];
// };

// const removeCartitem = (cartItems, productToRemove) => {
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === productToRemove.id
//   );
//   if (existingCartItem.quantity === 1) {
//     return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
//   }
//   return cartItems.map((cartItem) =>
//     cartItem.id === productToRemove.id
//       ? { ...cartItem, quantity: cartItem.quantity - 1 }
//       : cartItem
//   );
// };

// const clearCartItem = (cartItems, cartItemToClear) => {
//   return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
// };

// export const CartContext = createContext({
//   isCartOpen: false,
//   setIsCartOpen: () => {},
//   cartItems: [],
//   addItemToCart: () => {},
//   cartCount: 0,
//   removeItemFromCart: () => {},
//   clearItemFromCart: () => {},
//   cartPriceTotal: 0,
// });

// const INITIAL_STATE = {
//   cartItems: [],
//   isCartOpen: false,
//   cartCount: 0,
//   cartPriceTotal: 0,
// };
// const CART_ACTION_TYPES = {
//   SET_CART_ITEMS: 'SET_CART_ITEMS',
//   SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
// };

// const cartReducer = (state, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CART_ACTION_TYPES.SET_CART_ITEMS:
//       return {
//         ...state,
//         ...payload,
//       };
//     case CART_ACTION_TYPES.SET_IS_CART_OPEN:
//       return {
//         ...state,
//         isCartOpen: payload,
//       };
//     default:
//       throw new Error(`Unhandled action type: ${type} in cartReducer`);
//   }
// };

// export const CartProvider = ({ children }) => {
//   const [{ cartItems, isCartOpen, cartCount, cartPriceTotal }, dispatch] =
//     useReducer(cartReducer, INITIAL_STATE);

//   const updateCartItemsReducer = (newCartItems) => {
//     const newCartCount = newCartItems.reduce(
//       (total, cartItem) => total + cartItem.quantity,
//       0
//     );

//     const newCartPriceTotal = newCartItems.reduce(
//       (total, cartItem) => total + cartItem.quantity * cartItem.price,
//       0
//     );

//     dispatch(
//       createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
//         cartItems: newCartItems,
//         cartCount: newCartCount,
//         cartPriceTotal: newCartPriceTotal,
//       })
//     );
//   };
//   const addItemToCart = (productToAdd) => {
//     const newCartItems = addCartItem(cartItems, productToAdd);
//     updateCartItemsReducer(newCartItems);
//   };
//   const removeItemFromCart = (productToRemove) => {
//     const newCartItems = removeCartitem(cartItems, productToRemove);
//     updateCartItemsReducer(newCartItems);
//   };
//   const clearItemFromCart = (cartItemToClear) => {
//     const newCartItems = clearCartItem(cartItems, cartItemToClear);
//     updateCartItemsReducer(newCartItems);
//   };
//   const setIsCartOpen = (bool) => {
//     dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
//   };
//   const value = {
//     isCartOpen,
//     setIsCartOpen,
//     addItemToCart,
//     cartItems,
//     cartCount,
//     removeItemFromCart,
//     clearItemFromCart,
//     cartPriceTotal,
//   };
//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };

//Commented out due to redux migration, saved for learning purposes

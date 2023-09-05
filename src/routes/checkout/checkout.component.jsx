import './checkout.styles.scss';
import { CartContext } from '../../context/cart.context';
import { useContext } from 'react';
const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <div>
      <h2> Checkout Page </h2>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <span onClick={() => removeItemFromCart(cartItem)}>
                Decrement
              </span>
              <br />
              <span onClick={() => addItemToCart(cartItem)}>Increment</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;

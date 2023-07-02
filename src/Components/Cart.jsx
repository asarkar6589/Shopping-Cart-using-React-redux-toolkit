import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  // Now we will map on the cartItem array which we have made in the reducer state.
  const { cartItems, subTotal, tax, total } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  const increment = (id) => {
    dispatch({
      type: "addToCart",
      payload: { id }, // Here we are passing it as an object because in the reducer, it takes it as object. In this object, we are only passing the id.
    });
    dispatch({ type: "calculatePrice" });
  };
  const decrement = (id) => {
    dispatch({
      type: "decrement",
      payload: id,
    });

    dispatch({ type: "calculatePrice" });
  };
  const deleteHandel = (id) => {
    dispatch({
      type: "deleteFromCart",
      payload: id,
    });
    dispatch({ type: "calculatePrice" });
  };
  return (
    <div className="cart">
      {/* Here our cart items will come */}
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i) => (
            <CartItem
              imageSrc={i.imgSrc}
              name={i.name}
              price={i.price}
              qty={i.quantity}
              id={i.id}
              key={i.id}
              decrementHandeler={decrement}
              incrementHandeler={increment}
              deleteHandeler={deleteHandel}
            />

            // All those values like i.imgSrc etc we are getting from Home.jsx, where we have sent all this details to the addToCartHandeler.
          ))
        ) : (
          <h1>No items Yet</h1>
        )}
      </main>

      <aside>
        <h2>Subtotal: ${subTotal}</h2>
        {/* <h2>Shipping: ${shipping}</h2> */}
        <h2>Tax: ${tax}</h2>
        <h2>Total: ${total}</h2>
      </aside>
    </div>
  );
};

const CartItem = ({
  imageSrc,
  name,
  price,
  qty,
  decrementHandeler,
  incrementHandeler,
  deleteHandeler,
  id,
}) => {
  return (
    <div className="cartItem">
      <img src={imageSrc} alt="name" />
      <article>
        <h3>{name}</h3>
        <p>${price}</p>
      </article>

      <div>
        <button onClick={() => decrementHandeler(id)}>-</button>
        <p>{qty}</p>
        <button onClick={() => incrementHandeler(id)}>+</button>
      </div>

      <AiFillDelete onClick={() => deleteHandeler(id)} />
    </div>
  );
};

export default Cart;

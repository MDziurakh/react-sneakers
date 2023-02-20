import React from "react";
import { NavLink } from "react-router-dom";

const CartInfo = ({ setOpenCart, orderSuccess, setOrderSuccess }) => {
  const closeAfterSuccess = () => {
    setOpenCart(false);
    setOrderSuccess(false);
  };
  return (
    <div className="empty-cart">
      {!orderSuccess ? (
        <>
          <img src="img/empty-cart.jpg" alt="empty-cart" />
          <h3>Cart is empty</h3>
          <p>Add at least one item to your cart</p>
        </>
      ) : (
        <>
          <img src="img/complete-order.jpg" alt="complete-order" />
          <h3>Order has been received!</h3>
          <p>
            You can check your orders in{" "}
            <NavLink to="user">
              <span onClick={closeAfterSuccess}>User page</span>
            </NavLink>{" "}
          </p>
        </>
      )}
      <div className="cart-bottom-empty">
        <button className="green-btn empty" onClick={() => closeAfterSuccess()}>
          Go back! <img src="img/arrow.svg" alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default CartInfo;

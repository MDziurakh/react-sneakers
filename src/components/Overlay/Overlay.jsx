import React, { useContext } from "react";
import { AppContext } from "../../App";
import CartItem from "../CartItem/CartItem";
import CartInfo from "../CartInfo/CartInfo";
import "./Overlay.scss";

const Overlay = ({ openCart, setOpenCart, totalPrice }) => {
  const { cartArr, onClickToOrder, orderSuccess, setOrderSuccess } = useContext(AppContext);
  return (
    <div className={openCart ? "overlayVisible overlay" : "overlay"}>
      <div className="drawer">
        <div className="cart-header">
          <h2>Cart</h2>
          <img
            className="img-zoom-cursor"
            src="img/btn-remove.svg"
            alt="close"
            onClick={() => setOpenCart(!openCart)}
          />
        </div>
        {cartArr.length > 0 ? (
          <div className="items">
            {cartArr.map((item) => (
              <CartItem
                key={item.id}
                title={item.title}
                price={item.price}
                src={item.src}
                id={item.id}
                parentId={item.parentId}
              />
            ))}
          </div>
        ) : (
          <>
          <CartInfo setOpenCart={setOpenCart} orderSuccess={orderSuccess} setOrderSuccess={setOrderSuccess}/>
            
          </>
        )}
        {cartArr.length > 0 ? (
          <div className="cart-bottom">
            <div className="result">
              Total price: <div className="line"></div> <b>{totalPrice}$</b>
            </div>
            <button className="green-btn" onClick={onClickToOrder}>
              Make an order <img src="img/arrow.svg" alt="arrow" />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Overlay;

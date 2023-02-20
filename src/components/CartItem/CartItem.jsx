import React, { useContext } from "react";
import { AppContext } from "../../App";
import "./CartItem.scss";

const CartItem = ({ title, price, src, parentId, id }) => {
  const { onClickToCart } = useContext(AppContext);
  const byClick = () => {
    onClickToCart({ title, src, price, parentId, inCart: true, id });
    console.log("cartItem", { title, src, price, parentId, inCart: true, id });
  };
  return (
    <div className="item">
      <img className="item-img" src={src} alt="item" />
      <div className="description">
        <p>{title}</p>
        <p className="price">{price} $</p>
      </div>
      <img
        className="img-zoom-cursor"
        src="img/btn-remove.svg"
        alt="remove"
        onClick={() => byClick()}
      />
    </div>
  );
};

export default CartItem;

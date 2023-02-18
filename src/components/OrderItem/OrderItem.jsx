import React from "react";
import "./OrderItem.scss";

const OrderItem = ({id, arr}) => {
  return (
    <div  className="order-item">
      <div className="data-info">
        <p>Order #{id}</p>
      </div>
      <div className="price-info">
        Price : {arr.reduce((total, { price }) => total + price, 0)} $
      </div>
      <div className="img-info">
        {arr.map((i) => (
          <img key={i.parentId} src={i.src} alt={i.src} />
        ))}
      </div>
    </div>
  );
};

export default OrderItem;

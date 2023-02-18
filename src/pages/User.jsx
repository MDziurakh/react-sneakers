import React, { useContext } from "react";
import { AppContext } from "../App";
import OrderItem from "../components/OrderItem/OrderItem";

const User = () => {
  const { ordersArr } = useContext(AppContext);
  console.log(ordersArr);

  return (
    <div>
      <h1>User and orders</h1>
      {ordersArr.map((item) => (
        <OrderItem 
          key={item.id}
          id={item.id}
          arr={item.arr}
          
        />
      ))}
    </div>
  );
};

export default User;

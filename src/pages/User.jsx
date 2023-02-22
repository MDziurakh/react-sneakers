import React, { useContext } from "react";
import { AppContext } from "../App";
import EmptyInfo from "../components/EmptyInfo/EmptyInfo";
import OrderItem from "../components/OrderItem/OrderItem";

const User = () => {
  const { ordersArr } = useContext(AppContext);


  return (
    <div>
      <h1 className="top-heading">Orders</h1>
      {ordersArr.length < 1 ? (
        <EmptyInfo title='Orders list is empty!' description='You will see your orders here after checkout'/>
      ) : (
        ordersArr.map((item) => (
          <OrderItem key={item.id} id={item.id} arr={item.arr} />
        ))
      )}
    </div>
  );
};

export default User;

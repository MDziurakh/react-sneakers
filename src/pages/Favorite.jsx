import React, { useContext } from "react";
import { AppContext } from "../App";
import EmptyInfo from "../components/EmptyInfo/EmptyInfo";
import FavItem from "../components/FavItem/FavItem";

const Favorite = () => {
  // const favArr = sneakers.filter((item) => item.liked);
  const { arr, favArr } = useContext(AppContext);
  const renderSneakers = () =>
    arr.map((item) => {
      if (favArr.some((i) => i.parentId === item.parentId)) {
        return (
          <FavItem
            title={item.title}
            src={item.src}
            price={item.price}
            key={item.id}
            id={item.id}
            liked={true}
            parentId={item.parentId}
          />
        );
      } else {
        return null;
      }
    });

  return (
    <>
      <h1>Favorites</h1>
      {favArr.length > 0 ? (
        <div>
          <div className="cards">{renderSneakers()}</div>
        </div>
      ) : (
        <>
          <EmptyInfo title='You don`t have any favorites' description='Add at least one' />
        </>
      )}
    </>
  );
};

export default Favorite;

import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../App";
import FavItem from "../components/FavItem/FavItem";

const Favorite = () => {
  // const favArr = sneakers.filter((item) => item.liked);
  const {arr , favArr} = useContext(AppContext);
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
            liked={item.liked}
            parentId={item.parentId}
          />
        );
      } else {
        return null;
      }
    });

  return (
    <>
      {favArr.length > 0 ? (
        <div>
        <h1>Favorites</h1>
        <div className="cards">{renderSneakers()}</div>
        </div>
      ) : (
        <div className="container_fav-empty">
          <div className="fav-empty">
            <img className="emoji" src="/img/sad-eyes.svg" alt="sad-eyes" />
            <h3>You don`t have any favorites</h3>
            <p>Add at least one</p>

            <button className="green-btn">
              <NavLink to="/">Go back and choose!</NavLink>
              <img src="/img/arrow.svg" alt="arrow" />
            </button>
          </div>
        </div>
      )}

    </>
  );
};

export default Favorite;

import React, { useContext } from "react";
import { AppContext } from "../../App";

const FavItem = ({
  title,
  src,
  price,
  parentId,
  id,
  liked
}) => {
  const {onClickFavorite} = useContext(AppContext)
  const onLikeClick = () => {
    onClickFavorite({ title, src, price, parentId, liked, id });
  };
  return (
    <div className="card">
      <button className="button favorite" onClick={onLikeClick}>
        <img
          className="img-zoom-cursor"
          src={liked ? "/img/liked.svg" : "/img/heart.svg"}
          alt="Heart"
        />
      </button>
      <img className="item-img" src={src} alt="sneakers" />
      <h5>{title}</h5>
      <div className="bottom-block">
        <div className="price-block">
          <p>Price:</p>
          <b>{price} $</b>
        </div>
      </div>
    </div>
  );
};

export default FavItem;

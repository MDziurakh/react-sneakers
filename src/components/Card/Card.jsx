import React, { useContext } from "react";

import ContentLoader from "react-content-loader";
import { AppContext } from "../../App";
import "./Card.scss";

const Card = ({ title, src, price, parentId, id, liked, inCart }) => {
  const { onClickFavorite, onClickToCart, isLoading } = useContext(AppContext);

  const onLikeClick = () => {
    onClickFavorite({ title, src, price, parentId, liked, inCart, id });
  };

  const onAddToCart = () => {
    onClickToCart({ title, src, price, parentId, liked, inCart: true, id });
  };

  return (
    <div className="card">
      {isLoading ? (
        <ContentLoader
          width={150}
          height={260}
          viewBox="0 0 150 260"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="20" ry="20" width="150" height="90" />
          <rect x="0" y="100" rx="5" ry="5" width="150" height="20" />
          <rect x="0" y="130" rx="5" ry="5" width="100" height="20" />
          <rect x="0" y="170" rx="5" ry="5" width="70" height="30" />
          <rect x="118" y="168" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <button className="button favorite" onClick={onLikeClick}>
            <img
              className="img-zoom-cursor"
              src={liked ? "img/liked.svg" : "img/heart.svg"}
              alt="Heart"
            />
          </button>
          <div className="main-block">
            <img className="item-img" src={src} alt="sneakers" />
            <h5>{title}</h5>
          </div>
          <div className="bottom-block">
            <div className="price-block">
              <p>Price:</p>
              <b>{price} $</b>
            </div>
            <button className="button" onClick={onAddToCart}>
              <img
                className="img-zoom-cursor"
                src={inCart ? "img/btn-checked.svg" : "img/plus.svg"}
                alt="Plus"
              />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;

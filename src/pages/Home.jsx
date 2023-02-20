import React, { useContext, useRef, useState } from "react";
import { AppContext } from "../App";
import Card from "../components/Card/Card";

const Home = ({ sneakers }) => {
  const [inputValue, setInputValue] = useState("");

  const { favArr, cartArr, isLoading } = useContext(AppContext);

  const input = useRef(null);
  const filtered = sneakers.filter((item) =>
    item.title.toLowerCase().includes(inputValue.toLowerCase())
  );

  const renderSneakers = (arr) => {
    if (isLoading) {
      return [...Array(8)].map(()=><Card key={Math.random()}/>)
    } else {
      return arr.map((item) => {
        if (favArr.some((i) => i.parentId === item.parentId)) {
          item.liked = true;
        } else {
          item.liked = false;
        }
        if (cartArr.some((i) => i.parentId === item.id)) {
          return (
            <Card
              key={item.id}
              parentId={item.parentId}
              id={item.id}
              title={item.title}
              src={item.src}
              price={item.price}
              liked={item.liked}
              inCart={true}
            />
          );
        } else {
          return (
            <Card
              key={item.parentId}
              parentId={item.parentId}
              id={item.id}
              title={item.title}
              src={item.src}
              price={item.price}
              liked={item.liked}
              inCart={item.inCart}
            />
          );
        }
      });
    }
  };
  return (
    <>
      <div>
        <div className="top-block">
          <h1>All Products</h1>
          <div>
            <img
              onClick={() => input.current.focus()}
              className="search-img img-zoom-cursor"
              src="img/search.svg"
              alt="search додати фокус для інпута"
            />
            <input
              ref={input}
              type="search"
              placeholder="Search..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            
            {inputValue.length > 0 ? <img
              className="remove-img img-zoom-cursor"
              onClick={() => setInputValue("")}
              src="img/btn-remove.svg"
              alt="remove"
            /> : null}
          </div>
        </div>
        <div className="cards">
          {inputValue.replace(/\s/g, "").length > 0
            ? renderSneakers(filtered)
            : renderSneakers(sneakers)}
        </div>
      </div>
    </>
  );
};

export default Home;

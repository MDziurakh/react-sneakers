import Overlay from "./components/Overlay/Overlay";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import Header from "./components/Header/Header";
import Favorite from "./pages/Favorite";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import User from "./pages/User";



export const AppContext = createContext({});

function App() {
  const [arr, setArr] = useState([]);
  const [cartArr, setCartArr] = useState([]);
  const [favArr, setFavArr] = useState([]);
  const [ordersArr, setOrdersArr] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [openCart, setOpenCart] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  // const sneakers = [
  //   {
  //     id: 1,
  //     title: "Nike Air Max 270",
  //     price: 40,
  //     src: "/img/sneakers/1.jpg",
  //     liked: false,
  //     inCart: false,
  //   },
  //   {
  //     id: 2,
  //     title: "Bike Air Max 270",
  //     price: 20,
  //     src: "/img/sneakers/2.jpg",
  //     liked: false,
  //     inCart: false,
  //   },
  //   {
  //     id: 3,
  //     title: "Hike Air Max 270",
  //     price: 17,
  //     src: "/img/sneakers/3.jpg",
  //     liked: false,
  //     inCart: false,
  //   },
  //   {
  //     id: 4,
  //     title: "Nike Air Max 270",
  //     price: 21,
  //     src: "/img/sneakers/4.jpg",
  //     liked: false,
  //     inCart: false,
  //   },
  //   {
  //     id: 5,
  //     title: "Like Air Max 270",
  //     price: 51,
  //     src: "/img/sneakers/5.jpg",
  //     liked: false,
  //     inCart: false,
  //   },
  //   {
  //     id: 6,
  //     title: "Bire Air Max 270",
  //     price: 24,
  //     src: "/img/sneakers/6.jpg",
  //     liked: false,
  //     inCart: false,
  //   },
  //   {
  //     id: 7,
  //     title: "Luke Air Max 270",
  //     price: 42,
  //     src: "/img/sneakers/7.jpg",
  //     liked: false,
  //     inCart: false,
  //   },
  //   {
  //     id: 8,
  //     title: "Puke Air Max 270",
  //     price: 30,
  //     src: "/img/sneakers/8.jpg",
  //     liked: false,
  //     inCart: false,
  //   },
  //   {
  //     id: 9,
  //     title: "Hook Air Max 270",
  //     price: 32,
  //     src: "/img/sneakers/9.jpg",
  //     liked: false,
  //     inCart: false,
  //   },
  //   {
  //     id: 10,
  //     title: "Duck Air Max 270",
  //     price: 22,
  //     src: "/img/sneakers/10.jpg",
  //     liked: false,
  //     inCart: false,
  //   },
  // ];

  useEffect(() => {
    async function fetchData() {
      try {
        const [allData, cartData, favData, odrersData] = await Promise.all([
          axios.get("https://63dd01ec367aa5a7a406c976.mockapi.io/sneakers"),
          axios.get("https://63dd01ec367aa5a7a406c976.mockapi.io/cart"),
          axios.get("https://63e64cf37eef5b223382f966.mockapi.io/favorite"),
          axios.get("https://63e64cf37eef5b223382f966.mockapi.io/orders"),
        ]);
        setCartArr(cartData.data);
        setArr(allData.data);
        setFavArr(favData.data);
        setOrdersArr(odrersData.data);

        let init = 0;
        setTotalPrice(
          cartData.data.reduce((acc, curr) => acc + curr.price, init)
        );
        // setTimeout(() => setIsLoading(false), 200); // щоб встигало спрацювати \щось не так тут
        setIsLoading(false);
      } catch (err) {
        console.dir(err);
      }
    }
    fetchData();
  }, []);

  const onClickFavorite = async (obj) => {
    try {
      const findItem = favArr.find((item) =>
        Number(item.parentId === obj.parentId)
      );
      if (!findItem) {
        const newObj = { ...obj, liked: true };
        setFavArr((prev) => [...prev, newObj]);
        const { data } = await axios.post(
          "https://63e64cf37eef5b223382f966.mockapi.io/favorite/",
          newObj
        );
        setFavArr((prev) => {
          const newState = prev.map((item) => {
            if (item.parentId === data.parentId) {
              return { ...item, id: data.id };
            }
            return item;
          });
          return newState;
        });
      } else {
        setFavArr((prev) => {
          return prev.filter(
            (item) => Number(item.parentId) !== Number(obj.id)
          );
        });
        await axios.delete(
          `https://63e64cf37eef5b223382f966.mockapi.io/favorite/${findItem.id}`
        );
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const onClickToCart = async (obj) => {
    try {
      const findItem = cartArr.find(
        (item) => Number(item.parentId) === Number(obj.parentId)
      );
      // console.log(findItem, "findItem");
      if (findItem) {
        setCartArr((prev) => {
          return prev.filter(
            (item) => Number(item.parentId) !== Number(findItem.parentId)
          );
        });
        setTotalPrice((prev) => prev - findItem.price);

        await axios.delete(
          `https://63dd01ec367aa5a7a406c976.mockapi.io/cart/${findItem.id}`
        );
      } else {
        setTotalPrice((prev) => prev + obj.price);
        setCartArr((prev) => [...prev, obj]); // змінюємо стейт на потрібні значення

        const { data } = await axios.post(
          // дата повертає значення запиту на сервер, ми його використовуємо знову в наступному перезаписі даних, щоб актуалізувати дані на фронті згідно з бекендом
          "https://63dd01ec367aa5a7a406c976.mockapi.io/cart/",
          obj
        );
        setCartArr((prev) => {
          // актуалізуємо id
          const newState = prev.map((item) => {
            if (item.parentId === data.parentId) {
              //якщо в елемента з нового масиву є ідентичний перентІд, то йому треба айді, щоб воно було ідентичним з тим, яке на сервері
              return { ...item, id: data.id };
            }
            return item; // якщо ні, то просто повертаємо айтем, бо меп має завжди щось повертати
          });
          return newState; // повертаємо загальний стейт вже оновленим
        });
      }
    } catch (err) {
      console.dir(err);
    }
  };

  const onClickToOrder = async () => {
    const objToOrders = { arr: cartArr };
    try {
      // const postCurrentOrders = 
      await axios.post(
        `https://63e64cf37eef5b223382f966.mockapi.io/orders`,
        objToOrders
      );
      // console.log("postCurrentOrders", postCurrentOrders);
      const { data } = await axios.get(
        `https://63e64cf37eef5b223382f966.mockapi.io/orders/`
      );
      setOrdersArr(data);
      setCartArr([]);
      setTotalPrice(0);

      for(let i = 0; i < cartArr.length; i++){
        const item = cartArr[i];
        console.log(item);
        await axios.delete(`https://63dd01ec367aa5a7a406c976.mockapi.io/cart/${item.id}`)
      }

    } catch (err) {
      console.dir(err);
    }
  };

  return (
    <AppContext.Provider
      value={{
        arr,
        cartArr,
        favArr,
        onClickFavorite,
        onClickToCart,
        isLoading,
        onClickToOrder,
        ordersArr
      }}
    >
      <>
        <div className="wrapper">
          <Header
            openCart={openCart}
            setOpenCart={setOpenCart}
            totalPrice={totalPrice}
          />
          <Overlay
            openCart={openCart}
            setOpenCart={setOpenCart}
            sneakers={arr}
            totalPrice={totalPrice}
          />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home sneakers={arr} />}></Route>
              <Route path="/user" element={<User />}></Route>
              <Route path="/favorite" element={<Favorite />}></Route>
            </Routes>
          </div>
        </div>
      </>
    </AppContext.Provider>
  );
}

export default App;

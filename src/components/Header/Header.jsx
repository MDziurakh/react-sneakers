import { NavLink } from "react-router-dom";
import { CartIcon, Heart, UserIcon } from "../SvgIcons/SvgIcons";
import "./Header.scss";

const Header = ({
  openCart,
  setOpenCart,
  totalPrice,
  favArr,
  ordersArr,
  cartArr,
}) => {
  return (
    <header>
      <NavLink to="/">
        <div className="header-left">
          <img width={40} height={40} src="img/logo.png" alt="logo" />
          <div>
            <h3 className="heading">React Sneakers</h3>
            <p className="subheading">Best Sneakers market</p>
          </div>
        </div>
      </NavLink>

      <ul className="header-right">
        <li onClick={() => setOpenCart(!openCart)} className="img-zoom-cursor">
          {cartArr.length > 0 ? (
            <CartIcon borderColor="#22559C" />
          ) : (
            <CartIcon borderColor="#9B9B9B" />
          )}
          <span>{totalPrice}$</span>
        </li>
        <NavLink to="favorite">
          <li className="img-zoom-cursor">
            {favArr.length > 0 ? (
              <Heart borderColor="#f65d5d" />
            ) : (
              <Heart borderColor="#9B9B9B" />
            )}
          </li>
        </NavLink>
        <NavLink to="user">
          <li className="img-zoom-cursor">
            {ordersArr.length > 0 ? (
              <UserIcon borderColor="#FFB830" />
            ) : (
              <UserIcon borderColor="#9B9B9B" />
            )}
          </li>
        </NavLink>
      </ul>
    </header>
  );
};

export default Header;

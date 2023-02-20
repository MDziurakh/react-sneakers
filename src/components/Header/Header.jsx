import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = ({ openCart, setOpenCart, totalPrice }) => {
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
        {/* <NavLink to="/cart"> */}
          <li>
            <img className="img-zoom-cursor"
              src="img/cart.svg"
              alt="cart"
              onClick={() => setOpenCart(!openCart)}
            />
            <span>{totalPrice}$</span>
          </li>
        {/* </NavLink> */}
        <NavLink to="/favorite">
          <li>
            <img className="img-zoom-cursor" src="img/heart.svg" alt="heart" />
          </li>
        </NavLink>
        <NavLink to="/user">
          <li>
            <img className="img-zoom-cursor" src="img/user.svg" alt="user" />
          </li>
        </NavLink>
      </ul>
    </header>
  );
};

export default Header;

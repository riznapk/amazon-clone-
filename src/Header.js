import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useSelector } from "react-redux";
import { auth } from "./firebase";

function Header() {
  //to get the total number of items in the basket
  const basket = useSelector((state) => state.basket);
  const user = useSelector((state) => state.user);
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      {/* Amazon logo Image */}
      <Link to="/">
        <img
          className="header-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon header Logo"
        />
      </Link>

      {/* Amazon Search Icon */}
      <div className="header-search">
        <input type="text" className="header-searchInput"></input>
        <SearchIcon className="header-searchIcon" />
      </div>

      {/* Adding 3 links */}
      <div className="header-nav">
        <Link to="/login" onClick={login} className="header-link">
          <div className="header-option">
            <span className="header-option-one">Hello {user?.email}</span>
            <span className="header-option-two">
              <strong>{user ? "Sign Out" : "Sign In"} </strong>
            </span>
          </div>
        </Link>

        <Link to="/login" className="header-link">
          <div className="header-option">
            <span className="header-option-one">Returns</span>
            <span className="header-option-two">& Orders</span>
          </div>
        </Link>

        <Link to="/login" className="header-link">
          <div className="header-option">
            <span className="header-option-one">Your</span>
            <span className="header-option-two">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header-link">
          <div className="header-basket">
            <ShoppingBasketIcon />
            <span className="header-option-two header-basket-count">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;

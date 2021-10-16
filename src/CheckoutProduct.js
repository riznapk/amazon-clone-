import React from "react";
import { useDispatch } from "react-redux";

import "./CheckoutProduct.css";

function CheckoutProduct({ id, title, image, price, rating }) {
  const dispatch = useDispatch();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE FROM BASKET",
      id: id,
    });
  };
  return (
    <div className="CheckoutProduct">
      <img className="CheckoutProduct-image" src={image} alt="" />
      <div className="CheckoutProduct-info">
        <p className="CheckoutProduct-title">{title}</p>
        <p className="CheckoutProduct-price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="CheckoutProduct-rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket} className="CheckoutProduct-button">
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;

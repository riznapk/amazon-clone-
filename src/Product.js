import React from "react";
import { useDispatch } from "react-redux";

import "./Product.css";

function Product(props) {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch({
      type: "ADD TO BASKET",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product-name">
        <p>{props.title}</p>
        <p className="product-price">
          <small>₹</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product-rating">
          {Array(props.rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={props.image} alt="Product mobile One plus Nord" />
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default Product;

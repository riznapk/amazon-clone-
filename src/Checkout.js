import React from "react";
import { useSelector } from "react-redux";

import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const basket = useSelector((state) => state.basket);
  return (
    <div className="checkout">
      <div>
        <img
          className="checkout-ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/Amazon-Pay-Later/Aug_2021/Aug_ART/1150X323_GW_Editorial_NCEMI_AUG._CB645564783_.jpg"
          alt="Home Kitchen"
        />
        {basket.length === 0 ? (
          <div>
            <h2>Your Amazon Cart is empty</h2>
            <p>
              You have no items in your basket. To buy one or more items, click
              'Add to Basket' next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout-title">Your Shopping Basket</h2>
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="subtotal-right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;

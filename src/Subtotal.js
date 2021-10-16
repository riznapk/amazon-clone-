import React from "react";
import CurrencyFormat from "react-currency-format";

import { useSelector } from "react-redux";
import { getBasketTotal } from "./store/amazonStore";

import "./Subtotal.css";

function Subtotal() {
  const basket = useSelector((state) => state.basket);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) : <strong>{value}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" name="" id="" /> This order contains gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix="₹"
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;

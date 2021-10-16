import { createStore } from "redux";

const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const amazonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER" : return {...state,
    user: action.user}

    case "ADD TO BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE FROM BASKET":
      const newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => action.id === basketItem.id
      );

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          "Cant remove the product (id: {action.id}) from the basket"
        );
      }

      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

const store = createStore(amazonReducer);

export default store;

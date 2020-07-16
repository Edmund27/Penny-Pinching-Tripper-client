import { SAVE_CURRENCIES, SAVE_EXCHANGE_RATE } from "./actions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CURRENCIES:
      return { ...initialState, ...action.payload };
    case SAVE_EXCHANGE_RATE:
      return { ...initialState, ...action.payload };
    default:
      return state;
  }
};

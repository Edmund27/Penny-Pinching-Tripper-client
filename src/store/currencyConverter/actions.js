import axios from "axios";
import { apiUrl } from "../../config/constants";

export const SAVE_CURRENCIES = "SAVE_CURRENCIES";
export const SAVE_EXCHANGE_RATE = "SAVE_EXCHANGE_RATE";

const saveCurrencies = (exchangeRates, currencyList) => {
  return {
    type: SAVE_CURRENCIES,
    payload: { exchangeRates, currencyList },
  };
};

const saveConversionRate = (exchangeRate) => {
  return {
    type: SAVE_EXCHANGE_RATE,
    payload: { exchangeRate },
  };
};

export const fetchCurrencies = (fromCurrency) => async (dispatch, getState) => {
  const currencies = `https://api.exchangeratesapi.io/latest?base=${fromCurrency}`;
  try {
    const response = await axios.get(currencies);

    response.data.rates[fromCurrency] = 1.0;

    const sortedCurrencyList = [...Object.keys(response.data.rates)].sort();

    dispatch(saveCurrencies(response.data, sortedCurrencyList));
  } catch (error) {
    console.log(error);
  }
};

// export const fetchLatestExchangeRate = (fromCurrency, toCurrency) => async (
//   dispatch,
//   getState
// ) => {
//   const latestExchangeRate = `https://api.exchangeratesapi.io/latest?base=${fromCurrency}&symbols=${toCurrency}`;
//   try {
//     const response = await axios.get(latestExchangeRate);

//     console.log("THIS IS WHAT I'M SENDING", response.data);
//     dispatch(saveConversionRate(response.data));
//   } catch (error) {
//     console.log(error);
//   }
// };

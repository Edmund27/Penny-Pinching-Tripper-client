import axios from "axios";

export const SAVE_CURRENCIES = "SAVE_CURRENCIES";
export const SAVE_EXCHANGE_RATE = "SAVE_EXCHANGE_RATE";

const saveCurrencies = (exchangeRates, currencyList) => {
  return {
    type: SAVE_CURRENCIES,
    payload: { exchangeRates, currencyList },
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

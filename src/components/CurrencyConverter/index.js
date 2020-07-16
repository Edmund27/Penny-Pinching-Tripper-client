import React, { useState, useEffect } from "react";
import { Row, Form, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCurrencies,
  fetchLatestExchangeRate,
} from "../../store/currencyConverter/actions";
import {
  selectExchangeRates,
  selectCurrencyList,
} from "../../store/currencyConverter/selectors";
import CurrencyRow from "./CurrencyRow";
import CurrencyRow2 from "./CurrencyRow2";

//BASED FUNCTIONALITY ON
//https://github.com/WebDevSimplified/React-Currency-Converter
//WIP

export default function CurrencyConverter() {
  const dispatch = useDispatch();
  let currencies = useSelector(selectCurrencyList);
  const rates = useSelector(selectExchangeRates);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState(1);
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    // console.log("exchange rate", exchangeRate);
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    // console.log("2ND exchange rate", exchangeRate);
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    dispatch(fetchCurrencies("EUR"));
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      dispatch(fetchCurrencies(fromCurrency));

      setExchangeRate(rates.rates[toCurrency]);
    } else {
      setExchangeRate(1);
    }
  }, [fromCurrency, toCurrency]);

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

  if (!currencies) {
    return [];
  }

  return (
    <Container>
      <Form as={Row} md={{ span: 1, offset: 0 }} className="mt-1 form-inline">
        <Form.Group controlId="formCurrencyConverter.ControlSelect1">
          <CurrencyRow
            currencies={currencies}
            selectedCurrency={fromCurrency}
            onChangeCurrency={(e) => setFromCurrency(e.target.value)}
            onChangeAmount={handleFromAmountChange}
            amount={fromAmount}
          />
        </Form.Group>
        {"=>"}
        <Form.Group controlId="formCurrencyConverter.ControlSelect2">
          <CurrencyRow2
            currencies={currencies}
            selectedCurrency={toCurrency}
            onChangeCurrency={(e) => setToCurrency(e.target.value)}
            onChangeAmount={handleToAmountChange}
            amount={toAmount}
          />
        </Form.Group>
      </Form>
    </Container>
  );
}

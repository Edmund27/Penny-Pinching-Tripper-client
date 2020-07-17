import React, { useState, useEffect } from "react";
import { Row, Form, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrencies } from "../../store/currencyConverter/actions";
import {
  selectExchangeRates,
  selectCurrencyList,
} from "../../store/currencyConverter/selectors";
import CurrencyRow2 from "./CurrencyRow2";

//BASED FUNCTIONALITY ON
//https://github.com/WebDevSimplified/React-Currency-Converter

export default function CurrencyConverter() {
  const dispatch = useDispatch();
  let currencies = useSelector(selectCurrencyList);
  const rates = useSelector(selectExchangeRates);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  //const [isDisabled, setDisabled] = useState(false);

  let toAmount, fromAmount;

  if (rates && rates.base && fromCurrency === rates.base) {
    if (amountInFromCurrency) {
      fromAmount = amount;
      toAmount = amount * rates.rates[toCurrency];
    } else {
      toAmount = amount;
      fromAmount = amount / rates.rates[toCurrency];
    }
  }

  useEffect(() => {
    dispatch(fetchCurrencies("EUR"));
  }, [dispatch]);

  useEffect(() => {
    if (rates && fromCurrency !== null && toCurrency !== null) {
      dispatch(fetchCurrencies(fromCurrency));
    }
  }, [fromCurrency, toCurrency, dispatch, rates]);

  function handleFromAmountChange(e) {
    // convert FROM to TO
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  function handleToAmountChange(e) {
    // Convert TO to FROM
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
          <CurrencyRow2
            currencies={currencies}
            selectedCurrency={fromCurrency}
            onChangeCurrency={(e) => setFromCurrency(e.target.value)}
            onChangeAmount={handleFromAmountChange}
            amount={Number(fromAmount)}
          //isDisabled={isDisabled}
          />
        </Form.Group>
        {amountInFromCurrency ? (
          <div className="arrow">&#8594;</div>
        ) : (
            <div className="arrow">&#8592;</div>
          )}
        <Form.Group controlId="formCurrencyConverter.ControlSelect2">
          <CurrencyRow2
            currencies={currencies}
            selectedCurrency={toCurrency}
            onChangeCurrency={(e) => setToCurrency(e.target.value)}
            onChangeAmount={handleToAmountChange}
            amount={Number(toAmount)}
          //isDisabled={isDisabled}
          />
        </Form.Group>
      </Form>
    </Container>
  );
}

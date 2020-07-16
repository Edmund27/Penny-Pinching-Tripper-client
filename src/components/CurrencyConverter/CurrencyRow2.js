import React from "react";

//COPIED FROM
//https://github.com/WebDevSimplified/React-Currency-Converter
//WIP

export default function CurrencyRow2(props) {
  let {
    currencies,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount,
  } = props;

  return (
    <div>
      <input
        type="number"
        min="1"
        className="input"
        value={amount}
        onChange={onChangeAmount}
        disabled
      />
      <select
        value={selectedCurrency}
        onChange={onChangeCurrency}
        defaultValue={currencies}
      >
        {currencies.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

import { useState } from "react";
import CurrencyInput from "react-currency-input-field";
import PaypalDonateButton from "../../Paypal/PaypalDonateButton";
// import PaypalCheckoutButton from "../../Paypal/PaypalCheckoutButton";

import classes from "./DonateForm.module.scss";

const DonateForm = () => {
  const [price, setPrice] = useState(null);
  const [fund, setFund] = useState("Endowment Fund");
  const [message, setMessage] = useState("");

  let product = {
    description: fund,
    price: price,
  };

  return (
    <>
      <div className={classes.DonateForm}>
        {/* <input
          type="number"
          name="amount"
          id="amount"
          min={0.0}
          step={0.01}
          pattern="^\d*(\.\d{0,2})?$"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        /> */}
        <CurrencyInput
          id="amount"
          name="amount"
          prefix={"$"}
          placeholder="Please enter an amount"
          //   defaultValue={0.00}
          value={price}
          decimalsLimit={2}
          fixedDecimalLength={2}
          allowNegativeValue={false}
          onValueChange={(value, name) => setPrice(value)}
        />
        <select
          name="fund"
          id="fund"
          value={fund}
          onChange={(e) => setFund(e.target.value)}
        >
          <option value="Endowment Fund">Endowment Fund</option>
          <option value="Scholarship Fund">Scholarship Fund</option>
          <option value="Centennial Fund">Centennial Fund</option>
        </select>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Optional message"
        ></textarea>
        <div>
          <div>Amount: {price}</div>
          <div>{fund}</div>
        </div>
        <PaypalDonateButton product={product} />
        {/* <PaypalCheckoutButton product={product} /> */}
      </div>
    </>
  );
};

export default DonateForm;

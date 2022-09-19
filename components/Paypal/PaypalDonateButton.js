import { PayPalButtons } from "@paypal/react-paypal-js";

const PaypalDonateButton = ({ product }) => {
  console.log("PRICE: ", product.price);
  console.log("DESC: ", product.description)
  return (
    <PayPalButtons
      // style={{ label: "donate" }}
      // disabled={false}
      createOrder={(data, actions) => {
        return actions.order
          .create({
            purchase_units: [
              {
                description: product.description,
                amount: {
                  currency_code: "USD",
                  value: product.price,
                },
              },
            ],
          })
          .then((orderId) => {
            // Your code here after create the order
            return orderId;
          });
      }}
    />
  );
};

export default PaypalDonateButton;

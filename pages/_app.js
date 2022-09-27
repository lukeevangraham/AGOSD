import { DefaultSeo } from "next-seo";
import "../styles/globals.scss";
import "@fontsource/lato/100.css";
import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900.css";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
// import {
//   PayPalScriptProvider,
//   PayPalHostedFieldsProvider,
//   PayPalHostedField,
//   usePayPalHostedFields,
// } from "@paypal/react-paypal-js";
import { useState, useEffect, useRef } from "react";

function MyApp({ Component, pageProps }) {
  // const [clientToken, setClientToken] = useState(null);

  // const CUSTOM_FIELD_STYLE = {
  //   border: "1px solid #606060",
  //   boxShadow: "2px 2px 10px 2px rgba(0,0,0,0.1)",
  //   backgroundColor: "#eee",
  // };
  // const INVALID_COLOR = {
  //   color: "#dc3545",
  // };
  // base URL will need to change for production applications
  // const base = "https://api-m.sandbox.paypal.com";

  // call this function to create your client token
  // async function generateClientToken() {
  //   const accessToken = await generateAccessToken();
  //   const response = await fetch(`${base}/v1/identity/generate-token`, {
  //     method: "post",
  //     headers: {
  //       Authorization: `Bearer ${accessToken}`,
  //       "Accept-Language": "en_US",
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const data = await response.json();
  //   console.log("LOOK HERE: ", data)
  //   return data.client_token;
  // }

  // access token is used to authenticate all REST API requests
  // async function generateAccessToken() {
  //   const auth = Buffer.from(
  //     process.env.NEXT_PUBLIC_CLIENT_ID +
  //       ":" +
  //       process.env.NEXT_PUBLIC_APP_SECRET
  //   ).toString("base64");
  //   const response = await fetch(`${base}/v1/oauth2/token`, {
  //     method: "post",
  //     body: "grant_type=client_credentials",
  //     headers: {
  //       Authorization: `Basic ${auth}`,
  //     },
  //   });
  //   const data = await response.json();
  //   return data.access_token;
  // }

  // useEffect(() => {
  // console.log("HI");
  // setClientToken(generateClientToken());
  // console.log("TOKEN: ", generateClientToken());
  //   async function generateClientToken() {
  //     const accessToken = await generateAccessToken();
  //     const response = await fetch(`${base}/v1/identity/generate-token`, {
  //       method: "post",
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //         "Accept-Language": "en_US",
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const data = await response.json();
  //     // console.log("LOOK HERE: ", data);
  //     // return data.client_token;
  //     setClientToken(data.client_token);
  //   }
  //   generateClientToken();
  // }, []);

  // const initialOptions = {
  //   "client-id": process.env.NEXT_PUBLIC_CLIENT_ID,
  //   currency: "USD",
  //   intent: "capture",
  //   "data-client-token": clientToken,
  //   components: "hosted-fields",
  // };

  // const SubmitPayment = ({ customStyle }) => {
  //   const [paying, setPaying] = useState(false);
  //   const cardHolderName = useRef(null);
  //   const hostedField = usePayPalHostedFields();

  //   const handleClick = () => {
  //     if (!hostedField?.cardFields) {
  //             const childErrorMessage = 'Unable to find any child components in the <PayPalHostedFieldsProvider />';

  //             action(ERROR)(childErrorMessage);
  //             throw new Error(childErrorMessage);
  //         }
  //     const isFormInvalid =
  //       Object.values(hostedField.cardFields.getState().fields).some(
  //         (field) => !field.isValid
  //       ) || !cardHolderName?.current?.value;

  //     if (isFormInvalid) {
  //       return alert(
  //         "The payment form is invalid"
  //       );
  //     }
  //     setPaying(true);
  //     hostedField.cardFields
  //       .submit({
  //         cardholderName: cardHolderName?.current?.value,
  //       })
  //       .then((data) => {
  //         // Your logic to capture the transaction
  //         fetch("url_to_capture_transaction", {
  //           method: "post",
  //         })
  //           .then((response) => response.json())
  //           .then((data) => {
  //             // Here use the captured info
  //           })
  //           .catch((err) => {
  //             // Here handle error
  //           })
  //           .finally(() => {
  //             setPaying(false);
  //           });
  //       })
  //       .catch((err) => {
  //         // Here handle error
  //         setPaying(false);
  //       });
  //   };

  //   return (
  //     <>
  //             <label title="This represents the full name as shown in the card">
  //         Card Holder Name
  //         <input
  //           id="card-holder"
  //           ref={cardHolderName}
  //           className="card-field"
  //           style={{ ...customStyle, outline: "none" }}
  //           type="text"
  //           placeholder="Full name"
  //         />
  //         </label>
  //       <button
  //         className={`btn${paying ? "" : " btn-primary"}`}
  //         style={{ float: "right" }}
  //         onClick={handleClick}
  //       >
  //         {paying ? <div className="spinner tiny" /> : "Pay"}
  //       </button>
  //     </>
  //   );
  // };

  return (
    <>
      <PayPalScriptProvider
        options={{ "client-id": process.env.NEXT_PUBLIC_CLIENT_ID }}
      >
        <DefaultSeo
          titleTemplate={`%s · American Guild of Organists, San Diego Chapter`}
          title={`American Guild of Organists, San Diego Chapter`}
          description={`The American Guild of Organists, San Diego Chapter seeks innovative ways to be a leader in promoting the organ.`}
          openGraph={{
            type: "website",
            locale: "en_US",
            images: [
              {
                url: "https://res.cloudinary.com/dhsn4mic4/image/upload/v1661451363/IMG_3211_dcb318550f.jpg",
                width: 4936,
                height: 4477,
                alt: "Spreckels Organ in Balboa Park, San Diego CA",
              },
              {
                url: "https://res.cloudinary.com/dhsn4mic4/image/upload/v1661451364/thumbnail_IMG_3211_dcb318550f.jpg",
                width: 172,
                height: 156,
                alt: "Spreckels Organ in Balboa Park, San Diego CA",
              },
            ],
            site_name: "American Guild of Organists, San Diego Chapter",
          }}
          additionalLinkTags={[
            {
              rel: "apple-touch-icon",
              href: "/apple-touch-icon.png",
              sizes: "180x180",
            },
            {
              rel: "icon",
              type: "image/png",
              href: "/favicon-32x32.png",
              sizes: "32x32",
            },
            {
              rel: "icon",
              type: "image/png",
              href: "/favicon-16x16.png",
              sizes: "16x16",
            },
            {
              rel: "manifest",
              href: "/site.webmanifest",
            },
          ]}
        />
        <Component {...pageProps} />
      </PayPalScriptProvider>
    </>
  );
}

export default MyApp;

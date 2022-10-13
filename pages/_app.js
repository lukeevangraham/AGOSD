import { DefaultSeo } from "next-seo";
import "../styles/globals.scss";
import "@fontsource/lato/100.css";
import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900.css";
import Script from "next/script";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
// import {
//   PayPalScriptProvider,
//   PayPalHostedFieldsProvider,
//   PayPalHostedField,
//   usePayPalHostedFields,
// } from "@paypal/react-paypal-js";
import { useState, useEffect, useRef } from "react";

function MyApp({ Component, pageProps }) {

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
        {/* <!-- Google tag (gtag.js) --> */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-YTZ1ZERNQR" />
        <Script id="google-analytics">{`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-YTZ1ZERNQR');`}</Script>
        <Component {...pageProps} />
      </PayPalScriptProvider>
    </>
  );
}

export default MyApp;

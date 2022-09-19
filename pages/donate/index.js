import { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/Layout/Layout";
import { getGlobalData } from "../../lib/api";
import DonateButton from "../../components/Resources/DonateButton/DonateButton";

import classes from "./index.module.scss";

export async function getStaticProps() {
  const [globalData] = await Promise.all([getGlobalData()]);
  return {
    props: { globalData },
    revalidate: 1,
  };
}

const Donate = ({ globalData }) => (
  <>
    <Head>
      <script
        src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js"
        charset="UTF-8"
      ></script>
    </Head>
    <Layout globalData={globalData}>
      <DonateButton />
      {/* {PayPal.Donation.Button({
       env: 'sandbox',
       hosted_button_id: 'YOUR_SANDBOX_HOSTED_BUTTON_ID',
       // business: 'YOUR_EMAIL_OR_PAYERID',
       image: {
           src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif',
           title: 'PayPal - The safer, easier way to pay online!',
           alt: 'Donate with PayPal button'
       },
       onComplete: function (params) {
           // Your onComplete handler
       },
   }).render('#paypal-donate-button-container');} */}

      {/* <div className={`${classes.Black} ${classes.Box}`}></div> */}
      <br />
      <br />
      <br />
      <div className={`${classes.Grey__dark} ${classes.Box}`}></div>
      <div className={`${classes.Grey} ${classes.Box}`}></div>
      <div className={`${classes.Grey__light} ${classes.Box}`}></div>
      <div className={`${classes.Grey__lighter} ${classes.Box}`}></div>
      <br />
      <div className={`${classes.Primary__darker} ${classes.Box}`}></div>
      <div className={`${classes.Primary__dark} ${classes.Box}`}></div>
      <div className={`${classes.Primary} ${classes.Box}`}></div>
      <div className={`${classes.Primary__light} ${classes.Box}`}></div>
      <div className={`${classes.Primary__lighter} ${classes.Box}`}></div>
      <br />
      <div className={`${classes.Secondary__darker} ${classes.Box}`}></div>
      <div className={`${classes.Secondary__dark} ${classes.Box}`}></div>
      <div className={`${classes.Secondary} ${classes.Box}`}></div>
      <div className={`${classes.Secondary__light} ${classes.Box}`}></div>
      <div className={`${classes.Secondary__lighter} ${classes.Box}`}></div>
    </Layout>
  </>
);

export default Donate;

import SEO from "../../components/SEO/SEO";
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Layout from "../../components/Layout/Layout";
import { getGlobalData } from "../../lib/api";
import { getDonateData } from "../../lib/donate";
import DonateButton from "../../components/Resources/DonateButton/DonateButton";
// import DonateForm from "../../components/Resources/DonateForm/DonateForm";

import classes from "./index.module.scss";

export async function getStaticProps() {
  const [globalData, donateData] = await Promise.all([
    getGlobalData(),
    getDonateData(),
  ]);
  return {
    props: { globalData, donateData },
    revalidate: 1,
  };
}

const Donate = ({ globalData, donateData }) => {
  return (
    <>
      <SEO metaData={donateData.SEO} />
      <Script
        src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js"
        charset="UTF-8"
      ></Script>

      <Layout globalData={globalData}>
        <div className="row u-padding-bottom-medium">
          <h1>Donate</h1>
          <section className={classes.Donate__FormAndFunds}>
            <div className={classes.Donate__FormAndFunds__Image}>
              <Image
                src={donateData.Image.data.attributes.url}
                layout="fill"
                objectFit="cover"
                alt={donateData.Image.data.attributes.alternativeText}
              />
            </div>

            <div>
              <DonateButton />
              <div
                dangerouslySetInnerHTML={{ __html: donateData.TopText }} className={classes.Donate__FormAndFunds__Main}
              ></div>
            </div>
          </section>
        </div>
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
      </Layout>
    </>
  );
};

export default Donate;

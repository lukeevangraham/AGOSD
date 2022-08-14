import { useEffect } from "react";
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

const Donate = ({ globalData }) => {
  return (
    <Layout globalData={globalData}>
      <div className="row">
        <div>Donate</div>
        <DonateButton />

        {/* <div className={`${classes.Black} ${classes.Box}`}></div> */}
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
      </div>
      <script
        src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js"
        charset="UTF-8"
      ></script>
    </Layout>
  );
};

export default Donate;

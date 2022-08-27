import Layout from "../../components/Layout/Layout";
import { getGlobalData } from "../../lib/api";

export async function getStaticProps() {
    const [globalData] = await Promise.all([
      getGlobalData(),
    ]);
    return {
      props: { globalData },
      revalidate: 1,
    };
  }

const Payment = ({ globalData }) => (
  <Layout globalData={globalData}>
    <div>Payment</div>
  </Layout>
);

export default Payment;
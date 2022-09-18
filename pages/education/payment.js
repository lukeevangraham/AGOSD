import Layout from "../../components/Layout/Layout";
import PaypalCheckoutButton from "../../components/PayPal/PaypalCheckoutButton";
import { getGlobalData } from "../../lib/api";

export async function getStaticProps() {
  const [globalData] = await Promise.all([getGlobalData()]);
  return {
    props: { globalData },
    revalidate: 1,
  };
}

const Payment = ({ globalData }) => {
  const product = {
    description: "Application Fee",
    price: 30,
  };

  return (
    <Layout globalData={globalData}>
      <div className="row">
        <h1>Scholarship Application Fee Payment</h1>
        <p>
          Thank you for your 2022 Scholarship Application. The $30 application
          fee may be paid below.
        </p>
        <br />
        <p>
          <i>
            {" "}
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfI2mR8fyz2QlnpffvEWTZi5KDo0EGefFeieEQ4x8bkYhVt1w/viewform">
              If you haven&apos;t completed the application yet, please start the
              process here.{" "}
            </a>
          </i>
        </p>
      </div>
      <div className="row">
        <PaypalCheckoutButton product={product} />
      </div>
    </Layout>
  );
};

export default Payment;

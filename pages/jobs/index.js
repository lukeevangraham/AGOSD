import Layout from "../../components/Layout/Layout";
import { getGlobalData } from "../../lib/api";

export async function getStaticProps() {
  const [globalData] = await Promise.all([getGlobalData()]);
  return {
    props: { globalData },
    revalidate: 1,
  };
}

const Jobs = ({ globalData }) => (
  <Layout globalData={globalData}>
    <div>Jobs</div>
  </Layout>
);

export default Jobs;

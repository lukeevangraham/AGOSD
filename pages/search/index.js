import Layout from "../../components/Layout/Layout";
import { getGlobalData } from "../../lib/api";

export async function getStaticProps() {
  const [globalData] = await Promise.all([getGlobalData()]);
  return {
    props: { globalData },
    revalidate: 1,
  };
}

const Search = ({ globalData }) => (
  <Layout globalData={globalData} search>
    <div>Search</div>
  </Layout>
);

export default Search;

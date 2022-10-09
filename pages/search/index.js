import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";
import { getGlobalData } from "../../lib/api";
import { search } from "../../lib/search";

export async function getStaticProps() {
  const [globalData] = await Promise.all([getGlobalData()]);
  return {
    props: { globalData },
    revalidate: 1,
  };
}

const Search = ({ globalData }) => {
  const router = useRouter();
  let [results, setResults] = useState("");

  const getRes = async (router) => {
    if (!router.isReady) return;
    const response = await search(router.query.keyword);
    setResults(response);
  };

  useEffect(() => {
    if (!router.isReady) return;
    getRes(router);
  }, [router.isReady, router.query, router]);

  return (
    <Layout globalData={globalData} search>
      <div className="row">
        <h1>Search: </h1>
        {console.log("[index] RES: ", results)}
      </div>
    </Layout>
  );
};

export default Search;

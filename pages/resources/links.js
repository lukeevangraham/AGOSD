// import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import { getGlobalData } from "../../lib/api";
import { getLinkData } from "../../lib/resources";

import classes from "./links.module.scss"

export async function getStaticProps() {
  const [globalData, linkData] = await Promise.all([
    getGlobalData(),
    getLinkData(),
  ]);
  return {
    props: { globalData, linkData },
    revalidate: 1,
  };
}

const Links = ({ globalData, linkData }) => (
  <Layout globalData={globalData}>
    <div className={classes.Links}>
      <div className="row">
        <div>Links</div>
        {linkData.map((link) => (
          <div className={classes.Links__Link} key={link.id}>
            <a target="_blank" href={link.url}>{link.text}</a>
            <div dangerouslySetInnerHTML={{ __html: link.Description }}></div>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default Links;

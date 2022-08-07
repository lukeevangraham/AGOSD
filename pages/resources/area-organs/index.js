import Layout from "../../../components/Layout/Layout";
import { getGlobalData } from "../../../lib/api";
import { getOrgansData } from "../../../lib/resources";
import OrganSiteCard from "../../../components/Resources/OrganSiteCard/OrganSiteCard";

import classes from "./index.module.scss";

export async function getStaticProps() {
  const [globalData, organsData] = await Promise.all([
    getGlobalData(),
    getOrgansData(),
  ]);
  return {
    props: { globalData, organsData },
    revalidate: 1,
  };
}

const AreaOrgans = ({ globalData, organsData }) => (
  <Layout globalData={globalData}>
    <div>Area Organs</div>
    <div className={classes.AreaOrgans}>
      <div className={classes.AreaOrgans__Organs}>
        {organsData.map((organ) => (
          <OrganSiteCard key={organ.id} organ={organ} />
        ))}
      </div>
    </div>
  </Layout>
);

export default AreaOrgans;

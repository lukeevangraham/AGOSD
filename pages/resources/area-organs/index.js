import SEO from "../../../components/SEO/SEO";
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
  <>
    <SEO
      metaData={{
        metaTitle: "Area Organs",
        metaDescription:
          "Information and photos about organs in and around San Diego, California",
      }}
    />
    <Layout globalData={globalData}>
      <div className="row">
        <h1>Area Organs</h1>
        <div className={classes.AreaOrgans}>
          <div className={classes.AreaOrgans__Organs}>
            {organsData.map((organ) => (
              <>
                {organ.attributes.area_organs.data.length ? (
                  <OrganSiteCard key={organ.id} organ={organ} />
                ) : null}
              </>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  </>
);

export default AreaOrgans;

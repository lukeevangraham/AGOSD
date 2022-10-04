import SEO from "../../components/SEO/SEO";
import Layout from "../../components/Layout/Layout";
import Image from "next/image";
import { getGlobalData } from "../../lib/api";
import { getSubOrganists, getResourcesData } from "../../lib/resources";
import SubOrganistCard from "../../components/Resources/SubOrganistCard/SubOrganistCard";

import classes from "./substitute-organists.module.scss";

export async function getStaticProps() {
  const [globalData, subOrganistsData, resourcesData] = await Promise.all([
    getGlobalData(),
    getSubOrganists(),
    getResourcesData(),
  ]);
  return {
    props: { globalData, subOrganistsData, resourcesData },
    revalidate: 1,
  };
}

const SubstituteOrganists = ({
  globalData,
  subOrganistsData,
  resourcesData,
}) => (
  <>
    <SEO
      metaData={{
        metaTitle: "Substitute Organists",
        metaDescription:
          "Looking for an organist to play in your church, wedding or special event?  Our organists are available throughout the San Diego region.  Some organists also sing, play piano and have liturgical experience.",
      }}
    />
    <Layout globalData={globalData}>
      <div className="row">
        <h1>Substitute Organists</h1>
        <div className={`${classes.SubOrganists} u-padding-bottom-medium`}>
          <div className={classes.SubOrganists__Image}>
            <Image
              src={resourcesData.SubOrganistsTopImage.data.attributes.url}
              alt={
                resourcesData.SubOrganistsTopImage.data.attributes
                  .alternativeText
              }
              layout="fill"
            />
          </div>

          <div>
            <div
              dangerouslySetInnerHTML={{
                __html: resourcesData.SubOrganistsTopText,
              }}
            />
          </div>
        </div>

        <div className={classes.Organists}>
          {subOrganistsData.map((organist) => (
            <SubOrganistCard organist={organist} key={organist.id} />
          ))}
        </div>
      </div>
    </Layout>
  </>
);

export default SubstituteOrganists;

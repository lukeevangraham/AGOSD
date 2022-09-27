import SEO from "../../components/SEO/SEO";
// import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import LinkCard from "../../components/Resources/LinkCard/LinkCard";
import { getGlobalData } from "../../lib/api";
import { getLinkData } from "../../lib/resources";

import Fade from "react-reveal";

import classes from "./links.module.scss";

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

const Links = ({ globalData, linkData }) => {
  const renderLinkList = (links) => (
    <div className={classes.Grid}>
      {links.map((link) => (
        <LinkCard link={link} key={link.id} />
      ))}
    </div>
  );

  return (
    <>
      <SEO
        metaData={{
          metaTitle: "Links",
          metaDescription:
            "Links to promote sister chapters, education, AGO National and partner organizations",
        }}
      />
      <Layout globalData={globalData}>
        <div className={classes.Links}>
          <div className="row">
            <h1>Links</h1>
            <div className={classes.Links__Group}>
              {/* <h2>AGO National</h2> */}
              {/* {renderLinkList(
              linkData.filter((link) => link.Category === "AGO National")
            )}
          </div>
          <div className={classes.Links__Group}>
            <h2>Sister Chapters</h2>
            {renderLinkList(
              linkData.filter((link) => link.Category === "Sister Chapters")
            )}
          </div>
          <div className={classes.Links__Group}>
            <h2>Education</h2>
            {renderLinkList(
              linkData.filter((link) => link.Category === "Education")
            )}
          </div>
          <div className={classes.Links__Group}>
            <h2>Partner Organizations</h2>
            {renderLinkList(
              linkData.filter(
                (link) => link.Category === "Partner Organizations"
              )
            )} */}
              <Fade bottom>
                <div className={classes.Grid}>
                  {linkData.map((link) => (
                    <LinkCard link={link} key={link.id} />
                  ))}
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Links;

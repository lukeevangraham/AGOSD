import { useState } from "react";
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
  const [filter, setFilter] = useState(null);

  const renderLinkList = filter
    ? linkData
        .filter((link) => link.Category === filter)
        .map((link) => <LinkCard link={link} key={link.id} />)
    : linkData.map((link) => <LinkCard link={link} key={link.id} />);

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
            {/* {console.log("HERE: ", linkData)} */}
            <div className={classes.Links__Controls}>
              <div className={classes.Links__Controls__Label}>Filter:</div>
              <div className={classes.Links__Controls__Buttons}>
                <div
                  className={classes.Links__Controls__Buttons__button}
                  onClick={() => setFilter(null)}
                >
                  Show All
                </div>
                <div
                  className={classes.Links__Controls__Buttons__button}
                  onClick={() => setFilter("AGO National")}
                >
                  AGO National
                </div>
                <div
                  className={classes.Links__Controls__Buttons__button}
                  onClick={() => setFilter("Partner Organizations")}
                >
                  Partner Organizations
                </div>
                <div
                  className={classes.Links__Controls__Buttons__button}
                  onClick={() => setFilter("Education")}
                >
                  Education
                </div>
                <div
                  className={classes.Links__Controls__Buttons__button}
                  onClick={() => setFilter("Sister Chapters")}
                >
                  Sister Chapters
                </div>
              </div>
            </div>
            <div className={classes.Links__Group}>
              <Fade bottom>
                <div className={classes.Grid}>{renderLinkList}</div>
              </Fade>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Links;

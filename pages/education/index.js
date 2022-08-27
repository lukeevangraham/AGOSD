import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import { getGlobalData } from "../../lib/api";
import { getEducationData } from "../../lib/education";

import classes from "./index.module.scss";

export async function getStaticProps() {
  const [globalData, educationData] = await Promise.all([
    getGlobalData(),
    getEducationData(),
  ]);
  return {
    props: { globalData, educationData },
    revalidate: 1,
  };
}

const Education = ({ globalData, educationData }) => {
  return (
    <Layout globalData={globalData}>
      <div className="row">
        <h1>Education</h1>
        {console.log("HERE: ", educationData)}
        <section className={classes.Welcome}>
          <div
            dangerouslySetInnerHTML={{ __html: educationData.topText }}
          ></div>
          <div className={classes.Welcome__Image}>
            <Image
              src={educationData.topImage.data.attributes.url}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>
      </div>
      <div className={classes.WhiteBg}>
        <div className="row u-padding-top-medium u-padding-bottom-medium">
          <section className={classes.Scholarships}>
            <h2>Scholarships</h2>
            <h3>AGO/Spreckels Scholarship Auditions</h3>
            <div className={classes.Scholarships__Main}>
              <div
                className={classes.Scholarships__Main__Body}
                dangerouslySetInnerHTML={{
                  __html: educationData.ScholarshipsContent,
                }}
              />
              <div className={classes.Scholarships__Main__CTA}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: educationData.ScholarshipsCTA,
                  }}
                />
                <div className={classes.Scholarships__Main__CTA__docs}>
                  {educationData.ScholarshipsDocuments.data.map((doc) => (
                    <a href={doc.attributes.url} target="_blank" key={doc.id} rel="noreferrer">
                      <div
                        className={classes.Scholarships__Main__CTA__docs_doc}
                      >
                        <svg>
                          <use xlinkHref="../images/sprite.svg#icon-file-pdf"></use>
                        </svg>
                        <div>{doc.attributes.name.split(".pdf")[0]}</div>
                      </div>
                    </a>
                  ))}
                  <a
                    href={educationData.ScholarshipsApplication}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className={classes.Scholarships__Main__CTA__docs_doc}>
                      <svg>
                        <use xlinkHref="../images/sprite.svg#icon-pen"></use>
                      </svg>
                      <div>Application</div>
                    </div>
                  </a>
                  <Link href="/education/payment">
                    <a>
                      <div
                        className={classes.Scholarships__Main__CTA__docs_doc}
                      >
                        <svg>
                          <use xlinkHref="../images/sprite.svg#icon-currency-dollar"></use>
                        </svg>
                        <div>Fee</div>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="row">
        <section>
          <h2>Certifications</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: educationData.CertificationsContent,
            }}
          />
        </section>
      </div>
    </Layout>
  );
};

export default Education;

import SEO from "../../components/SEO/SEO";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import { getGlobalData } from "../../lib/api";
import { getEducationData } from "../../lib/education";

import Fade from "react-reveal";

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
    <>
      <SEO metaData={educationData.SEO} />
      <Layout globalData={globalData}>
        <div className="row">
          <h1>Education</h1>
          <section className={classes.Welcome}>
            <div
              dangerouslySetInnerHTML={{ __html: educationData.topText }}
            ></div>
            <div className={classes.Welcome__Image}>
              <Image
                src={educationData.topImage.data.attributes.url}
                alt={educationData.topImage.data.attributes.alternativeText}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </section>
        </div>
        <div className={classes.WhiteBg}>
          <section>
            <div className="u-padding-bottom-medium u-padding-top-medium">
              <div className="row">
                <div className={classes.Scholarships}>
                  <h2>Scholarships</h2>
                  <div className="row">
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
                          {educationData.ScholarshipsDocuments.data.map(
                            (doc) => (
                              <a
                                href={doc.attributes.url}
                                target="_blank"
                                key={doc.id}
                                rel="noreferrer"
                              >
                                <div
                                  className={
                                    classes.Scholarships__Main__CTA__docs_doc
                                  }
                                >
                                  <svg>
                                    <use xlinkHref="../images/sprite.svg#icon-file-pdf"></use>
                                  </svg>
                                  <div>
                                    {doc.attributes.name.split(".pdf")[0]}
                                  </div>
                                </div>
                              </a>
                            )
                          )}
                          <a
                            href={educationData.ScholarshipsApplication}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <div
                              className={
                                classes.Scholarships__Main__CTA__docs_doc
                              }
                            >
                              <svg>
                                <use xlinkHref="../images/sprite.svg#icon-pen"></use>
                              </svg>
                              <div>Application</div>
                            </div>
                          </a>
                          <Link href="/education/payment">
                            <a>
                              <div
                                className={
                                  classes.Scholarships__Main__CTA__docs_doc
                                }
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
                  </div>
                  <div className={`row`}>
                    <div className={`${classes.Scholarships__Main} ${classes.Scholarships__PipeOrgan}`}>
                      <div
                        className={classes.Scholarships__Main__Body}
                        dangerouslySetInnerHTML={{
                          __html: educationData.PipeOrganScholarshipContent,
                        }}
                      />
                      <div className={classes.Scholarships__Main__CTA__docs}>
                        <a
                          href={educationData.PipeOrganEncounterLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div
                            className={
                              classes.Scholarships__Main__CTA__docs_doc
                            }
                          >
                            <svg>
                              <use xlinkHref="../images/sprite.svg#icon-link"></use>
                            </svg>
                            <div>Info</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="row">
          <section className={classes.Certifications}>
            <Fade left>
              <div className={classes.Certifications__Image}>
                <Image
                  src={educationData.CertificationImage.data.attributes.url}
                  alt={educationData.CertificationImage.data.attributes.alternativeText}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </Fade>
            <Fade bottom>
              <div>
                <h2>Certifications</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: educationData.CertificationsContent,
                  }}
                />
              </div>
            </Fade>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Education;

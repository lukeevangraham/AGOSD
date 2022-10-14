import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { fetchAPI, getHomeData, getGlobalData } from "../lib/api";
import { getOrgansData } from "../lib/resources";
import Layout from "../components/Layout/Layout";
import PhotoShowcase from "../components/UI/PhotoShowcase/PhotoShowcase";
import EventCard from "../components/Events/EventCard";
import SEO from "../components/SEO/SEO";

import classes from "./index.module.scss";

import Fade from "react-reveal";

export async function getStaticProps() {
  const [homeData, globalData, organsData] = await Promise.all([
    getHomeData(),
    getGlobalData(),
    getOrgansData(),
  ]);

  return {
    props: { homeData: homeData, globalData, organsData },
    revalidate: 1,
  };
}

export default function Home({ homeData, globalData, organsData }) {
  const [randomOrgan, setRandomOrgan] = useState();

  useEffect(() => {
    setRandomOrgan(organsData[Math.floor(Math.random() * organsData.length)]);
  }, [organsData]);

  return (
    <>
      {/* <div className={styles.container}> */}
      <SEO metaData={homeData.SEO} />

      <Layout globalData={globalData}>
        <main className={classes.main}>
          <div className={classes.main__Top}>
            <div
              className={classes.main__Top__Text}
              dangerouslySetInnerHTML={{ __html: homeData.TopText }}
            ></div>

            <div className={classes.main__Top__BG}></div>
            <div className={classes.main__Top__Image}>
              <Image
                src={homeData.TopImage.data.attributes.url}
                alt={homeData.TopImage.data.attributes.alternativeText}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>
          <section>
            <div className={classes.main__Intro}>
              <div
                className={classes.main__Intro__Text}
                dangerouslySetInnerHTML={{ __html: homeData.IntroText }}
              ></div>
              <Fade bottom cascade>
                <div className={classes.main__Intro__Collage}>
                  <div
                    className={`${classes.main__Intro__Collage__photo} ${classes.main__Intro__Collage__photo_p1}`}
                  >
                    <Image
                      src={homeData.IntroCollage.data[0].attributes.url}
                      alt={
                        homeData.IntroCollage.data[0].attributes.alternativeText
                      }
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div
                    className={`${classes.main__Intro__Collage__photo} ${classes.main__Intro__Collage__photo_p2}`}
                  >
                    <Image
                      src={homeData.IntroCollage.data[2].attributes.url}
                      alt={
                        homeData.IntroCollage.data[2].attributes.alternativeText
                      }
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div
                    className={`${classes.main__Intro__Collage__photo} ${classes.main__Intro__Collage__photo_p3}`}
                  >
                    <Image
                      src={homeData.IntroCollage.data[1].attributes.url}
                      alt={
                        homeData.IntroCollage.data[1].attributes.alternativeText
                      }
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              </Fade>
            </div>
          </section>

          <div className={classes.main__Events}>
            <div className="row">
              <h2 className="u-padding-bottom-medium">Featured Events</h2>

              <div className={classes.main__Events__Group}>
                {homeData.FeaturedEvents.data.map((event) => (
                  <EventCard event={event} key={event.id} />
                ))}
              </div>
            </div>
          </div>

          {/* <section> */}
          <PhotoShowcase data={homeData.PhotoShowcase.data} />
          {/* </section> */}

          {randomOrgan ? (
            <section>
              <div className="row">
                <div className={classes.main__FeaturedOrgan}>
                  <h2>Get to know an area organ</h2>
                  <Fade bottom>
                    <Link
                      href={`/resources/area-organs/${randomOrgan.attributes.slug}`}
                    >
                      <div className={classes.main__FeaturedOrgan__Card}>
                        <div
                          className={classes.main__FeaturedOrgan__Card__Info}
                        >
                          <h3>{randomOrgan.attributes.Name}</h3>
                          <div
                            className={
                              classes.main__FeaturedOrgan__Card__Info__Make
                            }
                          >
                            {
                              randomOrgan.attributes.area_organs.data[0]
                                .attributes.makeAndmodel
                            }
                          </div>
                        </div>

                        <div
                          className={classes.main__FeaturedOrgan__Card__Image}
                        >
                          <Image
                            src={
                              randomOrgan.attributes.area_organs.data[0]
                                .attributes.Images.data[0].attributes.url
                            }
                            alt={
                              randomOrgan.attributes.area_organs.data[0]
                                .attributes.Images.data[0].attributes
                                .alternativeText
                            }
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                      </div>
                    </Link>
                  </Fade>
                </div>
              </div>
            </section>
          ) : null}
        </main>

        {/* <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer> */}
      </Layout>
      {/* </div> */}
    </>
  );
}

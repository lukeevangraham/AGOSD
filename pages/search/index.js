import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import EventCard from "../../components/Events/EventCard";
import OrganSiteCard from "../../components/Resources/OrganSiteCard/OrganSiteCard";
import SubOrganistCard from "../../components/Resources/SubOrganistCard/SubOrganistCard";
import TeacherCard from "../../components/Resources/TeacherCard/TeacherCard";
import { getGlobalData } from "../../lib/api";
import { search } from "../../lib/search";

import classes from "./index.module.scss";

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
        <div className={classes.Search}>
          <h1>Search: </h1>
          {results.eventData && results.eventData.data.length > 0 ? (
            <section>
              <h3>Events: </h3>
              <div className={classes.Search__Events}>
                {results.eventData.data.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </section>
          ) : null}

          {results.jobsData && results.jobsData.data.length > 0 ? (
            <section>
              <h3>Jobs: </h3>
              <div className={classes.Search__Jobs}>
                {results.jobsData.data.map((job) => (
                  <div key={job.id}>
                    <Link href={`/jobs#${job.id}`}>
                      <a>
                        <h4>
                          Job Opportunity: {job.attributes.Position}
                          {" - "}
                          {job.attributes.Employer}
                        </h4>
                      </a>
                    </Link>
                    <div>
                      {job.attributes.Description.replace(
                        /<\/?[^>]+(>|$)/g,
                        ""
                      ).replace(/^(.{160}[^\s]*).*/, "$1")}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {results.organsData && results.organsData.data.length > 0 ? (
            <section>
              <h3>Area Organs: </h3>
              <div className={classes.Search__AreaOrgans}>
                {results.organsData.data.map((site) => (
                  <OrganSiteCard organ={site} key={site.id} />
                ))}
              </div>
            </section>
          ) : null}

          {results.subsData && results.subsData.data.length > 0 ? (
            <section>
              <h3>Substitute Organists: </h3>
              <div className={classes.Search__Subs}>
                {results.subsData.data.map((sub) => (
                  <SubOrganistCard key={sub.id} organist={sub} />
                ))}
              </div>
            </section>
          ) : null}

          {results.teachersData && results.teachersData.data.length > 0 ? (
            <section>
              <h3>Organ Teachers: </h3>
              <div className={classes.Search__OrganTeachers}>
                {results.teachersData.data.map((teacher) => (
                  <TeacherCard key={teacher.id} teacher={teacher} />
                ))}
              </div>
            </section>
          ) : null}
          {results.eventData &&
          results.eventData.data.length === 0 &&
          results.jobsData &&
          results.jobsData.data.length === 0 &&
          results.organsData &&
          results.organsData.data.length === 0 &&
          results.subsData &&
          results.subsData.data.length === 0 &&
          results.teachersData &&
          results.teachersData.data.length === 0 ? (
            <section>
              No results found. That stinks. Perhaps you&apos;d like to try another
              search?
            </section>
          ) : null}
        </div>
      </div>
    </Layout>
  );
};

export default Search;

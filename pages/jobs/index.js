import Image from "next/image";
import Layout from "../../components/Layout/Layout";
import { getGlobalData } from "../../lib/api";
import { getJobsData } from "../../lib/jobs";

import classes from "./index.module.scss";

export async function getStaticProps() {
  const [globalData, jobsData] = await Promise.all([
    getGlobalData(),
    getJobsData(),
  ]);
  return {
    props: {
      globalData,
      jobsData: jobsData.jobsData,
      placementData: jobsData.placementData,
    },
    revalidate: 1,
  };
}

const Jobs = ({ globalData, jobsData, placementData }) => (
  <Layout globalData={globalData}>
    <div className="row">
      <div className={classes.Jobs}>
        <h1>Jobs</h1>
        <div className={classes.Jobs__Rates}>
          <div>Advertising Rates</div>
          <div>$35 per listing for up to six months.</div>
          <div>
            Contact{" "}
            {`${placementData.firstName} ${placementData.lastName}, ${placementData.Position} `}{" "}
            <br /> {`by email at `}{" "}
            <a href={`mailto:${placementData.email}`}>{placementData.email}</a>.
          </div>
        </div>
        <div className={classes.Jobs__Group}>
          {jobsData.map((job) => (
            <div className={classes.Jobs__Group__Job} key={job.id}>
              <div className={classes.Jobs__Group__Job__Image}>
                {job.attributes.Images.data ? (
                  <Image
                    src={job.attributes.Images.data[0].attributes.url}
                    layout="fill"
                    objectFit="cover"
                  />
                ) : (
                  <svg>
                    <use xlinkHref="../images/sprite.svg#icon-pipes"></use>
                  </svg>
                )}
              </div>
              <div className={classes.Jobs__Group__Job__Info}>
                <h2>{job.attributes.Position}</h2>
                <div className={classes.Jobs__Group__Job__Info__Employer}>
                  {job.attributes.Employer}
                </div>
                <div>{job.attributes.EmployerAddress.addressLineOne}</div>
                <div>{job.attributes.EmployerAddress.addressLineTwo}</div>
                <div>
                  {`
          ${job.attributes.EmployerAddress.City}, ${job.attributes.EmployerAddress.State} ${job.attributes.EmployerAddress.Zip}`}
                </div>
                <a href={job.attributes.EmployerWebsite}>
                  {job.attributes.EmployerWebsite}
                </a>
                <div
                  dangerouslySetInnerHTML={{
                    __html: job.attributes.Description,
                  }}
                  className={classes.Jobs__Group__Job__Info__Description}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Layout>
);

export default Jobs;

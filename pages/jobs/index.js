import Layout from "../../components/Layout/Layout";
import { getGlobalData } from "../../lib/api";
import { getJobsData } from "../../lib/jobs";

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
      <div>Jobs</div>
      <div>
        <div>Advertising Rates</div>
        <div>$35 per listing for up to six months.</div>
        <div>
          Contact{" "}
          {`${placementData.firstName} ${placementData.lastName}, ${placementData.Position} by email at ${placementData.email}`}
        </div>
      </div>
      {jobsData.map((job) => (
        <div key={job.id}>
          <h2>{job.attributes.Position}</h2>
          <div>{job.attributes.Employer}</div>
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
            dangerouslySetInnerHTML={{ __html: job.attributes.Description }}
          ></div>
        </div>
      ))}
    </div>
  </Layout>
);

export default Jobs;

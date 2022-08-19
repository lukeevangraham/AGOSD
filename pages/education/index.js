import Layout from "../../components/Layout/Layout";
import { getGlobalData } from "../../lib/api";
import { getEducationData } from "../../lib/education";

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

const Education = ({ globalData, educationData }) => (
  <Layout globalData={globalData}>
    <div className="row">
      <h1>Education</h1>
      <section>
        <h2>Scholarships</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: educationData.ScholarshipsContent,
          }}
        ></div>
      </section>
      <section>
        <h2>Certifications</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: educationData.CertificationsContent,
          }}
        ></div>
      </section>
    </div>
  </Layout>
);

export default Education;

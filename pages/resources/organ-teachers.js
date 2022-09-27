import SEO from "../../components/SEO/SEO";
import Layout from "../../components/Layout/Layout";
import TeacherCard from "../../components/Resources/TeacherCard/TeacherCard";
import { getGlobalData } from "../../lib/api";
import { getOrganTeachers } from "../../lib/resources";

import classes from "./organ-teachers.module.scss";

export async function getStaticProps() {
  const [globalData, teachersData] = await Promise.all([
    getGlobalData(),
    getOrganTeachers(),
  ]);
  return {
    props: { globalData, teachersData },
    revalidate: 1,
  };
}

const OrganTeachers = ({ globalData, teachersData }) => (
  <>
    <SEO
      metaData={{
        metaTitle: "Organ Teachers",
        metaDescription:
          "Organ teachers who teach in the San Diego California region.",
      }}
    />
    <Layout globalData={globalData}>
      <div className="row">
        <h1>Organ Teachers</h1>
        <div className={classes.Teachers}>
          {teachersData.map((teacher) => (
            <TeacherCard teacher={teacher} key={teacher.id} />
          ))}
        </div>
      </div>
    </Layout>
  </>
);

export default OrganTeachers;

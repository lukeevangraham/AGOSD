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
  <Layout globalData={globalData}>
    <div className="row">
      <h1>Organ Teachers</h1>
      {console.log("TD: ", teachersData)}
      <div className={classes.Teachers}>
        {teachersData.map((teacher) => (
          <TeacherCard teacher={teacher} />
        ))}
      </div>
    </div>
  </Layout>
);

export default OrganTeachers;

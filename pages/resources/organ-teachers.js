import Layout from "../../components/Layout/Layout";
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
      <div>Organ Teachers</div>
      {console.log("TD: ", teachersData)}
      <div className={classes.Teachers}>
        {teachersData.map((teacher) => (
          <div key={teacher.id} className={classes.Teachers__Teacher}>
            <div className={classes.Teachers__Teacher_name}>
              {teacher.attributes.firstName} {teacher.attributes.lastName}
            </div>
            <div>{teacher.attributes.Phone}</div>
            <a href={`mailto: ${teacher.attributes.Email}`}>
              {teacher.attributes.Email}
            </a>
            {teacher.attributes.Website ? <div><a href={teacher.attributes.Website}>Website</a></div> : null}
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default OrganTeachers;

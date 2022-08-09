import Layout from "../../components/Layout/Layout";
import { getGlobalData } from "../../lib/api";
import { getSubOrganists } from "../../lib/resources";

import classes from "./substitute-organists.module.scss";

export async function getStaticProps() {
  const [globalData, subOrganistsData] = await Promise.all([
    getGlobalData(),
    getSubOrganists(),
  ]);
  return {
    props: { globalData, subOrganistsData },
    revalidate: 1,
  };
}

const SubstituteOrganists = ({ globalData, subOrganistsData }) => (
  <Layout globalData={globalData}>
    <div className="row">
      <div>Substitute Organists</div>

      <div>
        <p>
          <strong>
            Those whose information states &quot;only Weddings/Funerals&quot; are not
            available on Sundays
          </strong>
        </p>

        <p>
          Substitutes listed are members of the local organ guild. The ones who
          hold AGO certificates have passed requirements of the national
          American Guild of Organists for various levels of service playing and
          choral conducting. However, the San Diego AGO is not an endorsement
          agency for service provided by the persons listed here. To learn
          proficiency of substitutes, feel free to ask them for references.
        </p>
      </div>

      <div className={classes.Organists}>
        {subOrganistsData.map((organist) => (
          <div key={organist.id} className={classes.Organists__Organist}>
            <div className={classes.Organists__Organist_name}>{`${
              organist.attributes.Prefix ? organist.attributes.Prefix : ""
            } ${organist.attributes.firstName} ${
              organist.attributes.lastName
            }`}</div>
            <div>{organist.attributes.Phone}</div>
            <a href={`mailto: ${organist.attributes.Email}`}>
              {organist.attributes.Email}
            </a>

            <div className={classes.Organists__Organist_availability}>
              Available as:
            </div>
            <ul>
              {organist.attributes.liturgicalExperience ? (
                <li>Liturgical Experience</li>
              ) : null}
              {organist.attributes.AGOCertifiedOrganist ? (
                <li>AGO Certified Organist</li>
              ) : null}
              {organist.attributes.Pianist ? <li>Pianist</li> : null}
              {organist.attributes.Vocalist ? <li>Vocalist</li> : null}
              {organist.attributes.onlyWeddingsAndFunerals ? (
                <li>Only weddings and funerals</li>
              ) : null}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default SubstituteOrganists;

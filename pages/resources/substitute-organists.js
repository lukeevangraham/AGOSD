import Layout from "../../components/Layout/Layout";
import Image from "next/image";
import { getGlobalData } from "../../lib/api";
import { getSubOrganists } from "../../lib/resources";
import SubOrganistCard from "../../components/Resources/SubOrganistCard/SubOrganistCard";

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
      <h1>Substitute Organists</h1>
      <div className={`${classes.SubOrganists} u-padding-bottom-medium`}>
        <div className={classes.SubOrganists__Image}>
          <Image
            src="https://res.cloudinary.com/dhsn4mic4/image/upload/v1661720524/josh_applegate_vvehw_J_Ba_YFU_unsplash_f3032b6eb6.jpg?updated_at=2022-08-28T21:02:06.061Z"
            layout="fill"
          />
        </div>

        <div>
          <p>
            <strong>
              Those whose information states &quot;only Weddings/Funerals&quot;
              are not available on Sundays
            </strong>
          </p>

          <p>
            Substitutes listed are members of the local organ guild. The ones
            who hold AGO certificates have passed requirements of the national
            American Guild of Organists for various levels of service playing
            and choral conducting. However, the San Diego AGO is not an
            endorsement agency for service provided by the persons listed here.
            To learn proficiency of substitutes, feel free to ask them for
            references.
          </p>
        </div>
      </div>

      <div className={classes.Organists}>
        {subOrganistsData.map((organist) => (
          <SubOrganistCard organist={organist} key={organist.id} />
        ))}
      </div>
    </div>
  </Layout>
);

export default SubstituteOrganists;

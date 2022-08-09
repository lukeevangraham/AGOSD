import Image from "next/image";
import { getGlobalData } from "../../../lib/api";
import { getAllOrganSiteSlugs, getOrganData } from "../../../lib/resources";
import Layout from "../../../components/Layout/Layout";

import classes from "./slug.module.scss";

export async function getStaticPaths() {
  const paths = await getAllOrganSiteSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const [globalData, organData] = await Promise.all([
    getGlobalData(),
    getOrganData(params.slug),
  ]);

  return {
    props: { globalData, organData },
    revalidate: 1,
  };
}

const Organ = ({ globalData, organData }) => (
  <Layout globalData={globalData}>
    <div className="row">
      <div className={classes.Organ}>
        <div className={classes.Organ__Site}>
          <div>{organData.Name}</div>
          {organData.Address.addressLineOne ? (
            <div>{organData.Address.addressLineOne}</div>
          ) : null}
          {organData.Address.addressLineTwo ? (
            <div>{organData.Address.addressLineTwo}</div>
          ) : null}
          <div>
            {organData.Address.City ? organData.Address.City : null}
            {", "}
            {organData.Address.State ? organData.Address.State : null}{" "}
            {organData.Address.Zip ? organData.Address.Zip : null}
          </div>
          {organData.Phone ? <div>{organData.Phone}</div> : null}
          {organData.Website ? (
            <a href={organData.Website}>{organData.Website}</a>
          ) : null}
        </div>
        {organData.area_organs.data.map((organ) => (
          <div key={organ.id} className={classes.Organ__InstrumentDetail}>
            <div>
              {organ.attributes.Location ? organ.attributes.Location : null}
            </div>
            <div>{organ.attributes.makeAndmodel}</div>
            <a
              href={organ.attributes.Specs.data.attributes.url}
              target="_blank"
            >
              Organ Specs
            </a>
            <div className={classes.Organ__InstrumentDetail_topImage}>
              <Image
                src={organ.attributes.Images.data[0].attributes.url}
                alt={organ.attributes.Images.data[0].attributes.alternativeText}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: organ.attributes.Description }}
            />
            {organ.attributes.Images.data.length > 1
              ? organ.attributes.Images.data
                  .filter((organ, index) => index > 0)
                  .map((image) => (
                    <div
                      key={image.id}
                      className={classes.Organ__InstrumentDetail_image}
                    >
                      <Image
                        src={image.attributes.url}
                        alt={image.attributes.alternativeText}
                        layout="fill"
                        objectFit="contain"
                        objectPosition={"left"}
                      />
                    </div>
                  ))
              : null}
          </div>
        ))}
      </div>
    </div>
  </Layout>
);

export default Organ;

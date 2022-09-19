import Image from "next/image";
import { getGlobalData } from "../../../lib/api";
import { getAllOrganSiteSlugs, getOrganData } from "../../../lib/resources";
import Layout from "../../../components/Layout/Layout";
import OrganHeader from "../../../components/Resources/OrganHeader/OrganHeader";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PhotoShowcase from "../../../components/UI/PhotoShowcase/PhotoShowcase";

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
    <div className={classes.Organ}>
      <div className="row">
        <OrganHeader organData={organData} />
      </div>
      {organData.area_organs.data.map((organ) => (
        <div key={organ.id} style={{ marginTop: "7.5rem" }}>
          <div className="row">
            <div key={organ.id} className={classes.Organ__InstrumentDetail}>
              <h2 className={classes.Organ__InstrumentDetail__Location}>
                {organ.attributes.Location ? organ.attributes.Location : null}
              </h2>
              <div
                className={classes.Organ__InstrumentDetail__Description}
                dangerouslySetInnerHTML={{
                  __html: organ.attributes.Description,
                }}
              />
              <div className={classes.Organ__InstrumentDetail__FinerPoints}>
                <div
                  className={
                    classes.Organ__InstrumentDetail__FinerPoints__MakeAndModel
                  }
                >
                  <svg>
                    <use xlinkHref="../../images/sprite.svg#icon-cogs"></use>
                  </svg>
                  <div>{organ.attributes.makeAndmodel}</div>
                </div>
                <div
                  className={
                    classes.Organ__InstrumentDetail__FinerPoints__Specs
                  }
                >
                  <a
                    href={organ.attributes.Specs.data.attributes.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg>
                      <use xlinkHref="../../images/sprite.svg#icon-file-pdf"></use>
                    </svg>
                    Organ Specs
                  </a>
                </div>
              </div>
              {/* <div className={classes.Organ__InstrumentDetail_topImage}>
                <Image
                  src={organ.attributes.Images.data[0].attributes.url}
                  alt={
                    organ.attributes.Images.data[0].attributes.alternativeText
                  }
                  layout="fill"
                  objectFit="contain"
                />
              </div> */}
            </div>
          </div>

          <PhotoShowcase data={organ.attributes.Images.data} />

          {/* <div className={classes.Organ__Images}>
              {organ.attributes.Images.data.length > 1
                ? organ.attributes.Images.data.map((image) => (
                    <div
                      key={image.id}
                      className={classes.Organ__Images__Image}
                    >
                      <Image
                        src={image.attributes.url}
                        alt={image.attributes.alternativeText}
                        layout="fill"
                        objectFit="contain"
                        objectPosition={"center"}
                      />
                    </div>
                  ))
                : null}
            </div> */}
        </div>
      ))}
    </div>
    {/* </div> */}
  </Layout>
);

export default Organ;

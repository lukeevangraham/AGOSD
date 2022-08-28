import Image from "next/image";
import Layout from "../../components/Layout/Layout";
import { getGlobalData } from "../../lib/api";
import { getRegistrationData } from "../../lib/registration";

import classes from "./index.module.scss";

export async function getStaticProps() {
  const [globalData, registrationData] = await Promise.all([
    getGlobalData(),
    getRegistrationData(),
  ]);
  return {
    props: { globalData, registrationData },
    revalidate: 1,
  };
}

const Registration = ({ globalData, registrationData }) => (
  <Layout globalData={globalData}>
    <div className="row">
      {console.log("RD: ", registrationData)}
      <h1>Registration</h1>
      <div className={classes.Registration}>
        <div className={classes.Registration__Image}>
          <Image
            src={registrationData.Image.data.attributes.url}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={classes.Registration__Body}>
          <div
            dangerouslySetInnerHTML={{ __html: registrationData.Body }}
          ></div>

          <div className={classes.Registration__Body__Button}>
            <a
              href={registrationData.RegistrationLink}
              target="_blank"
              rel="noreferrer"
            >
              <div className={classes.Registration__Body__Button_doc}>
                <svg>
                  <use xlinkHref="../images/sprite.svg#icon-pen"></use>
                </svg>
                <div>Application</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Registration;

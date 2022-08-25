import Image from "next/image";
import DateBox from "../../components/Events/DateBox/DateBox";
import Layout from "../../components/Layout/Layout";
import { getGlobalData } from "../../lib/api";
import { getAllEventSlugs, getEventData } from "../../lib/events";

import classes from "./Slug.module.scss";

export async function getStaticPaths() {
  const paths = await getAllEventSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const [globalData, eventData] = await Promise.all([
    getGlobalData(),
    getEventData(params.slug),
  ]);

  return {
    props: { globalData, eventData },
    revalidate: 1,
  };
}

const Event = ({ globalData, eventData }) => (
  <Layout globalData={globalData}>
    <div className="row">
      <div className={classes.Event}>
        <div className={classes.Container}>
          <div className={classes.Event__Image}>
            <Image
              src={eventData.Image.data.attributes.url}
              layout="fill"
              objectFit="contain"
              objectPosition="left"
            />
          </div>
          <div className={classes.Event__BigInfo}>
            <DateBox date={eventData.dateAndTime} />
            <div>
              <h2>{eventData.Name}</h2>
              <div className={classes.Event__BigInfo__time}>
                <svg>
                  <use xlinkHref="../images/sprite.svg#icon-clock"></use>
                </svg>
                <div>
                  {new Date(eventData.dateAndTime).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            </div>
            {console.log("ED: ", eventData)}
          </div>
          <div className={classes.Event__Location}>
            <div>{eventData.Location}</div>
            <div>{eventData.Address.addressLineOne}</div>
            <div>{eventData.Address.addressLineTwo}</div>
            <div>{`${eventData.Address.City} ${eventData.Address.State}, ${eventData.Address.Zip}`}</div>
          </div>

          <div
            dangerouslySetInnerHTML={{ __html: eventData.Description }}
          ></div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Event;

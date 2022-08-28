import { useState } from "react";
import { getGlobalData } from "../../lib/api";
import { getEvents } from "../../lib/events";
import Layout from "../../components/Layout/Layout";
import EventCard from "../../components/Events/EventCard";

import Fade from "react-reveal";

import classes from "./index.module.scss";

export async function getStaticProps() {
  const [globalData, eventsData] = await Promise.all([
    getGlobalData(),
    getEvents(),
  ]);
  return {
    props: { globalData, eventsData },
    revalidate: 1,
  };
}

const Events = ({ globalData, eventsData }) => {
  const [filter, setFilter] = useState(null);

  let renderEvents = filter
    ? eventsData
        .filter((event) => event.attributes.EventType[filter])
        .map((event) => <EventCard key={event.id} event={event} />)
    : eventsData.map((event) => <EventCard key={event.id} event={event} />);

  return (
    <Layout globalData={globalData}>
      <div className={classes.Events}>
        <div className="row">
          <h1>Events</h1>
          <div className={`${classes.Events__Controls}`}>
            <div className={classes.Events__Controls__Label}>Filter:</div>
            <div className={classes.Events__Controls__Buttons}>
              <div
                className={`${classes.Events__Controls__Buttons_button}`}
                onClick={() => setFilter(null)}
              >
                Show All
              </div>
              <div
                className={`${classes.Events__Controls__Buttons_button} ${classes.Events__Controls__Buttons_button_chapter}`}
                onClick={() => setFilter("AGOChapter")}
              >
                AGO Chapter Events
              </div>
              <div
                className={`${classes.Events__Controls__Buttons_button}  ${classes.Events__Controls__Buttons_button_community}`}
                onClick={() => setFilter("CommunitySponsored")}
              >
                Community-Sposored Events
              </div>
              <div
                className={`${classes.Events__Controls__Buttons_button} ${classes.Events__Controls__Buttons_button_student}`}
                onClick={() => setFilter("Student")}
              >
                Student Events
              </div>
            </div>
          </div>
          <Fade bottom cascade duration={1500}>
            <div className={classes.Events__Group}>{renderEvents}</div>
          </Fade>
        </div>
      </div>
    </Layout>
  );
};

export default Events;

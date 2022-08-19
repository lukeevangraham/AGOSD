import { useState } from "react";
import { getGlobalData } from "../../lib/api";
import { getEvents } from "../../lib/events";
import Layout from "../../components/Layout/Layout";
import EventCard from "../../components/Events/EventCard";

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
        .filter((event) => event.attributes.Type === filter)
        .map((event) => <EventCard key={event.id} event={event} />)
    : eventsData.map((event) => <EventCard key={event.id} event={event} />);

  return (
    <Layout globalData={globalData}>
      <div className={classes.Events}>
        <div className="row">
          <h1>Events</h1>
          <div
            className={`${classes.Events__Controls} u-padding-bottom-medium`}
          >
            <div>Filter:</div>
            <div
              className={classes.Events__Controls_button}
              onClick={() => setFilter(null)}
            >
              Show All
            </div>
            <div
              className={classes.Events__Controls_button}
              onClick={() => setFilter("AGO Chapter Event")}
            >
              AGO Chapter Events
            </div>
            <div
              className={classes.Events__Controls_button}
              onClick={() => setFilter("Community-Sponsored Event")}
            >
              Community-Sposored Events
            </div>
            <div
              className={classes.Events__Controls_button}
              onClick={() => setFilter("Student Event")}
            >
              Student Events
            </div>
          </div>
          <div className={classes.Events__Group}>{renderEvents}</div>
        </div>
      </div>
    </Layout>
  );
};

export default Events;

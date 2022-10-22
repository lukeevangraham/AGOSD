import qs from "qs";

import { fetchAPI } from "./api";

export const getEvents = async () => {
  const query = qs.stringify({
    filters: {
      endDate: {
        $gte: new Date(),
      },
    },
    populate: { Image: { populate: "*" }, EventType: { populate: "*" } },
    sort: ["dateAndTime"],
  });

  const eventsData = await fetchAPI(`/events?${query}`);

  keepEventsCurrent(eventsData.data);

  eventsData.data.sort(compareAndSortDates)

  return eventsData.data;
};

export async function getAllEventSlugs() {
  const res = await fetchAPI(`/events`);

  return res.data.map((event) => {
    return {
      params: {
        slug: event.attributes.Slug,
      },
    };
  });
}

export const getEventData = async (slug) => {
  const eventQuery = qs.stringify({
    filters: {
      Slug: {
        $eq: slug,
      },
    },
    populate: "*",
  });

  const eventData = await fetchAPI(`/events?${eventQuery}`);

  if (eventData == null || eventData.length === 0) {
    return null;
  }

  return eventData.data[0].attributes;
};

export const keepEventsCurrent = (eventsData) => {
  // ITERATING OVER RECURRING EVENTS TO KEEP THEM CURRENT
  eventsData.forEach((event) => {
    console.log("E: ", event)
    if (event.attributes.RepeatsEveryXDays > 0) {
      if (new Date(event.attributes.dateAndTime) < new Date()) {
        // console.log("dateAndTime: ", event.attributes.dateAndTime);
        // console.log("dateAndTimeJS: ", new Date(event.attributes.dateAndTime));

        let start = new Date(event.attributes.dateAndTime);
        // console.log("[event.attributessFIRST]: ", start)
        // console.log("[event.attributessSECOND]: ", start.toISOString())

        // MAKING SURE THE END DATE HONORS THE TIMEZONE
        let end = new Date(new Date().toISOString());

        // console.log("END: ", end);

        while (start < end) {
          start.setDate(start.getDate() + event.attributes.RepeatsEveryXDays);
        }

        // start.setTime(start.getTime() + (-1 * 60 * 60 * 1000));

        event.attributes.dateAndTime = start.toISOString();
        // console.log("[eventsTHIRD]: ", start.toISOString());
        // console.log("NEW Start date: ", event.startDate);
      }
    }
  });
  return eventsData;
};

const compareAndSortDates = (a, b) => {
  // SORT EVENTS BY DATE FIELD

  const dateA = new Date(a.attributes.dateAndTime);
  const dateB = new Date(b.attributes.dateAndTime);

  let comparison = 0;
  if (dateA > dateB) {
    comparison = 1;
  } else if (dateA < dateB) {
    comparison = -1;
  }
  return comparison;
};

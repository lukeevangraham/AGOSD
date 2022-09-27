import qs from "qs";

import { fetchAPI } from "./api";

export const getEvents = async () => {
  const query = qs.stringify({
    populate: { Image: { populate: "*" }, EventType: { populate: "*" } },
    sort: ['dateAndTime']
  });

  const eventsData = await fetchAPI(`/events?${query}`);

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

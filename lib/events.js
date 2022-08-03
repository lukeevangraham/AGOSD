import qs from "qs"

import { fetchAPI } from "./api";

export const getEvents = async () => {
    const query = qs.stringify({
      populate: { Image: { populate: "*" } },
    });
  
    const eventsData = await fetchAPI(`/events?${query}`);
  
    return eventsData.data;
  };
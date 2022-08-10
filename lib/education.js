import qs from "qs";

import { fetchAPI } from "./api";

export const getEducationData = async () => {
  const query = qs.stringify({
    populate: "*",
  });

  const educationData = await fetchAPI(`/education?${query}`);

  return educationData.data.attributes;
};

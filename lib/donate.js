import qs from "qs";

import { fetchAPI } from "./api";

export const getDonateData = async () => {
  const query = qs.stringify({
    populate: { SEO: { populate: "*" }, Image: { populate: "*" } },
  });

  const donateData = await fetchAPI(`/donate?${query}`);

  return donateData.data.attributes;
};

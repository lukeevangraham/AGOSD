import qs from "qs";

import { fetchAPI } from "./api";

export const getLinkData = async () => {
  const linkQuery = qs.stringify({
    populate: { Links: { populate: "*" } },
  });

  const linkData = await fetchAPI(`/resource?${linkQuery}`);

  return linkData.data.attributes.Links;
};

export const getOrgansData = async () => {
  const organQuery = qs.stringify({
    populate: { area_organs: { populate: ["Images"] } },
  });

  const organsData = await fetchAPI(`/organ-sites?${organQuery}`);

  return organsData.data;
};

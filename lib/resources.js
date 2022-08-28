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

export const getOrganData = async (slug) => {
  const organQuery = qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: { area_organs: { populate: ["Images", "Specs"] }, Address: "*" },
  });

  const organData = await fetchAPI(`/organ-sites?${organQuery}`);

  // make sure we found something, otherwise return null
  if (organData == null || organData.length === 0) {
    return null;
  }

  // Return the first item since there should only be one result per slug
  return organData.data[0].attributes;
};

export async function getAllOrganSiteSlugs() {
  const response = await fetchAPI(`/organ-sites`);

  return response.data.map((organSite) => {
    return {
      params: {
        slug: organSite.attributes.slug,
      },
    };
  });
}

export const getOrganTeachers = async () => {

  const teachersData = await fetchAPI(`/organ-teachers?sort=lastName&populate=*`);

  return teachersData.data;
}

export const getSubOrganists = async () => {

  const subOrganistsData = await fetchAPI(`/sub-organists?sort=lastName`);

  return subOrganistsData.data;
}

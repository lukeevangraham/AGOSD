import qs from "qs";

export const getStrapiURL = (path = "") => {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL ||
    "https://agosdadmin.grahamwebworks.com/api"
  }${path}`;
};

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

export const getHomeData = async () => {
  const homeQuery = qs.stringify({
    populate: { testPhoto: "*" },
  });

  const homeData = await fetchAPI(`/home?${homeQuery}`);

  return homeData.data.attributes;
};

export const getGlobalData = async () => {
  const globalQuery = qs.stringify({
    populate: { Navbar: { populate: ["logo", "links", "button"] } },
  });

  const globalData = await fetchAPI(`/global?${globalQuery}`);

  return globalData.data.attributes;
};

import qs from "qs";

import { fetchAPI } from "./api";

export const getBoardData = async () => {
  const boardQuery = qs.stringify({
    populate: { members: { populate: "*" } },
  });

  const boardData = await fetchAPI(`/about?${boardQuery}`);

  return boardData.data.attributes.members;
};

export const getAboutData = async () => {
  const query = qs.stringify({
    populate: "*",
  });

  const aboutData = await fetchAPI(`/about-us?${query}`);

  return aboutData.data.attributes;
};



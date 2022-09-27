import qs from "qs";

import { fetchAPI } from "./api";

export const getEducationData = async () => {
  const query = qs.stringify({
    populate: {
      SEO: { populate: "*" },
      topImage: { populate: "*" },
      ScholarshipsDocuments: { populate: "*" },
      CertificationImage: { populate: "*" },
    },
  });

  const educationData = await fetchAPI(`/education?${query}`);

  return educationData.data.attributes;
};

import qs from "qs";

import { fetchAPI } from "./api";

export const getRegistrationData = async () => {
  const query = qs.stringify({
    populate: "*",
  });

  const registrationData = await fetchAPI(`/registration?${query}`);

  return registrationData.data.attributes;
};

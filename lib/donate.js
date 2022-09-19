import qs from "qs";

import { fetchAPI } from "./api";

export const getDonateData = async () => {
  const query = qs.stringify({
    populate: "*"
  })

  const donateData = await fetchAPI(`/donate?${query}`)

  return donateData.data.attributes
}
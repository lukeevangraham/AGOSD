import qs from "qs";

import { fetchAPI } from "./api";

// PREPPING TO FILTER OUT RESULTS THAT EXPIRED
// THE LISTING EXPIRES SIX MONTHS AFTER A DATE SPECIFIED WITH THE LISTING
export const calculateSixMonthsBeforeToday = () => {
  const now = new Date();
  const sixMonthsBeforeToday = new Date(
    new Date(now.setMonth(now.getMonth() - 6))
  )
    .toISOString()
    .slice(0, 10);

  return sixMonthsBeforeToday;
};

export const getJobsData = async () => {
  const query = qs.stringify({
    filters: {
      ExpireSixMonthsFrom: {
        $gte: calculateSixMonthsBeforeToday(),
      },
    },
    populate: "*",
    sort: ["ExpireSixMonthsFrom:desc", "id:desc"],
  });

  const placementQuery = qs.stringify({
    populate: "*",
  });

  // const jobsData = await fetchAPI(`/job-listings?${query}`);
  const [jobsData] = await Promise.all([
    fetchAPI(`/job-listings?${query}`),
    // fetchAPI(`/about?${placementQuery}`),
  ]);

  // console.log(
  //   "PD: ",
  //   placementData.data.attributes.members.filter(
  //     (m) => m.email === "placement@agosd.org"
  //   )
  // );

  return {
    jobsData: jobsData.data,
    // placementData: placementData.data.attributes.members.filter(
    //   (m) => m.email === "placement@agosd.org"
    // )[0],
  };
};

// $gt: new Date().toISOString().slice(0, 10)

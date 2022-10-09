import { fetchAPI } from "./api";
import { calculateSixMonthsBeforeToday } from "./jobs";

const qs = require("qs");

export async function search(keyword) {
  const eventQuery = qs.stringify({
    filters: {
      $or: [
        {
          Name: {
            $containsi: keyword,
          },
        },
        {
          Description: {
            $containsi: keyword,
          },
        },
        {
          Location: {
            $containsi: keyword,
          },
        },
      ],
    },
  });

  const jobsQuery = qs.stringify({
    filters: {
      $or: [
        {
          Employer: {
            $containsi: keyword,
          },
        },
        {
          Description: {
            $containsi: keyword,
          },
        },
      ],
      ExpireSixMonthsFrom: {
        $gte: calculateSixMonthsBeforeToday(),
      },
    },
    populate: "*",
    sort: ["ExpireSixMonthsFrom:desc", "id:desc"],
  });

  const teacherQuery = qs.stringify({
    filters: {
      $or: [
        {
          firstName: {
            $containsi: keyword,
          },
        },
        {
          lastName: {
            $containsi: keyword,
          },
        },
      ],
    },
    sort: ["lastName"],
    populate: "*",
  });

  const subsQuery = qs.stringify({
    filters: {
      $or: [
        {
          firstName: {
            $containsi: keyword,
          },
        },
        {
          lastName: {
            $containsi: keyword,
          },
        },
      ],
    },
    sort: ["lastName"],
    populate: "*",
  });

  const organSitesQuery = qs.stringify({
    filters: {
      $or: [
        {
          Name: {
            $containsi: keyword,
          },
        },
        {
          area_organs: {
            Description: {
              $containsi: keyword,
            },
          },
        },
        {
          area_organs: {
            Location: {
              $containsi: keyword,
            },
          },
        },
      ],
    },
    populate: {
      area_organs: { populate: ["Images", "Specs", "PrimaryImage"] },
    },
  });

  const [eventData, jobsData, teachersData, subsData, organsData] =
    await Promise.all([
      fetchAPI(`/events?${eventQuery}`),
      fetchAPI(`/job-listings?${jobsQuery}`),
      fetchAPI(`/organ-teachers?${teacherQuery}`),
      fetchAPI(`/sub-organists?${subsQuery}`),
      fetchAPI(`/organ-sites?${organSitesQuery}`),
    ]);

  return {
    eventData,
    jobsData,
    teachersData,
    subsData,
    organsData,
  };
}

import qs from "qs";
import { fetchAPI } from "./api";

export const getPhotoAlbums = async (page) => {
  const query = qs.stringify(
    {
      populate: "*",
      sort: ["Date:desc"],
      pagination: {
        page: page,
        pageSize: 3,
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  const photosData = await fetchAPI(`/photo-albums?${query}`);

  return photosData;
};

export async function getAllPhotoAlbumSlugs() {
  const res = await fetchAPI(`/photo-albums`);

  return res.data.map((album) => {
    return {
      params: {
        slug: album.attributes.Slug,
      },
    };
  });
}

export const getPhotoAlbumData = async (slug) => {
  const query = qs.stringify({
    filters: {
      Slug: {
        $eq: slug,
      },
    },
    populate: "*",
  });

  const albumData = await fetchAPI(`/photo-albums?${query}`);


  if (albumData == null || albumData.length === 0) {
    return null;
  }

  return albumData.data[0].attributes;
};

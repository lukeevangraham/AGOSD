import { useState } from "react";
import { getAllPhotoAlbumSlugs, getPhotoAlbumData } from "../../lib/photos";
import { getGlobalData } from "../../lib/api";
import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";
import Modal from "../../components/UI/Modal/Modal";
import Image from "next/image";

import classes from "./Slug.module.scss";

export async function getStaticPaths() {
  const paths = await getAllPhotoAlbumSlugs();
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const [globalData, photoAlbumData] = await Promise.all([
    getGlobalData(),
    getPhotoAlbumData(params.slug),
  ]);

  return {
    props: { globalData, photoAlbumData },
    revalidate: 1,
  };
}

const PhotoAlbum = ({ globalData, photoAlbumData }) => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // const date = new Date(photoAlbumData.Date);

  return (
    <Layout globalData={globalData}>
      {showModal ? (
        <Modal show={showModal} modalClosed={() => setShowModal(false)}>
          <div className={classes.ModalImage}>
            <Image
              src={showModal.attributes.url}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Modal>
      ) : null}
      <div className={classes.PhotoAlbum}>
        <h1>{`Photos: ${photoAlbumData.Name}`}</h1>
        <h3>
          {new Date(photoAlbumData.Date).toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h3>

        <div className={classes.PhotoAlbum__Photos}>
          {photoAlbumData.Photos.data.map((photo) => (
            <div
              onClick={() => setShowModal(photo)}
              key={photo.id}
              className={classes.PhotoAlbum__Photos__Photo}
            >
              <Image
                src={photo.attributes.url}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PhotoAlbum;

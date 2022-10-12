import { useState, useEffect } from "react";
import { getAllPhotoAlbumSlugs, getPhotoAlbumData } from "../../lib/photos";
import { getGlobalData } from "../../lib/api";
import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";
import Modal from "../../components/UI/Modal/Modal";
import Image from "next/image";
import SEO from "../../components/SEO/SEO";

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

  useEffect(() => {
    const keyDownHandler = (e) => {
      switch (e.code) {
        case "Escape":
          setShowModal(false);
          return;
        case "ArrowRight":
          showModal < photoAlbumData.Photos.data.length - 1
            ? setShowModal(showModal + 1)
            : null;
          return;
        case "ArrowLeft":
          showModal > 0 ? setShowModal(showModal - 1) : null;
          return;
        default:
          console.log("HERE: ", e.code);
          return;
      }
    };
    showModal || showModal === 0
      ? document.addEventListener("keydown", keyDownHandler)
      : null;

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [showModal, setShowModal, photoAlbumData]);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // const date = new Date(photoAlbumData.Date);

  return (
    <>
      <SEO
        metaData={{
          metaTitle: `Photos: ${photoAlbumData.Name}`,
          openGraph: {
            title: `Photos: ${photoAlbumData.Name}`,
            images: [
              {
                url: photoAlbumData.Photos.data[0].attributes.url,
                width: photoAlbumData.Photos.data[0].attributes.width,
                height: photoAlbumData.Photos.data[0].attributes.height,
                alt: photoAlbumData.Photos.data[0].attributes.alternativeText,
              },
              {
                url: photoAlbumData.Photos.data[0].attributes.formats.thumbnail
                  .url,
                width:
                  photoAlbumData.Photos.data[0].attributes.formats.thumbnail
                    .width,
                height:
                  photoAlbumData.Photos.data[0].attributes.formats.thumbnail
                    .height,
                alt: photoAlbumData.Photos.data[0].attributes.formats.thumbnail
                  .alternativeText,
              },
            ],
          },
        }}
      />
      <Layout globalData={globalData}>
        {showModal || showModal === 0 ? (
          <Modal show={true} modalClosed={() => setShowModal(false)}>
            <div className={classes.ModalContainer}>
              {showModal > 0 ? (
                <div
                  className={`${classes.ModalContainer__Control} ${classes.ModalContainer__Control_down}`}
                  onClick={() => setShowModal(showModal - 1)}
                >
                  &#8592;
                </div>
              ) : null}
              <div className={classes.ModalContainer__ModalImage}>
                <Image
                  src={photoAlbumData.Photos.data[showModal].attributes.url}
                  layout="fill"
                  objectFit="contain"
                  alt={
                    photoAlbumData.Photos.data[showModal].attributes
                      .alternateText
                  }
                />
              </div>
              {showModal < photoAlbumData.Photos.data.length - 1 ? (
                <div
                  className={`${classes.ModalContainer__Control} ${classes.ModalContainer__Control_up}`}
                  onClick={() => setShowModal(showModal + 1)}
                >
                  &#8594;
                </div>
              ) : null}
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
          <div className="row">
            {photoAlbumData.Description ? (
              <div
                className={`${classes.PhotoAlbum__Description} u-padding-top-medium`}
                dangerouslySetInnerHTML={{ __html: photoAlbumData.Description }}
              />
            ) : null}
          </div>

          <div className={classes.PhotoAlbum__Photos}>
            {photoAlbumData.Photos.data.map((photo, index) => (
              <div
                onClick={() => setShowModal(index)}
                key={photo.id}
                className={classes.PhotoAlbum__Photos__Photo}
              >
                <Image
                  src={photo.attributes.url}
                  layout="fill"
                  objectFit="cover"
                  alt={photo.attributes.alternativeText}
                />
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PhotoAlbum;

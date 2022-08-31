import { useState } from "react";
import Image from "next/image";
import Modal from "../Modal/Modal";

import classes from "./PhotoShowcase.module.scss";

const PhotoShowcase = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={classes.PhotoShowcase}>
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
      <ul className={classes.PhotoShowcase__Group}>
        {data.map((photo, index, array) => {
          if (array.length == 1) {
            return (
              <li
                key={photo.id}
                onClick={() => setShowModal(photo)}
                style={{ width: "100%", position: "relative", height: "50vh" }}
              >
                {/* <figure className={classes.PhotoShowcase__Group_Photo}> */}
                <Image
                  src={photo.attributes.url}
                  alt={photo.attributes.alternativeText}
                  layout="fill"
                  objectFit="contain"
                />
                {/* </figure> */}
              </li>
            );
          }
          if (array.length <= 2) {
            return (
              <li
                key={photo.id}
                style={{ width: "50%" }}
                onClick={() => setShowModal(photo)}
              >
                <figure
                  className={`${classes.PhotoShowcase__Group_Photo} ${classes.Rectangle}`}
                >
                  <Image
                    src={photo.attributes.url}
                    alt={photo.attributes.alternativeText}
                    layout="fill"
                    objectFit="cover"
                  />
                </figure>
              </li>
            );
          }
          if (array.length === 3) {
            return (
              <li
                key={photo.id}
                style={{ width: "33%" }}
                onClick={() => setShowModal(photo)}
              >
                <figure className={`${classes.PhotoShowcase__Group_Photo}`}>
                  <Image
                    src={photo.attributes.url}
                    alt={photo.attributes.alternativeText}
                    layout="fill"
                    objectFit="cover"
                  />
                </figure>
              </li>
            );
          }
          if (array.length === 4) {
            return (
              <li
                key={photo.id}
                style={{ width: "25%" }}
                onClick={() => setShowModal(photo)}
              >
                <figure className={`${classes.PhotoShowcase__Group_Photo}`}>
                  <Image
                    src={photo.attributes.url}
                    alt={photo.attributes.alternativeText}
                    layout="fill"
                    objectFit="cover"
                  />
                </figure>
              </li>
            );
          } else {
            switch (array.length % 2) {
              case 0:
                return (
                  <li
                    key={photo.id}
                    style={{ width: `${100 / (array.length / 2)}%` }}
                    onClick={() => setShowModal(photo)}
                  >
                    <figure className={classes.PhotoShowcase__Group_Photo}>
                      <Image
                        src={photo.attributes.url}
                        alt={photo.attributes.alternativeText}
                        layout="fill"
                        objectFit="cover"
                      />
                    </figure>
                  </li>
                );
                break;
              case 1:
                return (
                  <li
                    key={photo.id}
                    style={{ width: `${100 / ((array.length + 1) / 2)}%` }}
                    onClick={() => setShowModal(photo)}
                  >
                    {/* {console.log("HERE: ", (array.length + 1) % 2)} */}
                    <figure className={classes.PhotoShowcase__Group_Photo}>
                      <Image
                        src={photo.attributes.url}
                        alt={photo.attributes.alternativeText}
                        layout="fill"
                        objectFit="cover"
                      />
                    </figure>
                  </li>
                );
                break;
              default:
                break;
            }
          }
        })}
      </ul>
    </div>
  );
};

export default PhotoShowcase;

import { useState, useEffect } from "react";
import Image from "next/image";
import Modal from "../Modal/Modal";

import classes from "./PhotoShowcase.module.scss";

const PhotoShowcase = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const keyDownHandler = (e) => {
      switch (e.code) {
        case "Escape":
          setShowModal(false);
          return;
        case "ArrowRight":
          showModal < data.length - 1 ? setShowModal(showModal + 1) : null;
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
  }, [showModal, setShowModal, data]);

  return (
    <div className={classes.PhotoShowcase}>
      {showModal || showModal === 0 ? (
        <Modal show={true} modalClosed={() => setShowModal(false)}>
          <div className={classes.PhotoShowcase__ModalContainer}>
            {showModal > 0 ? (
              <div
                className={`${classes.PhotoShowcase__ModalContainer__Control} ${classes.PhotoShowcase__ModalContainer__Control_down}`}
                onClick={() => setShowModal(showModal - 1)}
              >
                &#8592;
              </div>
            ) : null}
            <div className={classes.PhotoShowcase__ModalContainer__ModalImage}>
              <Image
                src={data[showModal].attributes.url}
                layout="fill"
                objectFit="contain"
                alt={data[showModal].attributes.alternativeText}
              />
            </div>
            {showModal < data.length - 1 ? (
              <div
                className={`${classes.PhotoShowcase__ModalContainer__Control} ${classes.PhotoShowcase__ModalContainer__Control_up}`}
                onClick={() => setShowModal(showModal + 1)}
              >
                &#8594;
              </div>
            ) : null}
          </div>
        </Modal>
      ) : null}
      <ul className={classes.PhotoShowcase__Group}>
        {data.map((photo, index, array) => {
          if (array.length == 1) {
            return (
              <li
                key={photo.id}
                onClick={() => setShowModal(index)}
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
                onClick={() => setShowModal(index)}
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
                onClick={() => setShowModal(index)}
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
                onClick={() => setShowModal(index)}
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
                    onClick={() => setShowModal(index)}
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
                    onClick={() => setShowModal(index)}
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

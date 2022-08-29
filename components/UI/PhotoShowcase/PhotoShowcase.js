import Image from "next/image";

import classes from "./PhotoShowcase.module.scss";

const PhotoShowcase = ({ data }) => (
  <section className={classes.PhotoShowcase}>
    <ul className={classes.PhotoShowcase__Group}>
      {data.map((photo, index, array) => {
        if (array.length == 1) {
          return (
            <li
              key={photo.id}
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
            <li key={photo.id} style={{ width: "50%" }}>
              {console.log("HERE: ", (array.length + 1) % 2)}
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
        } else {
          switch (array.length % 2) {
            case 0:
              return (
                <li
                  key={photo.id}
                  style={{ width: `${100 / (array.length / 2)}%` }}
                >
                  {console.log("HERE: ", (array.length + 1) % 2)}
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
  </section>
);

export default PhotoShowcase;

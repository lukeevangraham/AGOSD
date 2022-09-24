import Image from "next/image";
import Link from "next/link";

import classes from "./AlbumPreview.module.scss";

const AlbumPreview = ({ album }) => (
  <Link href={`/photos/${album.attributes.Slug}`}>
    <a>
      <div className={classes.AlbumPreview}>
        <div className={classes.AlbumPreview__Image}>
          <Image
            src={album.attributes.Photos.data[0].attributes.url}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={classes.AlbumPreview__Name}>
          {album.attributes.Name}
        </div>
        <div>
          {`${new Date(album.attributes.Date).toLocaleString("default", {
            month: "long",
          })},\u00A0 ${new Date(album.attributes.Date).toLocaleString(
            "default",
            {
              year: "numeric",
            }
          )}`}
        </div>
      </div>
    </a>
  </Link>
);

export default AlbumPreview;

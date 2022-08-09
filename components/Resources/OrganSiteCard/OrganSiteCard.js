import Image from "next/image";
import Link from "next/link";

import classes from "./OrganSiteCard.module.scss";

const OrganSiteCard = ({ organ }) => (
  <div className={classes.OrganCard}>
    <Link href={`/resources/area-organs/${organ.attributes.slug}`}>
      <a>
        <div className={classes.OrganCard__Image}>
          <Image
            src={
              organ.attributes.area_organs.data[0].attributes.Images.data[0]
                .attributes.url
            }
            alt={
              organ.attributes.area_organs.data[0].attributes.Images.data[0]
                .attributes.alternativeText
            }
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={classes.OrganCard__Name}>{organ.attributes.Name}</div>
        {/* {console.log("O: ", organ)} */}
      </a>
    </Link>
  </div>
);

export default OrganSiteCard;

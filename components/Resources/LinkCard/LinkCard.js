import Image from "next/image";

import classes from "./LinkCard.module.scss";

const LinkCard = ({ link }) => (
  <div className={classes.LinkCard} key={link.id}>
    <a href={link.url} target="_blank" rel="noreferrer">
      <div className={classes.LinkCard__Image}>
        <Image
          src={link.Image.data.attributes.url}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </a>
    <div className={classes.LinkCard__Info}>
      <a target="_blank" href={link.url} rel="noreferrer">
        {link.text}
      </a>
      <div
        dangerouslySetInnerHTML={{ __html: link.Description }}
        className={classes.LinkCard__Info__Description}
      ></div>
    </div>
    <div className={classes.LinkCard__Category}>{link.Category}</div>
  </div>
);

export default LinkCard;

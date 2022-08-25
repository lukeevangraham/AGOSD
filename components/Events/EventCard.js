import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import DateBox from "./DateBox/DateBox";
import classes from "./EventCard.module.scss";

const EventCard = ({ event }) => (
  <div className={classes.EventCard}>
    {/* {console.log("E: ", event)} */}
    <Link href={`/events/${event.attributes.Slug}`}>
      <a>
        <div className={classes.EventCard__Image}>
          <Image
            src={event.attributes.Image.data.attributes.url}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </a>
    </Link>
    <div className={classes.EventCard__Date}>
      <DateBox date={event.attributes.dateAndTime} />
    </div>
    <div className={classes.EventCard__IndentedText}>
      <Link href={`/events/${event.attributes.Slug}`}>
        <a>
          <div className={classes.EventCard__IndentedText__Title}>
            {event.attributes.Name}
          </div>
        </a>
      </Link>
      <div className={classes.EventCard__IndentedText__Time}>
        <svg>
          <use xlinkHref="../images/sprite.svg#icon-clock"></use>
        </svg>
        <div>
          {new Date(event.attributes.dateAndTime).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
          })}
        </div>
      </div>
      <div className={classes.EventCard__IndentedText__Location}>
        <svg>
          <use xlinkHref="../images/sprite.svg#icon-location-pin"></use>
        </svg>
        <div>{event.attributes.Location}</div>
      </div>
    </div>
      {/* <div className={classes.EventCard__Type}>{event.attributes.Type}</div> */}
      <div className={classNames(classes.EventCard__Type, {
        [classes.EventCard__Type_chapter]: event.attributes.Type === "AGO Chapter Event",
        [classes.EventCard__Type_community]: event.attributes.Type === "Community-Sponsored Event",
        [classes.EventCard__Type_student]: event.attributes.Type === "Student Event",
      })}>{event.attributes.Type}</div>
  </div>
);

export default EventCard;

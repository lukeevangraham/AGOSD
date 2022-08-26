import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import DateBox from "./DateBox/DateBox";
import classes from "./EventCard.module.scss";

const EventCard = ({ event }) => {
  let eventTypeRibbon;

  return (
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
            {new Date(event.attributes.dateAndTime).toLocaleTimeString(
              "en-US",
              {
                hour: "numeric",
                minute: "2-digit",
              }
            )}
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
      {/* <div
      className={classNames(classes.EventCard__Type, {
        [classes.EventCard__Type_chapter]:
          event.attributes.EventType && event.attributes.EventType.AGOChapter,
        [classes.EventCard__Type_community]:
          event.attributes.EventType &&
          event.attributes.EventType.CommunitySponsored,
        [classes.EventCard__Type_student]:
          event.attributes.EventType && event.attributes.EventType.Student,
      })}
    >
      {event.attributes.Type}
    </div> */}
    <div className={classes.EventCard__Type}>

    
      {event.attributes.EventType && event.attributes.EventType.AGOChapter ? (
        <div
          className={classNames(
            classes.EventCard__Type_chapter
          )}
        >
          AGO Chapter
        </div>
      ) : null}
      {event.attributes.EventType &&
      event.attributes.EventType.CommunitySponsored ? (
        <div
          className={classNames(
            classes.EventCard__Type_community
          )}
        >
          Community Sponsored
        </div>
      ) : null}
      {event.attributes.EventType && event.attributes.EventType.Student ? (
        <div
          className={classNames(
            classes.EventCard__Type_student
          )}
        >
          Student
        </div>
      ) : null}
    </div>
    </div>
  );
};

export default EventCard;

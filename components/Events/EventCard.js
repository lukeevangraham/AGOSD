import Image from "next/image";
import DateBox from "./DateBox/DateBox";
import classes from "./EventCard.module.scss";

const EventCard = ({ event }) => (
  <div className={classes.EventCard}>
    {console.log("ED: ", event)}
    <div className={classes.EventCard__Image}>
      <Image
        src={event.attributes.Image.data.attributes.url}
        layout="fill"
        objectfit="cover"
      />
    </div>
    <DateBox date={event.attributes.dateAndTime} />
    <div className={classes.EventCard__IndentedText}>
      <div className={classes.EventCard__IndentedText__Title}>
        {event.attributes.Name}
      </div>
      <div>{event.attributes.Type}</div>
      <div>{event.attributes.Location}</div>
      <div>
        {new Date(event.attributes.dateAndTime).toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
        })}
      </div>
    </div>
  </div>
);

export default EventCard;

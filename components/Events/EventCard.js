import classes from "./EventCard.module.scss";

const EventCard = ({ event }) => (
  <div className={classes.EventCard}>
    <div>{event.attributes.Name}</div>
    <div>{event.attributes.Type}</div>
    <div>{new Date(event.attributes.dateAndTime).toLocaleString("en-US")}</div>
  </div>
);

export default EventCard;

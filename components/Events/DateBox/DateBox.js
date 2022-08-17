import classes from "./DateBox.module.scss";

const DateBox = ({ date }) => (
    <div className={classes.DateBox}>{console.log("D: ", date)}
        <div className={classes.DateBox__Date}>{new Date(date).toLocaleDateString("en-US", {day: "numeric"}) }</div>
        <div className={classes.DateBox__Month}>{new Date(date).toLocaleDateString("en-US", {month: "short"}) }</div>
    </div>
)

export default DateBox
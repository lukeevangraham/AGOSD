import classes from "./Brandname.module.scss";
let classNames = require("classnames");

const Brandname = ({ color }) => (
  <div
    className={classNames(classes.Brandname, {
      [classes.Black]: color === "black",
    })}
  >
    <div>American Guild of Organists</div>
    <div>San Diego</div>
    <div>Chapter</div>
  </div>
);

export default Brandname;

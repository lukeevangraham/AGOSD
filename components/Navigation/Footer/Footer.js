import Link from "next/link";
import classes from "./Footer.module.scss";

const Footer = () => (
  <div className={classes.Footer}>
    <div>American Guild of Organists, San Diego Chapter</div>
    <div className={classes.Footer__UsefulLinks}>
      <div>Useful Links</div>
      <ul>
        <li>
          {" "}
          <Link href="/registration">
            <a> &rsaquo; Join</a>
          </Link>
        </li>
        <li>
          {" "}
          <Link href="/resources/area-organs">
            <a> &rsaquo; Area Organs</a>
          </Link>
        </li>
      </ul>
    </div>
    <div className={classes.Footer__Social}>
      <a
        href="https://www.facebook.com/AGOSanDiego"
        target="_blank"
        rel="noreferrer"
      >
        <svg>
          <use xlinkHref="../images/sprite.svg#icon-facebook"></use>
        </svg>
      </a>
    </div>
  </div>
);

export default Footer;

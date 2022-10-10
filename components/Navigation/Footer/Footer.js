import Image from "next/image";
import Link from "next/link";
import Brandname from "../../UI/Brandname/Brandname";
import classes from "./Footer.module.scss";

const Footer = () => (
  <div className={classes.Footer}>
    <div className={classes.Footer__BGImage}>
      <Image
        src={
          "https://res.cloudinary.com/dhsn4mic4/image/upload/v1661720524/josh_applegate_vvehw_J_Ba_YFU_unsplash_f3032b6eb6.jpg?updated_at=2022-08-28T21:02:06.061Z"
        }
        layout="fill"
        alt="Pipe Organ Pipes"
      />
    </div>
    <div className="row">
      <div className={classes.Footer__Content}>
        <div className={classes.Footer__Content__Brand}>
          <div className={classes.Footer__Content__Brand__Logo}>
            <Image src={"/images/LogoB&W.svg"} alt="AGOSD Logo" layout="fill" objectFit="contain" objectPosition="top" />
          </div>
          {/* <img src="/images/LogoB&W.svg" alt="" width="70rem" /> */}
          {/* <div>American Guild of Organists, San Diego Chapter</div> */}

          <Brandname color={"black"} />
        </div>

        <div className={classes.Footer__Content__UsefulLinks}>
          <div>Useful Links</div>
          <ul>
            <li>
              {" "}
              <Link href="/contact">
                <a> &rsaquo; Contact Us</a>
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/donate">
                <a> &rsaquo; Donate</a>
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/education">
                <a> &rsaquo; Education</a>
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/events">
                <a> &rsaquo; Events</a>
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/jobs">
                <a> &rsaquo; Jobs</a>
              </Link>
            </li>

            <li>
              {" "}
              <Link href="/registration">
                <a> &rsaquo; Join</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={classes.Footer__Content__UsefulLinks}>
          <div>Resources</div>
          <ul>
            <li>
              {" "}
              <Link href="/resources/links">
                <a> &rsaquo; Links</a>
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/resources/area-organs">
                <a> &rsaquo; Area Organs</a>
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/resources/organ-teachers">
                <a> &rsaquo; Organ Teachers</a>
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/resources/substitute-organists">
                <a> &rsaquo; Substitute Organists</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={classes.Footer__Content__Social}>
          <a
            href="https://www.facebook.com/AGOSanDiego"
            target="_blank"
            rel="noreferrer"
          >
            <svg>
              <use xlinkHref="../images/sprite.svg#icon-facebook"></use>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/AGOSanDiego"
            target="_blank"
            rel="noreferrer"
          >
            <svg>
              <use xlinkHref="../images/sprite.svg#icon-instagram"></use>
            </svg>
          </a>
        </div>
      </div>
      <div className={classes.Footer__Fineprint}>
        <a
          href="http://grahamwebworks.com"
          target="_blank"
          className={classes.Footer__Fineprint_GWW}
          rel="noreferrer"
        >
          Graham Web Works
        </a>
        <div>
          &copy; {new Date().getFullYear()} American Guild of Organists San
          Diego
        </div>
      </div>
    </div>
  </div>
);

export default Footer;

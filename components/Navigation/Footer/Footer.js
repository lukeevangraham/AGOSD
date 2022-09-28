import Image from "next/image";
import Link from "next/link";
import classes from "./Footer.module.scss";

const Footer = () => (
  <div className={classes.Footer}>
    <div className={classes.Footer__BGImage}>
      <Image
        src={
          "https://res.cloudinary.com/dhsn4mic4/image/upload/v1661720524/josh_applegate_vvehw_J_Ba_YFU_unsplash_f3032b6eb6.jpg?updated_at=2022-08-28T21:02:06.061Z"
        }
        layout="fill"
      />
    </div>
    <div className="row">
      <div className={classes.Footer__Content}>
        <div className={classes.Footer__Content__Brand}>
          <img src="/images/LogoB&W.svg" alt="" srcset="" width="70rem" />
          <div>American Guild of Organists, San Diego Chapter</div>
        </div>

        <div className={classes.Footer__Content__UsefulLinks}>
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
            <li>
              {" "}
              <Link href="/contact">
                <a> &rsaquo; Contact Us</a>
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
        </div>
      </div>
    </div>
  </div>
);

export default Footer;

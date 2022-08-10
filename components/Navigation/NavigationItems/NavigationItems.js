import Link from "next/link";
import NavigationItem from "./NavigationItem/NavigationItem";

import classes from "./NavigationItems.module.scss";

const NavigationItems = ({ links, setMegaMenuContent, megaMenuContent }) => {
  const resources = (
    <div className={classes.MegaMenu}>
      <Link href={"/resources/links"}>
        <a>Links</a>
      </Link>
      <Link href={"/resources/area-organs/"}>
        <a>Area Organs</a>
      </Link>
      <Link href={"/resources/organ-teachers"}>
        <a>Organ Teachers</a>
      </Link>
      <Link href={"/resources/substitute-organists"}>
        <a>Substitute Organists</a>
      </Link>
    </div>
  );

  const education = (
    <div className={classes.MegaMenu}>
      <Link href={"/education/links"}>
        <a>Scholarships</a>
      </Link>
      <Link href={"/education/links"}>
        <a>Certifications</a>
      </Link>
      <Link href={"/education/links"}>
        <a>Organ Teachers</a>
      </Link>
      <Link href={"/education/links"}>
        <a>Pipe Organ Encounter</a>
      </Link>
    </div>
  );

  return (
    <div className={classes.NavigationItems}>
      <NavigationItem />
      {links.map((link) => (
        <NavigationItem link={link} key={link.id} />
      ))}
      <div
        onClick={() =>
          megaMenuContent && megaMenuContent.props.children[0].props.href.startsWith("/resources")
            ? setMegaMenuContent(null)
            : setMegaMenuContent(resources)
        }
        className={classes.NavigationItems__MegaMenu}
      >
        Resources
      </div>
      {/* <div
        onClick={() =>
          megaMenuContent && megaMenuContent.props.children[0].props.href.startsWith("/education")
            ? setMegaMenuContent(null)
            : setMegaMenuContent(education)
        }
        className={classes.NavigationItems__MegaMenu}
      >
        Education
      </div> */}
    </div>
  );
};

export default NavigationItems;

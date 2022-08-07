import Link from "next/link";
import NavigationItem from "./NavigationItem/NavigationItem";

import classes from "./NavigationItems.module.scss";

const NavigationItems = ({ links, setMegaMenuContent, megaMenuContent }) => {
  const resources = (
    <div className={classes.Resources}>
      <Link href={"/resources/links"}>
        <a>Links</a>
      </Link>
      <Link href={"/resources/area-organs/"}>
        <a>Area Organs</a>
      </Link>
      <Link href={"/resources/organ-teachers"}>
        <a>Organ Teachers</a>
      </Link>
      <Link href={"substitute-organists"}>
        <a>Substitute Organists</a>
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
          megaMenuContent
            ? setMegaMenuContent(null)
            : setMegaMenuContent(resources)
        }
        className={classes.NavigationItems__Resources}
      >
        Resources
      </div>
    </div>
  );
};

export default NavigationItems;

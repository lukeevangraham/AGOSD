import Link from "next/link";
import Image from "next/image";
import Backdrop from "../../UI/Backdrop/Backdrop";
import NavigationItems from "../NavigationItems/NavigationItems";
import MegaMenu from "../MegaMenu/MegaMenu";

import classes from "./SideDrawer.module.scss";

const SideDrawer = ({
  open,
  closed,
  globalData,
  setMegaMenuContent,
  megaMenuContent,
}) => (
  <>
    <Backdrop show={open} clicked={closed} />
    <div
      className={
        open
          ? `${classes.SideDrawer} ${classes.SideDrawer__open}`
          : `${classes.SideDrawer} ${classes.SideDrawer__closed}`
      }
    >
      <Link href="/">
        <a>
          <div className={classes.SideDrawer__logo}>
            <Image
              src={globalData.Navbar.logo.data.attributes.url}
              layout="fill"
            />
          </div>
        </a>
      </Link>
      <NavigationItems
        links={globalData.Navbar.links}
        setMegaMenuContent={setMegaMenuContent}
        megaMenuContent={megaMenuContent}
        fromSideDrawer
      />
      {megaMenuContent ? <MegaMenu content={megaMenuContent} /> : null}
    </div>
  </>
);

export default SideDrawer;

import Image from "next/image";
import Link from "next/link";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import NavigationItems from "../NavigationItems/NavigationItems";

import classes from "./Toolbar.module.scss";

const Toolbar = ({
  globalData,
  setMegaMenuContent,
  megaMenuContent,
  drawerToggleClicked,
}) => (
  <div className={classes.Toolbar}>
    <Link href="/">
      <div className={classes.Toolbar__Brand}>
        <div className={classes.Toolbar__Brand__Logo}>
          <Image
            src={globalData.Navbar.logo.data.attributes.url}
            layout="fill"
          />
        </div>
        <div className={classes.Toolbar__Brand__Name}>
          <div>American Guild of Organists</div>
          <div>San Diego</div>
        </div>
      </div>
    </Link>
    <div className={classes.Toolbar__DesktopOnly}>
      <NavigationItems
        links={globalData.Navbar.links}
        setMegaMenuContent={setMegaMenuContent}
        megaMenuContent={megaMenuContent}
      />
    </div>
    <DrawerToggle clicked={drawerToggleClicked} />
  </div>
);

export default Toolbar;

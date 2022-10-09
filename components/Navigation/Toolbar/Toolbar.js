import Image from "next/image";
import Link from "next/link";
import Brandname from "../../UI/Brandname/Brandname";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import SearchBar from "../../UI/SearchBar/SearchBar";
import NavigationItems from "../NavigationItems/NavigationItems";

import classes from "./Toolbar.module.scss";

const Toolbar = ({
  globalData,
  setMegaMenuContent,
  megaMenuContent,
  drawerToggleClicked,
  searchClicked,
  showSearchBar,
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
        <Brandname />
      </div>
    </Link>
    <div className={classes.Toolbar__DesktopOnly}>
      <NavigationItems
        links={globalData.Navbar.links}
        setMegaMenuContent={setMegaMenuContent}
        megaMenuContent={megaMenuContent}
      />
      <div
        className={classes.Toolbar__DesktopOnly__Search}
        onClick={searchClicked}
      >
        <svg>
          <use xlinkHref="../images/sprite.svg#icon-magnifying-glass"></use>
        </svg>
      </div>
    </div>
    <div className={classes.Toolbar__SearchContainer}>
      <SearchBar open={showSearchBar} />
    </div>
    <DrawerToggle clicked={drawerToggleClicked} />
  </div>
);

export default Toolbar;

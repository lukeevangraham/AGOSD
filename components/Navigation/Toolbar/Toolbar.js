import Image from "next/image"
import NavigationItems from "../NavigationItems/NavigationItems";

import classes from "./Toolbar.module.scss";

const Toolbar = ({ globalData, setMegaMenuContent, megaMenuContent }) => (
  <div className={classes.Toolbar}>
    <div className={classes.Toolbar__Logo}>
      {console.log("GD: ", globalData)}
      <Image src={globalData.Navbar.logo.data.attributes.url} layout="fill" />
    </div>
    <NavigationItems
      links={globalData.Navbar.links}
      setMegaMenuContent={setMegaMenuContent}
      megaMenuContent={megaMenuContent}
    />
  </div>
);

export default Toolbar;

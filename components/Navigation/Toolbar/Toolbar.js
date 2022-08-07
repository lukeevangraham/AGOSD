import NavigationItems from "../NavigationItems/NavigationItems";

import classes from "./Toolbar.module.scss";

const Toolbar = ({ globalData, setMegaMenuContent, megaMenuContent }) => (
  <div className={classes.Toolbar}>
    <NavigationItems
      links={globalData.Navbar.links}
      setMegaMenuContent={setMegaMenuContent}
      megaMenuContent={megaMenuContent}
    />
  </div>
);

export default Toolbar;

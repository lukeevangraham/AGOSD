import NavigationItems from "../NavigationItems/NavigationItems";

import classes from "./Toolbar.module.scss";

const Toolbar = ({ globalData }) => (
  <div className={classes.Toolbar}>
    <NavigationItems links={globalData.Navbar.links} />
  </div>
);

export default Toolbar;

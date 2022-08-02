import NavigationItem from "./NavigationItem/NavigationItem";

import classes from "./NavigationItems.module.scss"

const NavigationItems = ({ links }) => (
  <div className={classes.NavigationItems}>
    <NavigationItem />
    {links.map((link) => (
      <NavigationItem link={link} key={link.id} />
    ))}
  </div>
);

export default NavigationItems;

import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = ({ globalData }) => (
  <>
    <NavigationItems links={globalData.Navbar.links} />
  </>
);

export default Toolbar;

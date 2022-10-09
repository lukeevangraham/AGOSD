import { useState, useEffect } from "react";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Footer from "../Navigation/Footer/Footer";
import MegaMenu from "../../components/Navigation/MegaMenu/MegaMenu";

import classes from "./Layout.module.scss";

const Layout = ({ children, globalData, search }) => {
  const [megaMenuContent, setMegaMenuContent] = useState(false);
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  useEffect(() => {
    search ? setShowSearchBar(false) : false;
  }, [search]);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  const searchBarToggleHandler = () => {
    setShowSearchBar(!showSearchBar);
  };

  let megaMenu = (children) => <MegaMenu content={children} />;

  return (
    <>
      <Toolbar
        globalData={globalData}
        setMegaMenuContent={setMegaMenuContent}
        megaMenuContent={megaMenuContent}
        drawerToggleClicked={sideDrawerToggleHandler}
        searchClicked={searchBarToggleHandler}
        showSearchBar={showSearchBar}
      />
      {megaMenuContent ? (
        <div className={classes.Layout__MegaMenuToolbar}>
          <MegaMenu content={megaMenuContent} />
        </div>
      ) : null}
      <SideDrawer
        open={showSideDrawer}
        closed={sideDrawerClosedHandler}
        globalData={globalData}
        setMegaMenuContent={setMegaMenuContent}
        megaMenuContent={megaMenuContent}
        searchClicked={searchBarToggleHandler}
      />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

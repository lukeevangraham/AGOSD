import { useState } from "react";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Footer from "./Footer/Footer";
import MegaMenu from "../../components/Navigation/MegaMenu/MegaMenu";

import classes from "./Layout.module.scss";

const Layout = ({ children, globalData }) => {
  const [megaMenuContent, setMegaMenuContent] = useState(false);
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  let megaMenu = (children) => <MegaMenu content={children} />;

  return (
    <>
      <Toolbar
        globalData={globalData}
        setMegaMenuContent={setMegaMenuContent}
        megaMenuContent={megaMenuContent}
        drawerToggleClicked={sideDrawerToggleHandler}
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
      />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

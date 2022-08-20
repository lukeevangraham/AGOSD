import { useState } from "react";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import MegaMenu from "../../components/Navigation/MegaMenu/MegaMenu";

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
      {megaMenuContent ? <MegaMenu content={megaMenuContent} /> : null}
      <SideDrawer
        open={showSideDrawer}
        closed={sideDrawerClosedHandler}
        globalData={globalData}
        setMegaMenuContent={setMegaMenuContent}
        megaMenuContent={megaMenuContent}
      />
      <main>{children}</main>
    </>
  );
};

export default Layout;

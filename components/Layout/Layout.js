import { useState } from "react";

import Toolbar from "../Navigation/Toolbar/Toolbar";
import MegaMenu from "../../components/Navigation/MegaMenu/MegaMenu";

const Layout = ({ children, globalData }) => {
  const [megaMenuContent, setMegaMenuContent] = useState(false);

  let megaMenu = (children) => <MegaMenu content={children} />;

  return (
    <>
      <Toolbar
        globalData={globalData}
        setMegaMenuContent={setMegaMenuContent}
        megaMenuContent={megaMenuContent}
      />
      {megaMenuContent ? <MegaMenu content={megaMenuContent} /> : null}
      <main>{children}</main>
    </>
  );
};

export default Layout;

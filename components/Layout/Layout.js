import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = ({ children, globalData }) => (
  <>
    <Toolbar globalData={globalData} />
    <main>
      {children}
    </main>
  </>
);

export default Layout;

import Toolbar from "../Navigation/Toolbar/Toolbar";

const Layout = ({ children }) => (
  <>
    <Toolbar />
    <div>Layout</div>
    {children}
  </>
);

export default Layout;

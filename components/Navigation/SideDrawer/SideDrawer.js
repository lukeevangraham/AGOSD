import { useState, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Brandname from "../../UI/Brandname/Brandname";
import NavigationItems from "../NavigationItems/NavigationItems";
import MegaMenu from "../MegaMenu/MegaMenu";

import classes from "./SideDrawer.module.scss";

const SideDrawer = ({
  open,
  closed,
  globalData,
  setMegaMenuContent,
  megaMenuContent,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/search",
      query: { keyword: searchTerm },
    });
    closed()
  };

  return (
    <>
      <Backdrop show={open} clicked={closed} />
      <div
        className={
          open
            ? `${classes.SideDrawer} ${classes.SideDrawer__open}`
            : `${classes.SideDrawer} ${classes.SideDrawer__closed}`
        }
      >
        <Link href="/">
          <a className={classes.SideDrawer__Brand}>
            <div className={classes.SideDrawer__Brand__logo}>
              <Image
                src={globalData.Navbar.logo.data.attributes.url}
                layout="fill"
                alt={globalData.Navbar.logo.data.attributes.alternativeText}
              />
            </div>
            <Brandname />
          </a>
        </Link>
        <div className={classes.SideDrawer__search}>
          <form className={classes.SideDrawer__search__Form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="searchTerm"
              id="searchTerm"
              placeholder="Search"
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              ref={inputRef}
            />
            {/* <Link href={{ pathname: "/search", query: { keyword: searchTerm } }}> */}
            <div
              className={classes.SideDrawer__search__Form_SearchButton}
              onClick={handleSubmit}
            >
              <svg>
                <use xlinkHref="/images/sprite.svg#icon-magnifying-glass"></use>
              </svg>
            </div>
            {/* </Link> */}
          </form>
        </div>
        <NavigationItems
          links={globalData.Navbar.links}
          setMegaMenuContent={setMegaMenuContent}
          megaMenuContent={megaMenuContent}
          fromSideDrawer
        />
        {megaMenuContent ? <MegaMenu content={megaMenuContent} /> : null}
      </div>
    </>
  );
};

export default SideDrawer;

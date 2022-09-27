import { useRouter } from "next/router";
import classNames from "classnames";
import Link from "next/link";

import classes from "./NavigationItem.module.scss";

const NavigationItem = ({ link }) => {
  const router = useRouter();
  return (
    <>
      {link && link.text ? (
        <Link href={link.url}>
          <a
            className={classNames({
              [classes.active]: router.pathname.startsWith(link.url),
            })}
          >
            {link.text}
          </a>
        </Link>
      ) : null}
    </>
  );
};

export default NavigationItem;

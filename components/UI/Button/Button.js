import classNames from "classnames";
import Link from "next/link";

import classes from "./Button.module.scss";

const Button = ({ button }) => (
  <Link href={button.url}>
    {button.newTab ? (
      <button
        target="_blank"
        className={classNames(classes.Button, {
          [classes.Button__primary]: button.type === "primary",
          [classes.Button__secondary]: button.type === "secondary",
        })}
      >
        {button.text}
      </button>
    ) : (
      <button
        className={classNames(classes.Button, {
          [classes.Button__primary]: button.type === "primary",
          [classes.Button__secondary]: button.type === "secondary",
        })}
      >
        {button.text}
      </button>
    )}
  </Link>
);

export default Button;

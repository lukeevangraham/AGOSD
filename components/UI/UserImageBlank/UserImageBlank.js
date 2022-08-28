

import classes from "./UserImageBlank.module.scss";

const UserImageBlank = () => (
  <div className={classes.UserImageBlank}>
    <svg>
      <use xlinkHref="../images/sprite.svg#icon-user"></use>
    </svg>
  </div>
);

export default UserImageBlank;
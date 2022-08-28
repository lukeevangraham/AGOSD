import Image from "next/image";
import SendEmail from "../../UI/SendEmail/SendEmail";
import UserImageBlank from "../../UI/UserImageBlank/UserImageBlank";

import classes from "./BoardMember.module.scss";

const BoardMember = ({ member }) => (
  <div className={classes.BoardMember}>
    <div className={classes.BoardMember__Image}>
      {/* {console.log("M: ", member)} */}
      {member.Image.data ? (
        <Image
          src={member.Image.data.attributes.url}
          layout="fill"
          objectFit="cover"
        />
      ) : (
        <UserImageBlank />
        // <svg>
        //   <use xlinkHref="../images/sprite.svg#icon-user"></use>
        // </svg>
      )}
      <div className={classes.BoardMember__Image__Overlay}>
        <div className={classes.BoardMember__Image__Overlay_text}>
          {member.shortBio}
        </div>
      </div>
    </div>
    <div className={classes.BoardMember__Name}>
      {member.Prefix ? member.Prefix : null} {member.firstName}{" "}
      {member.lastName}
    </div>
    <div className={classes.BoardMember__Position}>{member.Position}</div>
    <div className={classes.BoardMember__SendMail}>
      <SendEmail collection={"/about"} contact={member} source="BoardMember" />
    </div>
  </div>
);

export default BoardMember;

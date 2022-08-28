import Image from "next/image";
import UserImageBlank from "../../UI/UserImageBlank/UserImageBlank";
import SendEmail from "../../UI/SendEmail/SendEmail";

import classes from "./TeacherCard.module.scss";

const TeacherCard = ({ teacher }) => (
  <div key={teacher.id} className={classes.TeacherCard}>
    <div className={classes.TeacherCard__Image}>
      {teacher.attributes.Image.data ? (
        <Image
          src={teacher.attributes.Image.data.attributes.url}
          layout="fill"
        />
      ) : (
        <UserImageBlank />
      )}
    </div>
    <div className={classes.TeacherCard__Info}>
      <div className={classes.TeacherCard__Info_name}>
        {teacher.attributes.firstName} {teacher.attributes.lastName}
      </div>
      <div>{teacher.attributes.Phone}</div>
      {/* <a href={`mailto: ${teacher.attributes.Email}`}>
        {teacher.attributes.Email}
      </a> */}
      <div className={classes.TeacherCard__Info_sendEmail}>
        <SendEmail contact={teacher.attributes} source="TeacherCard" />
      </div>
      {teacher.attributes.Website ? (
        <a
          href={teacher.attributes.Website}
          className={classes.TeacherCard__Info__Link}
          target="_blank"
          rel="noreferrer"
        >
          <svg>
            <use xlinkHref="../images/sprite.svg#icon-link"></use>
          </svg>

          <div style={{ textDecoration: "none" }}>
            {teacher.attributes.Website}
          </div>
        </a>
      ) : null}
    </div>
  </div>
);

export default TeacherCard;

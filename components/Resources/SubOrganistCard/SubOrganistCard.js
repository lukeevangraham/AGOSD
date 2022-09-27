import Image from "next/image";
import UserImageBlank from "../../UI/UserImageBlank/UserImageBlank";
import SendEmail from "../../UI/SendEmail/SendEmail";

import classes from "./SubOrganistCard.module.scss";

const SubOrganistCard = ({ organist }) => (
  <div key={organist.id} className={classes.SubOrganistCard}>
    <div className={classes.SubOrganistCard__PicAndImage}>
      <div className={classes.SubOrganistCard__PicAndImage__Image}>
        {organist.attributes.Image.data ? (
          <Image
            src={organist.attributes.Image.data.attributes.url}
            alt={organist.attributes.Image.data.attributes.alternativeText}
            layout="fill"
            objectFit="cover"
          />
        ) : (
          <UserImageBlank />
        )}
      </div>
      <div className={classes.SubOrganistCard__PicAndImage__Info}>
        <div className={classes.SubOrganistCard__PicAndImage__Info_name}>{`${
          organist.attributes.Prefix ? organist.attributes.Prefix : ""
        } ${organist.attributes.firstName} ${
          organist.attributes.lastName
        }`}</div>
        <div>{organist.attributes.Phone}</div>
        <SendEmail contact={organist.attributes} source="TeacherCard" />
        {/* <a href={`mailto: ${organist.attributes.Email}`}>
          {organist.attributes.Email}
        </a> */}
      </div>
    </div>
    <div className={classes.SubOrganistCard__Availability}>
      <div className={classes.SubOrganistCard__PicAndImage__Info_availability}>
        Available as:
      </div>
      <ul>
        {organist.attributes.liturgicalExperience ? (
          <li>Liturgical Experience</li>
        ) : null}
        {organist.attributes.AGOCertifiedOrganist ? (
          <li>AGO Certified Organist</li>
        ) : null}
        {organist.attributes.Pianist ? <li>Pianist</li> : null}
        {organist.attributes.Vocalist ? <li>Vocalist</li> : null}
        {organist.attributes.onlyWeddingsAndFunerals ? (
          <li>Only weddings and funerals</li>
        ) : null}
      </ul>
    </div>
  </div>
);

export default SubOrganistCard;

import Image from "next/image";

import classes from "./OrganHeader.module.scss";

const OrganHeader = ({ organData }) => (
  <div className={classes.OrganHeader}>
    <div className={classes.OrganHeader__Text}>
      <h1>{organData.Name}</h1>
      <div className={classes.OrganHeader__Site}>
        {/* <div>{organData.Name}</div> */}
        {organData.Address.addressLineOne ? (
          <div>{organData.Address.addressLineOne}</div>
        ) : null}
        {organData.Address.addressLineTwo ? (
          <div>{organData.Address.addressLineTwo}</div>
        ) : null}
        <div>
          {organData.Address.City ? organData.Address.City : null}
          {", "}
          {organData.Address.State ? organData.Address.State : null}{" "}
          {organData.Address.Zip ? organData.Address.Zip : null}
        </div>
        {organData.Phone ? <div>{organData.Phone}</div> : null}
        {organData.Website ? (
          <div className={classes.OrganHeader__Site_link}>
            <a href={organData.Website}>{organData.Website}</a>
          </div>
        ) : null}
      </div>
    </div>
    <div className={classes.OrganHeader__Image}>
      <Image
        src={
          organData.area_organs.data[0].attributes.PrimaryImage.data
            ? organData.area_organs.data[0].attributes.PrimaryImage.data
                .attributes.url
            : organData.area_organs.data[0].attributes.Images.data[0].attributes
                .url
        }
        alt={
          organData.area_organs.data[0].attributes.PrimaryImage.data
            ? organData.area_organs.data[0].attributes.PrimaryImage.data
                .attributes.alternativeText
            : organData.area_organs.data[0].attributes.Images.data[0].attributes
                .alternativeText
        }
        layout="fill"
        objectFit="cover"
      />
    </div>
    {console.log("OD", organData)}
  </div>
);

export default OrganHeader;

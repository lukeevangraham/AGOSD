import Image from "next/image";
import Layout from "../../components/Layout/Layout";
import BoardMember from "../../components/About/BoardMember/BoardMember";
import AlbumPreview from "../../components/About/AlbumPreview/AlbumPreview";
import { getGlobalData } from "../../lib/api";
import { getBoardData, getAboutData } from "../../lib/about";
import { getPhotoAlbums } from "../../lib/photos"

import Fade from "react-reveal";

import classes from "./index.module.scss";

export async function getStaticProps() {
  const [globalData, boardData, aboutData, photoAlbums] = await Promise.all([
    getGlobalData(),
    getBoardData(),
    getAboutData(),
    getPhotoAlbums(1),
  ]);
  return {
    props: { globalData, boardData, aboutData, photoAlbums },
    revalidate: 1,
  };
}

const About = ({ globalData, boardData, aboutData, photoAlbums }) => (
  <Layout globalData={globalData}>
    <div className={classes.About}>
      <div className="row">
        <h1 className="heading-primary">{aboutData.headingPrimary}</h1>
        <div className={classes.About__TopInfo}>
          <Fade left>
            <div>
              <h2 className="heading-secondary">
                {aboutData.headingSecondary}
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: aboutData.topText }}
              ></div>
            </div>
          </Fade>
          <Fade right>
            <div className={classes.About__TopInfo_Image}>
              <Image
                src={aboutData.topImage.data.attributes.url}
                objectFit="cover"
                layout="fill"
              />
            </div>
          </Fade>
        </div>
      </div>

      <section className={classes.About__Values}>
        <div className={classes.About__Values__BGImage}>
          <Image
            src="https://res.cloudinary.com/dhsn4mic4/image/upload/v1661452111/spreckels_Wide_4c8b6f925f.jpg?updated_at=2022-08-25T18:28:33.044Z"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={classes.About__Values__Text}>
          <h2>Our Values</h2>
          <Fade bottom cascade>
            <div className={classes.About__Values__Text__Group}>
              {aboutData.Values.map((value) => {
                let icon = null;

                if (value.Value === "Education") {
                  icon = `../images/sprite.svg#icon-education`;
                }
                if (value.Value === "Community") {
                  icon = `../images/sprite.svg#icon-user-group`;
                }
                if (value.Value === "Inclusiveness") {
                  icon = `../images/sprite.svg#icon-user-plus`;
                }
                if (value.Value === "Diversity") {
                  icon = `../images/sprite.svg#icon-earth`;
                }

                return (
                  <div
                    key={value.id}
                    className={classes.About__Values__Text__Group__Value}
                  >
                    <svg>
                      <use xlinkHref={icon}></use>
                    </svg>
                    <div
                      className={
                        classes.About__Values__Text__Group__Value_value
                      }
                    >
                      {value.Value}
                    </div>
                    <div>{value.Description}</div>
                  </div>
                );
              })}
            </div>
          </Fade>
        </div>
      </section>

      <section>
        <div
          className={`${classes.About__Photos} u-padding-bottom-medium u-padding-top-medium`}
        >
          <h2>Photo Albums</h2>
          <div className={classes.About__Photos__Previews}>
            {photoAlbums.data.map((album) => (
              <AlbumPreview album={album} key={album.id} />
            ))}
          </div>
        </div>
      </section>

      <div className="row">
        <section>
          <div className={classes.About__Board}>
            <h2>Our Board</h2>

            <div className={classes.About__Board__BoardMembers}>
              {boardData.map((member) => (
                <div key={member.id}>
                  <BoardMember member={member} key={member.id} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  </Layout>
);

export default About;

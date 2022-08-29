import Image from "next/image";
import Layout from "../../components/Layout/Layout";
import BoardMember from "../../components/About/BoardMember/BoardMember";
import { getGlobalData } from "../../lib/api";
import { getBoardData, getAboutData } from "../../lib/about";

import Fade from "react-reveal";

import classes from "./index.module.scss";

export async function getStaticProps() {
  const [globalData, boardData, aboutData] = await Promise.all([
    getGlobalData(),
    getBoardData(),
    getAboutData(),
  ]);
  return {
    props: { globalData, boardData, aboutData },
    revalidate: 1,
  };
}

const About = ({ globalData, boardData, aboutData }) => (
  <Layout globalData={globalData}>
    <div className={classes.About}>
      <div className="row">
        <h1 className="heading-primary">About Our Chapter</h1>
        <div className={classes.About__TopInfo}>
          <Fade left>
            <div>
              <h2 className="heading-secondary">
                Supporting organists, choir directors and future organists
              </h2>
              <p>
                The San Diego Chapter of the American Guild of Organists takes
                great pride in its history and seeks innovative ideas to be a
                leader in promoting the organ, organ and choral music, as well
                as providing mutual support for organists and choral directors
                and nurturing future organists. Chartered on March 6, 1922 after
                being established as a &quot;sub-chapter&quot; in 1917, it is
                part of an international professional association serving over
                19,000 members throughout the United States, Europe, Singapore,
                Korea, Taiwan and Sydney, Australia. The chapter hosted regional
                conventions in 1969, 2001, and 2015 and Pipe Organ Encounters in
                1997, 2003, 2006, 2009, 2012, and 2017. We are proud of the
                large number of young organ students who are being trained to
                become future organists by several of our chapter members.
              </p>
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
                  <div key={value.id}>
                    <svg>
                      <use xlinkHref={icon}></use>
                    </svg>
                    <div className={classes.About__Values__Text__Group_value}>
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

      <div className="row">
        <section>
          <div className={classes.About__Board}>
            <h2>Our Board</h2>
            <Fade bottom cascade>
              <div className={classes.About__Board__BoardMembers}>
                {boardData.map((member) => (
                  <div key={member.id}>
                    <BoardMember member={member} key={member.id} />
                  </div>
                ))}
              </div>
            </Fade>
          </div>
        </section>
      </div>
    </div>
  </Layout>
);

export default About;

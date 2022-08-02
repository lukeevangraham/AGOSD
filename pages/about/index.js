import Layout from "../../components/Layout/Layout";
import { getGlobalData } from "../../lib/api";
import { getBoardData } from "../../lib/about";

import classes from "./index.module.scss";

export async function getStaticProps() {
  const [globalData, boardData] = await Promise.all([
    getGlobalData(),
    getBoardData(),
  ]);
  return {
    props: { globalData, boardData },
    revalidate: 1,
  };
}

const About = ({ globalData, boardData }) => (
  <Layout globalData={globalData}>
    <div className={classes.About}>
      <h1>About Our Chapter</h1>
      <section>
        <h2>Supporting organists, choir directeors and future organists</h2>
        <p>
          The San Diego Chapter of the American Guild of Organists takes great
          pride in its history and seeks innovative ideas to be a leader in
          promoting the organ, organ and choral music, as well as providing
          mutual support for organists and choral directors and nurturing future
          organists. Chartered on March 6, 1922 after being established as a
          "sub-chapter" in 1917, it is part of an international professional
          association serving over 19,000 members throughout the United States,
          Europe, Singapore, Korea, Taiwan and Sydney, Australia. The chapter
          hosted regional conventions in 1969, 2001, and 2015 and Pipe Organ
          Encounters in 1997, 2003, 2006, 2009, 2012, and 2017. We are proud of
          the large number of young organ students who are being trained to
          become future organists by several of our chapter members.
        </p>
      </section>
      <section className={classes.About__Values}>
        <h2>Our Values</h2>
        <div className={classes.About__Values__Group}>
          <div>Education</div>
          <div>Community</div>
          <div>Inclusiveness</div>
          <div>Diversity</div>
        </div>
      </section>
      <section>
        <h2>Our Board</h2>
        {boardData.map(member => (
          <div>
            <div>{member.Position}</div>
            <div>
              {member.Prefix ? member.Prefix : null} {member.firstName} {member.lastName}
            </div>
            <div>{member.email}</div>
            <br />
          </div>
        ))}
      </section>
    </div>
  </Layout>
);

export default About;

import { useState } from "react";
import SEO from "../../components/SEO/SEO";
import Layout from "../../components/Layout/Layout";
import { getGlobalData } from "../../lib/api";

import classes from "./index.module.scss";

export async function getStaticProps() {
  const [globalData] = await Promise.all([getGlobalData()]);
  return {
    props: { globalData },
    revalidate: 1,
  };
}

const Contact = ({ globalData }) => {
  const [messageStatus, setMessageStatus] = useState();

  const sendMessage = async (e) => {
    e.preventDefault();

    setMessageStatus(1);

    const res = await fetch("/api/contact", {
      body: JSON.stringify({
        name: e.target.name.value,
        phone: e.target.phone.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    console.log("RES: ", result);
    result.status === 200 ? setMessageStatus(200) : null;
  };

  let contactForm = "";

  switch (messageStatus) {
    case 0:
      break;
    case 200:
      contactForm = (
        <div className={classes.Contact__Success}>
          <h3>Your message was successfully delivered</h3>
        </div>
      );
      break;
    case 1:
      contactForm = <div className={classes.Contact__Success}>Sending...</div>;
      break;
    default:
      contactForm = (
        <>
          <form onSubmit={sendMessage} className={classes.Contact__Form}>
            <input
              type="text"
              className={classes.marginBottom}
              name="name"
              placeholder="Your First & Last Name"
              required
            />
            <input
              type="tel"
              name="phone"
              id="phone"
              className={classes.marginBottom}
              placeholder="Your Phone"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className={classes.marginBottom}
              required
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className={classes.marginBottom}
            ></textarea>
            <button className={classes.Contact__Form__Button}>Submit</button>
          </form>
        </>
      );
      break;
  }

  return (
    <>
      <SEO metaData={{ metaTitle: "Contact" }} />
      <Layout globalData={globalData}>
        <div className={classes.Contact}>
          <div className="row u-padding-bottom-medium">
            <h1 className="heading-primary">Contact Us</h1>
            <div>{contactForm}</div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;

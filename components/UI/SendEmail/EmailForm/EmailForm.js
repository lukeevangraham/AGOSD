import { useState } from "react";
import Button from "../../Button/Button";

import classes from "./EmailForm.module.scss";

const EmailForm = ({ recipient }) => {
  // const [name, setName] = useState(null)
  // const [email, setEmail] = useState(null)
  // const [body, setBody] = useState(null)
  const [messageStatus, setMessageStatus] = useState(null);

  const sendMessage = async (e) => {
    e.preventDefault();

    setMessageStatus(1);

    const res = await fetch("/api/boardEmail", {
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        body: e.target.body.value,
        recipient: recipient,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    result.status == 200 ? setMessageStatus(200) : null;
  };

  let emailForm = "";

  switch (messageStatus) {
    case 0:
      break;
    case 200:
      emailForm = <div>Your message was successfully delivered</div>;
      break;
    case 1:
      emailForm = <div>Sending...</div>;
      break;
    default:
      emailForm = (
        <form onSubmit={sendMessage} className={classes.EmailForm}>
          <div className={classes.EmailForm__group}>
            <input
              type="text"
              className={classes.EmailForm__input}
              placeholder="Your name"
              required
              name="name"
              id="name"
            />
            <label htmlFor="name" className={classes.EmailForm__label}>
              Full name
            </label>
          </div>
          <div className={classes.EmailForm__group}>
            <input
              type="email"
              className={classes.EmailForm__input}
              placeholder="Your email address"
              required
              name="email"
              id="email"
            />
            <label htmlFor="email" className={classes.EmailForm__label}>
              Email address
            </label>
          </div>
          <div className={classes.EmailForm__group}>
            <textarea
              type="textarea"
              className={`${classes.EmailForm__input} ${classes.EmailForm__textfield}`}
              rows="6"
              placeholder="Your message"
              name="body"
              id="body"
            />
            <label htmlFor="body" className={classes.EmailForm__label}>
              Your message
            </label>
          </div>
          <div className={classes.EmailForm__group}>
            <button>Submit</button>
            {/* <Button
              button={{ url: "", text: "submit", type: "primary" }}
            ></Button> */}
          </div>
        </form>
      );
      break;
  }

  return emailForm;
};

export default EmailForm;

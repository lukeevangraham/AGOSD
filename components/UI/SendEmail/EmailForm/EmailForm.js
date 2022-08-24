import { useState } from "react";

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
    console.log("RES: ", result);
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
        <form onSubmit={sendMessage}>
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your Email Address" />
          <input
            type="textarea"
            name="body"
            rows="6"
            placeholder="Your Message"
          />
          <button>Submit</button>
        </form>
      );
      break;
  }

  return emailForm;
};

export default EmailForm;

import { useState } from "react";
import Modal from "../Modal/Modal";
import EmailForm from "./EmailForm/EmailForm";

import classes from "./SendEmail.module.scss";

const SendEmail = ({ collection, contact }) => {
  const [showModal, setShowModal] = useState(false);

  let email = (
    <div className={classes.SendEmail}>
      <svg>
          <use xlinkHref="../images/sprite.svg#icon-envelope"></use>
        </svg>
      <a>
        <div onClick={() => setShowModal(true)}>Email {contact.firstName}</div>
      </a>
    </div>
  );

  if (showModal) {
    email = (
      <>
        <Modal show={showModal} modalClosed={() => setShowModal(false)}>
          <EmailForm recipient={contact.email} />
        </Modal>
        <div onClick={() => setShowModal(true)}>Email {contact.firstName}</div>
      </>
    );
  }

  return <>{email}</>;
};

export default SendEmail;

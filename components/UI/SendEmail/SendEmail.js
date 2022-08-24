import { useState } from "react";
import Modal from "../Modal/Modal";
import EmailForm from "./EmailForm/EmailForm";

const SendEmail = ({ collection, contact }) => {
  const [showModal, setShowModal] = useState(false);

  let email = (
    <div onClick={() => setShowModal(true)}>Email {contact.firstName}</div>
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

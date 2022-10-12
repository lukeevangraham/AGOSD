import Backdrop from "../Backdrop/Backdrop";

import classes from "./Modal.module.scss";

const Modal = ({ show, modalClosed, children }) => (
  <>
    <Backdrop show={show} clicked={modalClosed} />
    <div
      className={classes.Modal}
      style={{ visibility: show ? "visible" : "hidden" }}
    >
      <div className={classes.Modal__close} onClick={modalClosed}>
        X
      </div>
      {children}
    </div>
  </>
);

export default Modal;

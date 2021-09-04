import React from "react";
import { Fragment } from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";

const BackDrop = function (props) {
  return <div onClick={props.onClick} className={classes.backdrop} />;
};
const ModalOverlay = function (props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

function Modal(props) {
  const portalElement = document.getElementById("modal-overlay");
  return (
    <Fragment>
      {ReactDom.createPortal(
        <BackDrop onClick={props.onClick} />,
        portalElement
      )}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;

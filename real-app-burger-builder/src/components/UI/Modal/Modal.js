import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import "./Modal.css";

const Modal = (props) => {
  return (
    <>
      <Backdrop show={props.purchasing} clicked={props.modalClosed} />
      <div
        className="Modal"
        style={{
          transform: props.purchasing ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.purchasing ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default Modal;

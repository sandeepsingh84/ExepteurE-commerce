import React from "react";
import styles from './index.module.css'

const CustomModal = ({ visible, maskClick, children }) => {
  return visible ? (
    <div
      className="fixed h-full w-full bg-black/30 top-0 z-50 "
      onClick={() => {
        maskClick();
      }}
    >
      <div className={`flex justify-center items-center h-full ${styles?.modalBase}`}>
        <div
          className="w-[500px] bg-white "
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {children}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default CustomModal;

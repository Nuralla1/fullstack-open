import React from "react";

const Notification = ({ message, notificationIsError }) => {
  if (message === null) {
    return null;
  }

  return (
    <div className={notificationIsError ? "error" : "success"}>{message}</div>
  );
};

export default Notification;

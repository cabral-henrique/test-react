import React from "react";

import style from "./style.module.scss";

class Notification extends React.Component {
  state = {
    closeNotification: "block",
  };

  onClose = () => {
    this.setState((prevState) => ({
      ...prevState,
      closeNotification: "none",
    }));
  };

  render() {
    const { closeNotification } = this.state;
    const { typeNotification, title, description } = this.props;
    return (
      <div
        className={style.modaNotification}
        style={{
          display: closeNotification,
          backgroundColor:
            typeNotification === "success" ? "#3ab572" : "#c23f3b",
        }}
      >
        <button onClick={() => this.onClose()}>x</button>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    );
  }
}

export default Notification;

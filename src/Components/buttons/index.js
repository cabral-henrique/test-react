import React from "react";

import style from "./style.module.scss";

class Button extends React.Component {
  render() {
    const { label, onClick, onChange, type, color } = this.props;
    return (
      <button
        style={{
          backgroundColor:
            (color === "danger" && "red") ||
            (color === "success" && "green") ||
            (color === "primary" && "#4f4f4f"),
        }}
        type={type}
        onClick={onClick}
        onChange={onChange}
        className={`${style.button}`}
      >
        {label}
      </button>
    );
  }
}

export default Button;

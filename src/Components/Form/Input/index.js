import React from "react";

import InputMask from "react-input-mask";

import style from "./style.module.scss";

class Input extends React.Component {
  render() {
    const {
      value,
      name,
      className,
      required,
      label,
      footer,
      type,
      onChange,
      id,
      placeholder,
      mask,
      pattern,
      title,
    } = this.props;
    return (
      <>
        <div className={style.labelFloat}>
          <label>{label}</label>
          {mask ? (
            <InputMask
              mask={mask}
              maskChar={null}
              value={value}
              onChange={onChange}
              name={name}
              placeholder={placeholder}
              required={required}
              className={`${className}`}
              id={id}
              pattern={pattern}
              title={title}
            />
          ) : (
            <input
              required={required}
              type={type}
              name={name}
              value={value}
              placeholder={placeholder}
              className={`${className}`}
              onChange={onChange}
              id={id}
              pattern={pattern}
              title={title}
            />
          )}
        </div>
        <span className={style.footerInput}>{footer}</span>
      </>
    );
  }
}

export default Input;

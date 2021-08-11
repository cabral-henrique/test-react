import React from "react";

import loadingImg from "../../Assets/Images/loading.gif";

import style from "./style.module.scss";

class Loading extends React.Component {
  render() {
    return (
      <div className={`${style.loading}`}>
        <img src={loadingImg} alt="loading" />
      </div>
    );
  }
}

export default Loading;

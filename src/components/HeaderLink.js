import { NavLink } from "react-router-dom";

import waldo from "../assets/waveWaldo.png";
import React from "react";

const HeaderLink = () => {
  return (
    <NavLink className="headerTitle" to="/">
      <span className="wheres headerWord">Where's </span>
      <span className="waldo headerWord">Waldo</span>
      <img src={waldo} alt="waldo" className="headerWaldo" />
    </NavLink>
  );
};

const MemoizedHeaderLink = React.memo(HeaderLink);
MemoizedHeaderLink.displayName = "HeaderLink";

export default MemoizedHeaderLink;

import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const CollapsiblePanel = ({ title, children, initialCollapse = true }) => {
  const [collapse, setCollapse] = useState(initialCollapse);
  return (
    <div className="collapsible-panel">
      <div
        className="collapsible-panel-header"
        onClick={() => setCollapse(!collapse)}
      >
        <span>{title}</span>
        {collapse ? <FaAngleDown /> : <FaAngleUp />}
      </div>
      <div
        className={`collapsible-panel-content ${collapse ? "collapsed" : ""}`}
      >
        {children}
      </div>
    </div>
  );
};

export default CollapsiblePanel;

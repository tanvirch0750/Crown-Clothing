import React from "react";
import "./custom-button.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

const CustomButton = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;

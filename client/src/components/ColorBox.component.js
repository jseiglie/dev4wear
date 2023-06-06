import React from "react";

export const ColorBoxComponent = (props) => {
  const style = {
    width: "20px",
    height: "20px",
    backgroundColor: props.color,
  };
  return <div style={style}></div>;
};

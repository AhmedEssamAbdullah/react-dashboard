import React from "react";

const Button = ({
  bgColor,
  color,
  size,
  text,
  borderRadius,
  customFunc,
  btnWidth,
}) => {
  return (
    <button
      type="button"
      onClick={customFunc}
      style={{ backgroundColor: bgColor, color, borderRadius, width: btnWidth }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  );
};

export default Button;

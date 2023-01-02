import React from "react";
import PropTypes from "prop-types";

const shapes = { CircleBorder11: "rounded-radius11" };
const variants = { FillDeeppurpleA202: "bg-deep_purple_A202 text-white_A700" };
const sizes = { sm: "p-[2px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["CircleBorder11"]),
  variant: PropTypes.oneOf(["FillDeeppurpleA202"]),
  size: PropTypes.oneOf(["sm"]),
};
Button.defaultProps = {
  className: "",
  shape: "CircleBorder11",
  variant: "FillDeeppurpleA202",
  size: "sm",
};

export { Button };

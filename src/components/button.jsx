import React from "react";
import { IconContext } from "react-icons";

const Button = ({ onClick = () => {}, icon: Icon, children, className }) => {
  return (
    <button
      className={
        className +
        " hover:-translate-y-1 duration-300 ease-in-out transform flex items-center"
      }
      onClick={onClick}
    >
      <IconContext.Provider value={{ className: "icon scale-125" }}>
        {Icon && <Icon />}
      </IconContext.Provider>
      {children}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {},
  children: null,
  className: "",
};

export default Button;

import React, { useContext } from "react";
import { BsSun, BsSunFill } from "react-icons/bs";
import { ThemeContext } from "../context/ThemeContext";
const Button = () => {
  const { handleToggleIcon, isDarkTheme } = useContext(ThemeContext);

  return (
    <div>
      {isDarkTheme ? (
        <BsSun size={32} onClick={handleToggleIcon} />
      ) : (
        <BsSunFill size={32} onClick={handleToggleIcon} />
      )}
    </div>
  );
};

export default Button;

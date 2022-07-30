import React, { createContext, useEffect, useState } from "react";

const themes = {
  dark: {
    backgroundColor: "#000",
    color: "#fff",
  },

  light: {
    backgroundColor: "#fff",
    color: "#000",
  },
};

const initialState = {
  theme: themes.light,
  handleToggleIcon: () => {},
  isDarkTheme: false,
};

const ThemeContext = createContext(initialState);

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const extractDarkTheme = JSON.parse(localStorage.getItem("isDarkTheme"));

    setIsDarkTheme(extractDarkTheme);
  }, []);

  const handleToggleIcon = () => {
    const updateIsDarkTheme = !isDarkTheme;
    localStorage.setItem("isDarkTheme", JSON.stringify(updateIsDarkTheme));
    setIsDarkTheme(updateIsDarkTheme);
  };

  const theme = isDarkTheme ? themes.dark : themes.light;

  return (
    <ThemeContext.Provider value={(theme, handleToggleIcon, isDarkTheme)}>
      {children}
    </ThemeContext.Provider>
  );
};

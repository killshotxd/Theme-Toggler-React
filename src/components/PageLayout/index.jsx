import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const PageLayout = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="page-content-wrapper"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <header>Header</header>
      <main>Toggling Theme using Context</main>
      <footer>Footer</footer>
    </div>
  );
};

export default PageLayout;

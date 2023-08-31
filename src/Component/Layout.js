import React, { useContext } from "react";
import { ThemeProvider, ThemeProvider } from "../context/ThemeContext";
export const ThemeContext = createContext();

function Layout({ startingTheme, children }) {
  return (
    <ThemeContext.Provider startingTheme={startingTheme}>
      <LayoutNoThemeProvider>{children}</LayoutNoThemeProvider>
    </ThemeContext.Provider>
  );
}

function LayoutNoThemeProvider({ startingTheme, children }) {
  //   const [theme, setTheme] = useState(startingTheme);
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        theme == "light" ? "container-fluid light" : "container-fluid dark"
      }
    >
      {children}
    </div>
  );
}
export default Layout;

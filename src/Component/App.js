import Header from "./Header";
import { createContext, useState } from "react";
import Speakers from "./Speakers";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <Header />
      <Speakers />
    </ThemeContext.Provider>
  );
}
export default App;

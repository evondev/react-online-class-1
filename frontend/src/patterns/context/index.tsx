import { createContext, useContext, useEffect, useState } from "react";
interface ThemeProviderProps {
  mode: "dark" | "light";
  setMode: (mode: "dark" | "light") => void;
}
const ThemeContext = createContext<ThemeProviderProps | undefined>(undefined);

function ThemeProvider({ children }: { children?: React.ReactNode }) {
  const [mode, setMode] = useState<"dark" | "light">("dark");
  const handleThemeChange = () => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  };
  useEffect(() => {
    handleThemeChange();
  }, [mode]);
  const value = { mode, setMode };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
export { ThemeProvider, useTheme };

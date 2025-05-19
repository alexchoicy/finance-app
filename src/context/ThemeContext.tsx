import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState, useCallback, useContext } from "react";
import { useColorScheme } from "react-native";

type Theme = "light" | "dark";

export const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({
  theme: "light",
  setTheme: () => {},
});

type ThemeOptions = "auto" | "light" | "dark";
const THEME_STORAGE_KEY = "@theme";
const DEFAULT_THEME: Theme = "light";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const systemColorScheme = useColorScheme();
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);

  const getSavedTheme = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
      return savedTheme as ThemeOptions | null;
    } catch {
      return null;
    }
  };

  const setTheme = useCallback(async (newTheme: Theme) => {
    try {
      await AsyncStorage.setItem(THEME_STORAGE_KEY, newTheme);
    } catch {}
    setThemeState(newTheme);
  }, []);

  useEffect(() => {
    const loadTheme = async () => {
      const saved = await getSavedTheme();

      if (saved !== "auto" && (saved === "dark" || saved === "light")) {
        setThemeState(saved);
        return;
      }

      if (systemColorScheme === "dark" || systemColorScheme === "light") {
        setThemeState(systemColorScheme);
        return;
      }

      setThemeState(DEFAULT_THEME);
    };

    loadTheme();
  }, [systemColorScheme]);
  console.log("ThemeProvider", theme);
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);

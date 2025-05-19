import { useTheme } from "@/context/ThemeContext";
import { View as DefaultView } from "react-native";

export type ViewProps = DefaultView["props"];

export function View(props: ViewProps) {
  const { ...otherProps } = props;
  const { theme } = useTheme();

  const backgroundColor = {
    light: "#fff",
    dark: "#000",
  };

  return <DefaultView style={{ backgroundColor: backgroundColor[theme] }} {...otherProps} />;
}

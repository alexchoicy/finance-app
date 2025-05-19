import { useTheme } from "@/context/ThemeContext";
import { Text as DefaultText } from "react-native";

export type TextProps = DefaultText["props"];

export function Text(props: TextProps) {
  const { ...otherProps } = props;
  const { theme } = useTheme();

  const textColor = {
    light: "#000",
    dark: "#fff",
  };

  return <DefaultText style={{ color: textColor[theme] }} {...otherProps} />;
}

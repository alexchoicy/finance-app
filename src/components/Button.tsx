import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Text } from "@/components/Text";
import { cn } from "@/lib/utils/styleUtil";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  className?: string;
  textClassName?: string;
  type?: "primary" | "secondary" | "danger";
}

const typeClassMap: Record<NonNullable<ButtonProps["type"]>, { button: string; text: string }> = {
  primary: {
    button: "bg-blue-600",
    text: "text-white",
  },
  secondary: {
    button: "bg-gray-200",
    text: "text-gray-900",
  },
  danger: {
    button: "bg-red-600",
    text: "text-white",
  },
};

export function Button({ title, className, textClassName, type = "primary", ...props }: ButtonProps) {
  const typeClasses = typeClassMap[type];

  return (
    <TouchableOpacity
      className={cn("px-4 py-2 rounded-lg items-center justify-center", typeClasses.button, className)}
      activeOpacity={0.8}
      {...props}
    >
      <Text className={cn("font-semibold", typeClasses.text, textClassName)}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;

import clsx from "clsx";
import { View, Text } from "react-native";
import { cn } from "@/lib/utils/styleUtil";
import { useTheme } from "@/context/ThemeContext";
import FontAwesome from "@expo/vector-icons/FontAwesome";
export type AccountMeta = {
  statementDay?: number;
  dueDay?: number;
  foreignFee?: string;
};

export interface AccountCardProps {
  name: string;
  type: AccountType;
  currency: string;
  balance: number;
  tags: string[];
  meta?: AccountMeta;
}

export type AccountType = "Savings" | "Credit";

export const accountTypeConfig: Record<
  AccountType,
  {
    icon: keyof typeof FontAwesome.glyphMap;
    color: string;
  }
> = {
  Savings: {
    icon: "bank",
    color: "bg-green-600",
  },
  Credit: {
    icon: "credit-card",
    color: "bg-credit",
  },
};

export default function AccountCard({ name, type, currency, balance, tags, meta = {} }: AccountCardProps) {
  const isNegative = balance < 0;

  const { theme } = useTheme();
  const iconColor = theme === "dark" ? "#fff" : "#222";

  const config = accountTypeConfig[type];

  return (
    <View
      className={
        "rounded-lg border bg-card shadow-sm relative overflow-hidden py-3 px-4 mb-4 border-borderColor dark:border-borderColor"
      }
    >
      <Text className={cn("absolute left-0 top-0 bottom-0 w-2", config.color)}></Text>
      <View className="flex-row items-center">
        <View className="pr-1">
          <FontAwesome name={config.icon} size={12} color={iconColor} />
        </View>
        <Text className="text-foreground font-bold text-base">{name}</Text>
      </View>

      <View className="flex-row flex-wrap mt-1 mb-2">
        {tags.map((tag) => (
          <View
            key={tag}
            className="inline-flex flex-row items-center mr-2 mb-1 px-2.5 py-0.5 rounded-full bg-card border border-borderColor dark:border-borderColor"
          >
            <FontAwesome name="tag" color={iconColor} style={{ marginRight: 4 }} size={12} />
            <Text className="text-xs text-foreground">{tag}</Text>
          </View>
        ))}
      </View>

      <View className="flex flex-row justify-between items-center mb-2">
        <Text className="text-sm text-gray-500 dark:text-gray-200 items-center">Balance</Text>
        <Text className={clsx("text-lg font-semibold", isNegative ? "text-red-600" : "text-green-600")}>
          {balance.toLocaleString()} {currency}
        </Text>
      </View>

      {type === "Credit" && meta && (
        <View className="mt-2 space-y-0.5 flex flex-row justify-between">
          <Text className="text-xs text-gray-600 dark:text-gray-400">Statement: Day {meta.statementDay}</Text>
          <Text className="text-xs text-gray-600 dark:text-gray-400">Due: Day {meta.dueDay}</Text>
          <Text className="text-xs text-gray-600 dark:text-gray-400">Foreign Fee: {meta.foreignFee}</Text>
        </View>
      )}
    </View>
  );
}

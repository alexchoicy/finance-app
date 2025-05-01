import clsx from "clsx";
import { View, Text } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
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

export type AccountType =
    | "Savings"
    | "Credit"



export const accountTypeConfig: Record<
    AccountType,
    {
        icon: React.ReactNode;
        color: string;
    }
> = {
    Savings: {
        icon: <FontAwesome name="bank" size={24} color="black" />,
        color: "bg-green-600",
    },
    Credit: {
        icon: <FontAwesome name="credit-card" size={24} color="black" />,
        color: "bg-red-600",
    },
};

export default function AccountCard({
    name,
    type,
    currency,
    balance,
    tags,
    meta = {},
}: AccountCardProps) {
    const isNegative = balance < 0;

    const config = accountTypeConfig[type];

    return (
        <View
            className={"rounded-lg border bg-white shadow-sm relative overflow-hidden py-3 px-4 mb-4"}
        >
            <Text className={clsx("absolute left-0 top-0 bottom-0 w-2", config.color)}></Text>
            <Text className="font-bold text-base">{name}</Text>

            <View className="flex-row flex-wrap mt-1 mb-2">
                {tags.map((tag) => (
                    <View
                        key={tag}
                        className="inline-flex flex-row items-center mr-2 mb-1 px-2.5 py-0.5 rounded-full bg-blue-100"
                    >
                        <FontAwesome name="tag" color="black" className="mr-2 w-3 h-3" />
                        <Text className="text-xs text-blue-700">{tag}</Text>
                    </View>
                ))}
            </View>

            <View className="flex flex-row justify-between items-center mb-2">
                <Text className="text-sm text-gray-500">Balance</Text>
                <Text
                    className={clsx(
                        "text-lg font-semibold",
                        isNegative ? "text-red-600" : "text-black"
                    )}
                >
                    {balance.toLocaleString()} {currency}
                </Text>
            </View>

            {type === "Credit" && meta && (
                <View className="mt-2 space-y-0.5 flex flex-row justify-between">
                    <Text className="text-xs text-gray-600">Statement: Day {meta.statementDay}</Text>
                    <Text className="text-xs text-gray-600">Due: Day {meta.dueDay}</Text>
                    <Text className="text-xs text-gray-600">Foreign Fee: {meta.foreignFee}</Text>
                </View>
            )}
        </View>
    );
};

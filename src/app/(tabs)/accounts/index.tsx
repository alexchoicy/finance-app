import AccountCard from "@/components/accounts/accountCard";
import { View, Text, Button, ScrollView } from "react-native";

export default function AccountsPage() {
  return (
    <View className="px-4 pt-4">
      <View className="flex-row mb-4 justify-between items-center">
        <Text className="text-2xl font-bold">Accounts</Text>

        <Button title="Add Account" onPress={() => {}} color="black" />
      </View>
      <ScrollView>
        <AccountCard name="HSBC Savings" type="Savings" currency="HKD" balance={5000} tags={["Savings", "HKD"]} />

        <AccountCard
          name="Visa Credit"
          type="Credit"
          currency="USD"
          balance={-350}
          tags={["Credit", "USD"]}
          meta={{ statementDay: 15, dueDay: 5, foreignFee: "3%" }}
        />
        <AccountCard
          name="Visa Credit"
          type="Credit"
          currency="USD"
          balance={-350}
          tags={["Credit", "USD"]}
          meta={{ statementDay: 15, dueDay: 5, foreignFee: "3%" }}
        />
        <AccountCard
          name="Visa Credit"
          type="Credit"
          currency="USD"
          balance={-350}
          tags={["Credit", "USD"]}
          meta={{ statementDay: 15, dueDay: 5, foreignFee: "3%" }}
        />
        <AccountCard
          name="Visa Credit"
          type="Credit"
          currency="USD"
          balance={-350}
          tags={["Credit", "USD"]}
          meta={{ statementDay: 15, dueDay: 5, foreignFee: "3%" }}
        />
        <AccountCard
          name="Visa Credit"
          type="Credit"
          currency="USD"
          balance={-350}
          tags={["Credit", "USD"]}
          meta={{ statementDay: 15, dueDay: 5, foreignFee: "3%" }}
        />
        <AccountCard
          name="Visa Credit"
          type="Credit"
          currency="USD"
          balance={-350}
          tags={["Credit", "USD"]}
          meta={{ statementDay: 15, dueDay: 5, foreignFee: "3%" }}
        />
        <AccountCard
          name="Visa Credit"
          type="Credit"
          currency="USD"
          balance={-350}
          tags={["Credit", "USD"]}
          meta={{ statementDay: 15, dueDay: 5, foreignFee: "3%" }}
        />
        <AccountCard
          name="Visa Credit"
          type="Credit"
          currency="USD"
          balance={-350}
          tags={["Credit", "USD"]}
          meta={{ statementDay: 15, dueDay: 5, foreignFee: "3%" }}
        />
        <AccountCard
          name="Visa Credit"
          type="Credit"
          currency="USD"
          balance={-350}
          tags={["Credit", "USD"]}
          meta={{ statementDay: 15, dueDay: 5, foreignFee: "3%" }}
        />
        <AccountCard
          name="Visa Credit"
          type="Credit"
          currency="USD"
          balance={-350}
          tags={["Credit", "USD"]}
          meta={{ statementDay: 15, dueDay: 5, foreignFee: "3%" }}
        />
      </ScrollView>
    </View>
  );
}

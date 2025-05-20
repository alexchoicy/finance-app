import { Modal, ScrollView } from "react-native";
import { Text } from "@/components/Text";
import { View } from "@/components/View";

import AccountCard from "@/components/accounts/accountCard";
import { Button } from "@/components/Button";
import { Link } from "expo-router";
import { useState } from "react";

export default function AccountsPage() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View className="px-4 pt-4 flex-1">
      <View className="flex-row mb-4 justify-between items-center">
        <Text className="text-2xl font-bold">Accounts</Text>

        {/* <Link href={"/(tabs)/(accounts)/addAccount"} asChild> */}
        <Button title="Add Account" type="primary" onPress={() => setModalVisible(true)} />
        {/* </Link> */}
      </View>

      <Modal visible={modalVisible} transparent animationType="slide" onRequestClose={() => setModalVisible(false)}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#0008" }}>
          <View style={{ backgroundColor: "#fff", padding: 24, borderRadius: 12 }}>
            <Text>Add Account Modal</Text>
            <Button title="Close" type="secondary" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>

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

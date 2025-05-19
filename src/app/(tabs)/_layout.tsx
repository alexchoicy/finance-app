import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useTheme } from "@/context/ThemeContext";
import { View } from "@/components/View";

const tabBarStyles = {
  light: {
    backgroundColor: "#fff",
    borderTopStartRadius: 5,
    borderTopWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
  dark: {
    backgroundColor: "#222",
    borderTopStartRadius: 5,
    borderTopWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
};

const getTabBarStyle = (theme: "light" | "dark") => tabBarStyles[theme] || tabBarStyles.light;

export default function TabLayout() {
  const { theme } = useTheme();

  return (
    <View className="flex-1">
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: getTabBarStyle(theme),
        }}
      >
        <Tabs.Screen
          name="accounts/index"
          options={{
            title: "Accounts",
            headerShown: false,
            tabBarIcon: ({ color }) => <MaterialIcons size={28} name="account-balance-wallet" color={color} />,
          }}
        />
      </Tabs>
    </View>
  );
}

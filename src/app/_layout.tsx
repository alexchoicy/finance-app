import { Stack } from "expo-router/stack";
import { SafeAreaView, StatusBar } from "react-native";

import "@/app/global.css";

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <StatusBar barStyle="dark-content" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  );
}

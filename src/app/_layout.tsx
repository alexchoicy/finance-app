import { Stack } from "expo-router/stack";
import { View, Text, Button, SafeAreaView, StatusBar, ScrollView } from "react-native";

import "@/app/global.css";

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
    </SafeAreaView>
  );}

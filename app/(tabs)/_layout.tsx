import { AntDesign } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false }}>
      <Tabs.Screen
        name="accounts/index"
        options={{
          title: 'Accounts',
          headerShown: false,
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="account-balance-wallet" color={color} />,
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: 'Transactions',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome6 size={28} name="money-bill-transfer" color={color} />,
        }}
      />
      <Tabs.Screen
        name='actions'
        options={{
          title: 'Actions',
          headerShown: false,
          tabBarIcon: ({ color }) => <AntDesign size={28} name="upcircle" color={color} />,
        }}
      />
      <Tabs.Screen
        name='recurring'
        options={{
          title: 'Recurring',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome5 size={28} name="recycle" color={color} />,
        }}
      />
      <Tabs.Screen
        name='settings'
        options={{
          title: 'Settings',
          headerShown: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}

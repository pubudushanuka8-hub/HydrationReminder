import * as Notifications from 'expo-notifications';
import { Tabs } from 'expo-router';
import { Text } from 'react-native';

// Global Foreground Handler
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#0EA5E9' }}>
      <Tabs.Screen
        name="index"
        options={{ title: 'Reminder', tabBarIcon: () => <Text>⏰</Text> }}
      />
      <Tabs.Screen
        name="tips"
        options={{ title: 'Tips', tabBarIcon: () => <Text>💧</Text> }}
      />
      <Tabs.Screen
        name="about"
        options={{ title: 'About', tabBarIcon: () => <Text>ℹ️</Text> }}
      />
    </Tabs>
  );
}
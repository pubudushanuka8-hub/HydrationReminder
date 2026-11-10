import * as Notifications from 'expo-notifications';
import { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function ReminderTab() {
  const [isReminding, setIsReminding] = useState(false);
  const [message, setMessage] = useState("Time to drink a glass of water!");
  const [intervalMinutes, setIntervalMinutes] = useState(1);

  // Request notification permissions on mount
  useEffect(() => {
    async function requestPermissions() {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Permission required',
          'We need notifications to remind you to drink water!'
        );
      }
    }
    requestPermissions();
  }, []);

  // Schedule a notification
  async function scheduleReminder() {
    await Notifications.requestPermissionsAsync(); // Safe check just in case
    await Notifications.cancelAllScheduledNotificationsAsync(); // Clear old ones first

    // Schedule the new notification
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Hydration Alert 💧",
        body: message, 
        sound: true, 
      },
      // Trigger the notification after the specified interval
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: intervalMinutes * 60, // Convert minutes to seconds
        repeats: true
      },
    });

    setIsReminding(true);
    Alert.alert("Set!", `Reminding you every ${intervalMinutes} minutes.`); 
  }

  // Stop reminders
  async function stopReminder() {
    await Notifications.cancelAllScheduledNotificationsAsync();
    setIsReminding(false);
    Alert.alert("Stopped", "Reminders cancelled.");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🥤</Text>

      <Text style={styles.label}>Add a Custom Message</Text>
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={(text) => setMessage(text)}
      />

      <Text style={styles.label}>Set Interval (minutes)</Text>
      <TextInput
        style={styles.input}
        value={intervalMinutes.toString()}
        onChangeText={(text) => setIntervalMinutes(parseInt(text) || 1)}
        keyboardType="numeric"
      />

      <Text style={styles.status}>
        Status: {isReminding ? "Active 🟢" : "Inactive 🔴"}
      </Text>

      <Button title="Start Reminders" onPress={scheduleReminder} color="#0EA5E9" />
      <View style={{ height: 10 }} />
      <Button title="Stop Reminders" onPress={stopReminder} color="#EF4444" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1,backgroundColor:"#c3dff1" , padding: 20, alignItems: 'center', justifyContent: 'center' },
  emoji: { fontSize: 60, marginBottom: 20 },
  label: { fontSize: 20, color: '#297266', fontWeight: 'bold', marginTop: 15 },
  input: { borderWidth: 1,  backgroundColor: "#fff", borderColor: '#afe6f8', padding: 15, width: '90%', borderRadius: 5, marginTop: 5 },
  status: { fontSize: 20, color: '#297266', marginVertical: 20, fontWeight: 'bold' }
});
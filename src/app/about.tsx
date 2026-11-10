import { StyleSheet, Text, View } from 'react-native';

export default function AboutTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About This App</Text>
      <Text style={styles.text}>
        Built for Mobile Application Development Lab 6. Demonstrates local notifications and Expo Router tab navigation.
      </Text>
      <Text style={styles.text}>
        Developed with React Native and Expo.{"\n"}Created by MPS Bandara.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30, backgroundColor: '#F5F5F5' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#000' },
  text: { fontSize: 16, textAlign: 'center', marginVertical: 15, color: '#555', lineHeight: 24 }
});
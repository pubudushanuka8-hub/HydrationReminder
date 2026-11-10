import { StyleSheet, Text, View } from 'react-native';

export default function TipsTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Why Hydrate? 🌊</Text>
      <Text style={styles.listItem}>Boosts skin health and beauty</Text>
      <Text style={styles.listItem}>Regulates body temperature</Text>
      <Text style={styles.listItem}>Flushes body waste</Text>
      <Text style={styles.listItem}>Maintains blood pressure</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20, backgroundColor: '#F5F5F5' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#0EA5E9', marginBottom: 20 },
  listItem: { fontSize: 16, marginVertical: 8, color: '#333' }
});
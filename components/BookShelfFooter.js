import { View, Text, StyleSheet } from 'react-native';

export default function BookShelfFooter() {
  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>Tous droits réservés – BookShelf, 2024</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EE9972',
    paddingVertical: 20,
    paddingBottom: 32,
  },
  footerText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
  },
});

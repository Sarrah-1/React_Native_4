import { View, Text, StyleSheet } from 'react-native';

export default function BookShelfHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>BookShelf</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EE9972',
    paddingTop: 56,
    paddingBottom: 32,
    paddingHorizontal: 32,
  },
  headerText: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
  },
});

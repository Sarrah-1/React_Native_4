import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import BookShelfHeader from './components/BookShelfHeader';
import WelcomeScreen from './components/WelcomeScreen';
import BookShelfFooter from './components/BookShelfFooter';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <BookShelfHeader />
      <WelcomeScreen />
      <BookShelfFooter />
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#333333',
  },
});

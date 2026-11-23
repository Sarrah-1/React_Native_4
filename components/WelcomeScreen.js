import { ScrollView, Text, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ScrollView
      style={styles.screenContainer}
      contentContainerStyle={styles.content}
      indicatorStyle="white"
    >
      <Text style={styles.title}>Bienvenue sur BookShelf</Text>
      <Text style={styles.description}>
        BookShelf est votre bibliothèque numérique personnelle. Parcourez vos
        livres préférés, gardez une trace de vos lectures et découvrez de
        nouveaux titres, le tout dans une application simple et agréable à
        utiliser.
      </Text>
      <Text style={styles.description}>
        Que vous soyez amateur de romans, de science-fiction ou de livres
        techniques, BookShelf vous aide à organiser votre collection et à ne
        jamais perdre le fil de vos lectures.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#333333',
  },
  content: {
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#EDEFEE',
    marginBottom: 16,
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
    color: '#EDEFEE',
    opacity: 0.8,
    marginBottom: 12,
  },
});

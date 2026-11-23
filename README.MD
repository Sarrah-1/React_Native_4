# Lab 4 : Styliser un composant avec StyleSheet – BookShelf

Application React Native (Expo) qui affiche l'écran d'accueil d'une bibliothèque numérique, **BookShelf**.
L'objectif du lab est d'appliquer une charte graphique cohérente, puis d'extraire tous les styles inline vers l'API `StyleSheet`.

## Aperçu

<p>
  <img src="./screenshots/1.jpeg" alt="Écran d'accueil BookShelf" width="300" />
</p>

## Palette de couleurs

| Couleur   | Utilisation                         |
|-----------|-------------------------------------|
| `#EE9972` | Accent : header et footer           |
| `#333333` | Fond sombre de l'écran d'accueil    |
| `#EDEFEE` | Texte clair (titre et description)  |
| `black`   | Texte du header et du footer        |
| `white`   | Disponible dans la palette          |

## Structure du projet

```
BookShelfApp/
├── App.js
├── components/
│   ├── BookShelfHeader.js
│   ├── WelcomeScreen.js
│   └── BookShelfFooter.js
└── screenshots/
    └── 1.jpeg
```

- **`App.js`** : assemble l'en-tête, l'écran d'accueil et le pied de page dans un conteneur `flex: 1` sur fond `#333333`.
- **`BookShelfHeader.js`** : bandeau `#EE9972`, titre centré de 30 px en noir, padding généreux.
- **`WelcomeScreen.js`** : `ScrollView` sur fond sombre avec `indicatorStyle="white"`, titre de bienvenue clair et paragraphes descriptifs légèrement moins contrastés.
- **`BookShelfFooter.js`** : bandeau `#EE9972` avec la mention de droits centrée et une marge basse.

## Ce qui a été fait

1. **Nouvelle charte** : suppression des couleurs de départ (violet, etc.) au profit de la palette BookShelf.
2. **Extraction des styles** : chaque composant importe `StyleSheet` et définit ses styles à la fin du fichier avec `StyleSheet.create`.
3. **Noms explicites** : `container`, `headerText`, `footerText`, `screenContainer`, `title`, `description`, `appContainer`.
4. **JSX allégé** : plus aucun style inline, le code des composants est plus lisible.

Exemple (header) :

```jsx
<View style={styles.container}>
  <Text style={styles.headerText}>BookShelf</Text>
</View>

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
```

## Lancer le projet

Prérequis : Node.js, npm et l'application **Expo Go** sur le téléphone (ou un émulateur).

```bash
npx create-expo-app BookShelfApp --template blank
cd BookShelfApp
# copier App.js et le dossier components/ dans le projet
npx expo start
```

Scanner ensuite le QR code avec Expo Go. Si le téléphone n'arrive pas à joindre l'ordinateur, utiliser :

```bash
npx expo start --tunnel
```

> Remarque : le bouton bleu avec l'engrenage visible en haut à droite de la capture est le bouton de menu développeur d'Expo Go. Il ne fait pas partie de l'application.

## Notions validées

- Styliser des composants React Native de façon cohérente
- Utiliser `StyleSheet.create` pour séparer présentation et logique
- Garder des composants propres et faciles à faire évoluer

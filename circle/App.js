// import { StatusBar } from 'expo-status-bar';
// import { SafeAreaView,Text, View } from 'react-native';
// import styles from './styles/styles';
// import NavBar from './components/navBar/navBar';


// export default function App() {
//   return (
//     <View style={styles.purple}>
//       <SafeAreaView style={styles.safeArea}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <NavBar/>
//       <StatusBar style="auto" />
//       </SafeAreaView>
//     </View>
//   );
// }

import React from 'react';
import AppNavigator from './AppNavigator';

const App = () => {
  return <AppNavigator />;
};

export default App;

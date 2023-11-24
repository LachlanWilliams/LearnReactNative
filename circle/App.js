import { StatusBar } from 'expo-status-bar';
import { SafeAreaView,Text, View } from 'react-native';
import styles from './styles/styles';
import NavBar from './components/navBar';


export default function App() {
  return (
    <View style={styles.purple}>
      <SafeAreaView style={styles.safeArea}>
      <Text>Open up App.js to start working on your app!</Text>
      <NavBar/>
      <StatusBar style="auto" />
      </SafeAreaView>
    </View>
  );
}
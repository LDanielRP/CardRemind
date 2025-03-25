import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const logo = require('./assets/logo-jaques.png');

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={logo}

      />
      <Text style={{ fontSize: 20, }}>CardRemind</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50
  },
  logo: {
    width: 300,
    height: 200,
  },
});

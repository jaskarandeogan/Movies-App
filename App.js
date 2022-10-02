import { StyleSheet, Text, View } from 'react-native';
import AppStack from './components/stacks/AppStack';
import { NativeBaseProvider } from 'native-base'


export default function App() {
  return (
    <NativeBaseProvider>
      <AppStack />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

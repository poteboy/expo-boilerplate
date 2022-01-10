import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoot} from '@src/root'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import { theme } from '@src/styles/theme'

export default function App() {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
        <AppRoot />
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}

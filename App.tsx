/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import BottomTabNavigator from './src/navigators/BottomTabNavigator';
import { Provider } from 'react-redux';
import { setupStore } from './src/store/store';

const store = setupStore();


function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
            <BottomTabNavigator />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}


export default App;

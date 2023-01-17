import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { Navigator } from './src/navigator';

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
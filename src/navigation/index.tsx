import {DefaultTheme, NavigationContainer} from '@react-navigation/native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../styles';
import {MainStack} from './Main';
import {styles} from './styles';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.white,
  },
};

export const AppNavigation = () => {
  return (
    <SafeAreaView style={styles.root}>
      <NavigationContainer theme={Theme}>
        <MainStack />
      </NavigationContainer>
    </SafeAreaView>
  );
};

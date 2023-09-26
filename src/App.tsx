/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {store} from '@store';
import '@utils/responsive';
import {FC} from 'react';
import {PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {AppNavigation} from './navigation';

export const App: FC = () => {
  return (
    <PaperProvider>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </PaperProvider>
  );
};

export default App;

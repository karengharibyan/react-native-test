import {MAIN_STACK_SCREENS} from '@enums';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {MainDriverScreen, MainDriversScreen} from '@screens';

export type MainStackParamList = {
  [MAIN_STACK_SCREENS.DRIVERS]: undefined;
  [MAIN_STACK_SCREENS.DRIVER]: {
    driverId: string;
  };
};

export type MainStackParamProps<T extends keyof MainStackParamList> =
  NativeStackScreenProps<MainStackParamList, T>;

export type MainScreenNavigationProp =
  NativeStackNavigationProp<MainStackParamList>;

const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName={MAIN_STACK_SCREENS.DRIVERS}>
      <Stack.Screen
        name={MAIN_STACK_SCREENS.DRIVERS}
        component={MainDriversScreen}
      />
      <Stack.Screen
        name={MAIN_STACK_SCREENS.DRIVER}
        component={MainDriverScreen}
      />
    </Stack.Navigator>
  );
};

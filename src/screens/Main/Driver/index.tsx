import {Driver} from '@components';
import {MAIN_STACK_SCREENS} from '@enums';
import {MainStackParamProps} from '@navigation/Main';
import {useAppSelector} from '@store/hooks';
import {selectDriverByDriverId} from '@store/reducers/drivers/selectors';
import React, {FC} from 'react';
import {ScrollView} from 'react-native';
import {styles} from './styles';

export const MainDriverScreen: FC<
  MainStackParamProps<MAIN_STACK_SCREENS.DRIVER>
> = ({route: {params}}) => {
  // first variant with filtering from existing data
  const driver = useAppSelector(state =>
    selectDriverByDriverId(state.drivers, params.driverId),
  );

  // Second variant with fetching single driver from API
  // const dispatch = useAppDispatch();
  // const {driver} = useAppSelector(state => state.drivers);

  // useEffect(() => {
  //   dispatch(getDriver(params.driverId));
  // }, [params, dispatch]);

  return (
    <ScrollView style={styles.root}>
      <Driver driver={driver} />
    </ScrollView>
  );
};

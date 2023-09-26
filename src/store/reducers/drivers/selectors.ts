import {Driver} from '@types';
import {createSelector} from 'reselect';
import {DriversState} from './entities';

export const selectDriverByDriverId = createSelector(
  [(state: DriversState) => state.drivers, (state, driverId) => driverId],
  (drivers, driverId) => {
    return drivers.find((_driver: Driver) => _driver.driverId === driverId);
  },
);

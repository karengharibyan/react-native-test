import {createSlice, isPending, isRejected} from '@reduxjs/toolkit';
import {getDriver, getDrivers} from './asyncThunks';
import {DriversState} from './entities';

const initialState: DriversState = {
  status: 'idle',
  error: null,
  drivers: [],
  totalDrivers: 0,
};

export const driversSlice = createSlice({
  name: 'drivers',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getDrivers.fulfilled, (state, action) => {
        state.status = 'idle';
        state.drivers = action.payload.DriverTable.Drivers;
        state.totalDrivers = parseInt(action.payload.total, 2);
      })
      .addCase(getDriver.fulfilled, (state, action) => {
        state.status = 'idle';
        state.driver = action.payload.DriverTable.Drivers[0] ?? undefined;
      })
      .addMatcher(isPending, state => {
        state.status = 'loading';
      })
      .addMatcher(isRejected, (state, action) => {
        state.status = 'failed';
        if (action?.payload) {
          state.error = action?.payload;
        } else {
          state.error = action.error;
        }
      });
  },
});

export default driversSlice.reducer;

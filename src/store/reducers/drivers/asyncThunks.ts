import {createAsyncThunk} from '@reduxjs/toolkit';
import {ValidationErrors} from '@store/entities';
import {Mrdata} from '@types';
import axios, {AxiosError} from 'axios';
import driversApi from './driversApi';
import {IGetDriversParams} from './entities';

export const getDrivers = createAsyncThunk<Mrdata, IGetDriversParams>(
  'drivers/getDrivers',
  async (params, {rejectWithValue}) => {
    try {
      const {data} = await driversApi.getDrivers(params);
      return data.MRData;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        let error: AxiosError<ValidationErrors> = err;
        if (!error.response) {
          throw err;
        }
        return rejectWithValue(error.response.data);
      }
      throw err;
    }
  },
);

export const getDriver = createAsyncThunk<Mrdata, string>(
  'drivers/getDriver',
  async (driverId, {rejectWithValue}) => {
    try {
      const {data} = await driversApi.getDriver(driverId);
      return data.MRData;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        let error: AxiosError<ValidationErrors> = err;
        if (!error.response) {
          throw err;
        }
        return rejectWithValue(error.response.data);
      }
      throw err;
    }
  },
);

import {Driver, Mrdata} from '@types';

export interface DriversState {
  status: 'idle' | 'loading' | 'failed';
  error?: unknown;
  drivers: Driver[];
  driver?: Driver;
  totalDrivers: number;
}

export interface IGetDriversResData {
  MRData: Mrdata;
}

export interface IGetDriversParams {
  limit: number;
  offset: number;
}

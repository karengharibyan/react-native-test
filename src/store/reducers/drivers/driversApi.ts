import {httpClient} from '@utils';
import {IGetDriversParams, IGetDriversResData} from './entities';

const getDrivers = async (params: IGetDriversParams) => {
  return await httpClient.get<IGetDriversResData>('/f1/drivers.json', {
    params,
  });
};

const getDriver = async (driverId: string) => {
  return await httpClient.get<IGetDriversResData>(
    `/f1/drivers/${driverId}.json`,
  );
};

export default {
  getDrivers,
  getDriver,
};

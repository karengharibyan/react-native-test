import configs from '@configs';
import {logger} from '@utils';
import DeviceInfo from 'react-native-device-info';
import {MMKV} from 'react-native-mmkv';

class Storage {
  private storage!: MMKV;

  constructor() {
    this.storage = new MMKV({
      id: DeviceInfo.getDeviceId(),
      encryptionKey: configs.STORAGE_ENCYPTION_KEY,
    });
  }

  storeData = async (key: string, data: string) => {
    try {
      await this.storage.set(key, data);
    } catch (error) {
      logger.warn(error);
    }
  };
  setItem = async (key: string) => {
    try {
      const value = await this.storage.getString(key);
      if (value !== null) {
        return value;
      }
      return null;
    } catch (error) {
      logger.warn(error);
    }
  };
  removeItem = async (key: string) => {
    try {
      await this.storage.delete(key);
    } catch (error) {
      logger.warn(error);
    }
  };
}

export const storage = new Storage();

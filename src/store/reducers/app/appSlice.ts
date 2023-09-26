import {createSlice} from '@reduxjs/toolkit';
import {AppState} from './entities';

const initialState: AppState = {
  status: 'idle',
  error: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});

export default appSlice.reducer;

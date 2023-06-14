import { createSlice } from '@reduxjs/toolkit';

export const menu = createSlice({
  name: 'menu',
  initialState: {
    textColor: ''
  },
  reducers: {
    setTextColor: (state, action) => {
      state.textColor = action.payload;
    }
  }
});

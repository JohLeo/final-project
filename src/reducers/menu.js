import { createSlice } from '@reduxjs/toolkit';

const menu = createSlice({
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

export const { setTextColor } = menu.actions
export default menu

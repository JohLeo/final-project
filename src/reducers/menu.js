/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

const menu = createSlice({
  name: 'menu',
  initialState: {
    textColor: '' // Initial state of the `menu` slice with an empty `textColor` value.
  },
  reducers: {
    // Reducer function to handle the `setTextColor` action
    setTextColor: (state, action) => {
      state.textColor = action.payload; // Update the `textColor` value in the state with the payload value from the action.
    }
  }
});

export const { setTextColor } = menu.actions // Extract the `setTextColor` action creator from the `menu` slice actions.
export default menu // Export the `menu` slice reducer.

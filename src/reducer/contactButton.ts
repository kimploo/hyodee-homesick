import { createSlice } from '@reduxjs/toolkit';

export const contactButtonSlice = createSlice({
  name: 'contactButton',
  initialState: {
    location: {
      x: 145,
      y: 1090,
    },
    btnWidth: 80,
    btnHeight: 70,
    gap: {
      phoneMsg: 105,
      between: 330,
    },
  },
  reducers: {
    changeLocation: (state, action) => undefined,
  },
});

export const { changeLocation } = contactButtonSlice.actions;
export default contactButtonSlice.reducer;

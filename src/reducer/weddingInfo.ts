import { createSlice } from '@reduxjs/toolkit';

export const weddingInfoSlice = createSlice({
  name: 'weddingInfo',
  initialState: {
    location: {
      lat: 37.5675763,
      lng: 126.970047,
    },
  },
  reducers: {
    changeLocation: (state, action) => {
      if (state.location && action.payload) {
        state.location.lat = action.payload.lat;
        state.location.lng = action.payload.lng;
      }
      return;
    },
  },
});

export const { changeLocation } = weddingInfoSlice.actions;
export default weddingInfoSlice.reducer;

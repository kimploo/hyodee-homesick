import { createSlice } from '@reduxjs/toolkit';

export const weddingInfoSlice = createSlice({
  name: 'weddingInfo',
  initialState: {
    location: {
      lat: 37.5675763,
      lng: 126.970047,
    },
    people: {
      bride: {
        personName: '김효정',
        phone: '010-5777-2349',
      },
      groom: {
        personName: '김홍식',
        phone: '010-3078-1438',
      },
      brideMother: {
        personName: '정혜영',
        phone: '010-5472-0416',
      },
      brideFather: {
        personName: '김기주',
        phone: '010-9173-8199',
      },
      groomMother: {
        personName: '김미현',
        phone: '010-7224-1438',
      },
      groomFather: {
        personName: '김용성',
        phone: '010-4022-1438',
      },
    },
    celebrationMessage: '결혼을 축하합니다!',
  },
  reducers: {
    changeLocation: (state, action) => {
      if (state.location && action.payload) {
        state.location.lat = action.payload.lat;
        state.location.lng = action.payload.lng;
      }
      return;
    },
    changePhone: (state, action) => {
      return;
    },
    changePersonInfo: (state, action) => {
      return;
    },
  },
});

export const { changeLocation, changePersonInfo } = weddingInfoSlice.actions;
export default weddingInfoSlice.reducer;

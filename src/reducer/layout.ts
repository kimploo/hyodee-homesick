import { createSlice } from '@reduxjs/toolkit';

export const layoutSlice = createSlice({
  name: 'layout',
  initialState: {
    font: {
      serif: 'NanumMyeongjo,Nanum Myeongjo',
      sans: 'Noto Sans KR',
    },
    viewBox: {
      width: 800,
    },
  },
  reducers: {
    changeWidth: (state, action) => {
      state.viewBox.width = action.payload;
      return;
    },
    changeFont: (state, action) => {
      const { type } = action;
      if (type === 'serif') state.font.serif = action.payload;
      if (type === 'sans') state.font.sans = action.payload;
      return;
    },
  },
});

export const { changeWidth, changeFont } = layoutSlice.actions;
export default layoutSlice.reducer;

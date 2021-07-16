import { createSlice } from '@reduxjs/toolkit';

export const layoutSlice = createSlice({
  name: 'layout',
  initialState: {
    font: {
      serif: `"NanumMyeongjo", "Nanum Myeongjo", Constantia, "Lucida Bright", Lucidabright, "Lucida Serif", Lucida, "DejaVu Serif", "Bitstream Vera Serif", "Liberation Serif", Georgia, serif`,
      sans: `"Noto Sans KR", Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif`,
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

import { createSlice } from '@reduxjs/toolkit';

const {
  REACT_APP_BRIDE_NAME,
  REACT_APP_BRIDE_PHONE,
  REACT_APP_GROOM_NAME,
  REACT_APP_GROOM_PHONE,
  REACT_APP_BRIDE_MOTHER_NAME,
  REACT_APP_BRIDE_MOTHER_PHONE,
  REACT_APP_BRIDE_FATHER_NAME,
  REACT_APP_BRIDE_FATHER_PHONE,
  REACT_APP_GROOM_MOTHER_NAME,
  REACT_APP_GROOM_MOTHER_PHONE,
  REACT_APP_GROOM_FATHER_NAME,
  REACT_APP_GROOM_FATHER_PHONE,
  REACT_APP_BRIDE_ACCOUNT_NUMBER,
  REACT_APP_BRIDE_ACCOUNT_BANK,
  REACT_APP_BRIDE_PARENT_ACCOUNT_NUMBER,
  REACT_APP_BRIDE_PARENT_ACCOUNT_BANK,
  REACT_APP_BRIDE_PARENT_ACCOUNT_PERSON_NAME,
  REACT_APP_GROOM_ACCOUNT_NUMBER,
  REACT_APP_GROOM_ACCOUNT_BANK,
  REACT_APP_GROOM_PARENT_ACCOUNT_NUMBER,
  REACT_APP_GROOM_PARENT_ACCOUNT_BANK,
  REACT_APP_GROOM_PARENT_ACCOUNT_PERSON_NAME,
} = process.env;

export const weddingInfoSlice = createSlice({
  name: 'weddingInfo',
  initialState: {
    location: {
      lat: 37.5675763,
      lng: 126.970047,
    },
    weddingLocation: {
      address_name: '서울 중구 정동 17-1',
      category_group_code: '',
      category_group_name: '',
      category_name: '문화,예술 > 종교 > 종교단체',
      distance: '',
      id: 11299593,
      phone: '02-6364-2200',
      place_name: '프란치스코 교육회관',
      place_url: 'http://place.map.kakao.com/11299593',
      road_address_name: '서울 중구 정동길 9',
      x: 126.970158188598,
      y: 37.5674512562959,
      lat: 37.5674512562959,
      lng: 126.970158188598,
    },
    parkingLocation: {
      address_name: '서울 중구 정동 22-8',
      category_group_code: 'PK6',
      category_group_name: '주차장',
      category_name: '교통,수송 > 교통시설 > 주차장',
      distance: '',
      id: 26864644,
      phone: '',
      place_name: '경향신문 주차장',
      place_url: 'http://place.map.kakao.com/26864644',
      road_address_name: '서울 중구 정동길 3',
      x: 126.970212322466,
      y: 37.5679486196149,
      lat: 37.5679486196149,
      lng: 126.970212322466,
    },
    people: {
      bride: {
        personName: REACT_APP_BRIDE_NAME,
        phone: REACT_APP_BRIDE_PHONE,
      },
      groom: {
        personName: REACT_APP_GROOM_NAME,
        phone: REACT_APP_GROOM_PHONE,
      },
      brideMother: {
        personName: REACT_APP_BRIDE_MOTHER_NAME,
        phone: REACT_APP_BRIDE_MOTHER_PHONE,
      },
      brideFather: {
        personName: REACT_APP_BRIDE_FATHER_NAME,
        phone: REACT_APP_BRIDE_FATHER_PHONE,
      },
      groomMother: {
        personName: REACT_APP_GROOM_MOTHER_NAME,
        phone: REACT_APP_GROOM_MOTHER_PHONE,
      },
      groomFather: {
        personName: REACT_APP_GROOM_FATHER_NAME,
        phone: REACT_APP_GROOM_FATHER_PHONE,
      },
    },
    account: {
      brideParent: {
        number: REACT_APP_BRIDE_PARENT_ACCOUNT_NUMBER,
        bank: REACT_APP_BRIDE_PARENT_ACCOUNT_BANK,
        personName: REACT_APP_BRIDE_PARENT_ACCOUNT_PERSON_NAME,
      },
      bride: {
        number: REACT_APP_BRIDE_ACCOUNT_NUMBER,
        bank: REACT_APP_BRIDE_ACCOUNT_BANK,
        personName: REACT_APP_BRIDE_NAME,
      },
      groomParent: {
        number: REACT_APP_GROOM_PARENT_ACCOUNT_NUMBER,
        bank: REACT_APP_GROOM_PARENT_ACCOUNT_BANK,
        personName: REACT_APP_GROOM_PARENT_ACCOUNT_PERSON_NAME,
      },
      groom: {
        number: REACT_APP_GROOM_ACCOUNT_NUMBER,
        bank: REACT_APP_GROOM_ACCOUNT_BANK,
        personName: REACT_APP_GROOM_NAME,
      },
    },
    photos: [
      {
        message: '서로 배려하며 살겠습니다',
        index: 1,
      },
      {
        message: '아름다운 신랑',
        index: 2,
      },
      {
        message: '바람에 다 날아갈 뻔 했던 날',
        index: 3,
      },
      {
        message: '개발자와 디자이너 입니다',
        index: 4,
      },
      {
        message: '스티브 잡스의 후예들',
        index: 5,
      },
      {
        message: '얘 자꾸 웃어요',
        index: 6,
      },
      {
        message: '벚꽃 아래 우리',
        index: 7,
      },
    ],
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

/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { CalendarAndContact } from './Pages/CalendarAndContact';
import { HappyMoment } from './Pages/HappyMoment';
import { Main } from './Pages/Main';
import { Notice } from './Pages/Notice';
import { Location } from './Pages/Location';
import { Account } from './Pages/Account';
import styled from 'styled-components';
import * as Kakao from './lib/kakao';

export const App = () => {
  useEffect(() => {
    let isKakaoInit,
      kakaoAPIKey = '';
    const { NODE_ENV } = process.env;

    // 카카오 API Key 가져오기
    if (NODE_ENV === 'development') {
      const { REACT_APP_KAKAO_JAVASCRIPT_SECRET } = process.env;
      kakaoAPIKey = REACT_APP_KAKAO_JAVASCRIPT_SECRET ? REACT_APP_KAKAO_JAVASCRIPT_SECRET : '';
      console.log(kakaoAPIKey);
    } else {
      kakaoAPIKey = 'fd901c5bd21886c01d5081ffe941de69';
      // TODO : Lambda에서 정보 받아오기 (CORS 적용)
    }

    // 카카오 API 실행 및 중복 실행 방지
    try {
      !isKakaoInit ? Kakao.init(kakaoAPIKey) : undefined;
      const temp = Kakao.isInitialized();
      isKakaoInit = temp;
    } catch (e) {
      console.warn('already initialized');
    }

    NODE_ENV === 'development' ? console.log('Kakao?', isKakaoInit) : undefined;
  }, []);

  const BeigeBackgroundDiv = styled.div`
    background-color: #fffcf6;
    display: flex;
    justify-content: center;
  `;

  const GreenBackgroundDiv = styled.div`
    background-color: #1e603f;
    display: flex;
    justify-content: center;
  `;

  interface WrapperProps {
    h: string;
  }

  const WrapperDiv = styled.div<WrapperProps>`
    @media (max-width: 767px) {
      min-width: 100vw;
      min-height: inherit;
    }
    min-width: 800px;
    min-height: ${(props) => props.h || '1724.01px'};
  `;

  return (
    <div className="App">
      <GlobalStyle />
      <BeigeBackgroundDiv>
        <WrapperDiv h={'1724.01px'}>
          <Main />
        </WrapperDiv>
      </BeigeBackgroundDiv>
      <GreenBackgroundDiv>
        <WrapperDiv h={'1504.89px'}>
          <Notice />
        </WrapperDiv>
      </GreenBackgroundDiv>
      <BeigeBackgroundDiv>
        <WrapperDiv h={'1920.86px'}>
          <CalendarAndContact />
        </WrapperDiv>
      </BeigeBackgroundDiv>
      <GreenBackgroundDiv>
        <WrapperDiv h={'1096.91px'}>
          <HappyMoment />
        </WrapperDiv>
      </GreenBackgroundDiv>
      <BeigeBackgroundDiv>
        <WrapperDiv h={'1770.1px'}>
          <Location />
        </WrapperDiv>
      </BeigeBackgroundDiv>
      <GreenBackgroundDiv>
        <WrapperDiv h={'781.3px'}>
          <Account />
        </WrapperDiv>
      </GreenBackgroundDiv>
    </div>
  );
};

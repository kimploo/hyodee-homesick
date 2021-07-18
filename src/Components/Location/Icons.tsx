import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { changeLocation } from '../../reducer/weddingInfo';
import { NaverMapsImage } from './image/NaverMaps';
import { KakaoNaviImage } from './image/KakaoNavi';
import { TmapImage } from './image/Tmap';
import { KakaoMapImage } from './image/KakaoMap';

export const Icons = () => {
  const {
    weddingInfo: {
      location: { lat, lng },
    },
  } = useSelector(changeLocation).payload;

  return (
    <>
      <circle className="Location__cls-1" cx={319.38} cy={1028.31} r={46.77} />
      <g clipPath="url(#Location__clip-path)">
        <g id="Location__tcsjAE_tif">
          <KakaoNaviImage />
        </g>
      </g>
      <circle cx={481.47} cy={1028.31} r={46.77} fill="#cecece" />
      <g clipPath="url(#Location__clip-path-2)">
        <a href={`navermaps://?menu=location&pinType=place&lat=${lat}&lng=${lng}&title=프란치스코 교육회관`}>
          <g id="Location__Qqn4Zq">
            <NaverMapsImage />
          </g>
        </a>
      </g>
      <circle cx={481.47} cy={1028.31} r={46.77} fill="none" strokeMiterlimit={10} stroke="#d6d5d4" strokeWidth={0.47} />
      <g clipPath="url(#Location__clip-path-3)">
        <g id="Location___1jHuxz" data-name="1jHuxz">
          <a href={`tmap://route?goalx=126.970047&goaly=37.5675763&goalname=프란치스코 교육회관`}>
            <TmapImage />
          </a>
        </g>
      </g>
      <path
        d="M157.3 981.54a46.77 46.77 0 1046.77 46.77 46.77 46.77 0 00-46.77-46.77zm4.26 79.47c-15.08 3.15-30.77-5.52-36.58-19.67-6-14.67-.25-30 11.59-39.64a18.19 18.19 0 0112.19-4c5.79-3.07 12.89-3.8 18.5-.74 11.61 6.32 19.78 16.84 21.09 30.28 1.65 17.27-10.6 30.39-26.79 33.76z"
        fill="#fe1d05"
      />
      <circle className="Location__cls-4" cx={643.55} cy={1028.31} r={46.77} />
      <g clipPath="url(#Location__clip-path-4)">
        <KakaoMapImage />
      </g>
    </>
  );
};

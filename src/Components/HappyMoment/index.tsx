import { useState } from 'react';
import { useSelector } from 'react-redux';
import { changeWidth, changeFont } from '../../reducer/layout';
import Carousel from 'react-bootstrap/Carousel';

export default function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  const {
    layout: {
      font: { sans, serif },
    },
  } = useSelector(changeFont).payload;
  const {
    layout: {
      viewBox: { width },
    },
  } = useSelector(changeWidth).payload;

  const carouselLocation = {
    x: 69.44,
    y: 215.8,
    width: 661.12,
  };

  const [CarouselIndex, setCarouselIndex] = useState(0);

  const handleCarousel = (isPlus: boolean) => {
    console.log('clicked');
    if (isPlus && CarouselIndex >= 1) return;
    if (!isPlus && CarouselIndex <= 0) return;
    if (isPlus === true) setCarouselIndex(CarouselIndex + 1);
    if (isPlus === false) setCarouselIndex(CarouselIndex - 1);
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox={`0 0 ${800} 1096.91`} {...props}>
      <defs>
        <linearGradient
          id="HappyMoment-cls-999-linearGradient"
          x1={-41.66}
          y1={883.16}
          x2={847.63}
          y2={883.16}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.13} stopOpacity={0} />
          <stop offset={0.37} />
          <stop offset={0.67} />
          <stop offset={0.86} stopOpacity={0} />
        </linearGradient>
        {/* <clipPath id="clip-path" transform="translate(110.84)">
          <path fill="#FFFFFF" d="M69.44 215.8h661.12v697.16H69.44z" />
        </clipPath> */}
        <pattern id="img1" patternUnits="userSpaceOnUse" width="100%" height="100%">
          <image
            x={carouselLocation.x}
            y={carouselLocation.y}
            width={700}
            style={{
              transition: '1s',
              transform: `translate(${661.12 * 0 - 661.12 * CarouselIndex}px, 0)`,
            }}
            xlinkHref="https://hyodee-homesick.s3.ap-northeast-2.amazonaws.com/wedding-photo/001.jpeg"
          />
          <image
            x={carouselLocation.x}
            y={carouselLocation.y}
            width={700}
            style={{
              transition: '1s',
              transform: `translate(${661.12 * 1 - 661.12 * CarouselIndex}px, 0)`,
            }}
            xlinkHref="https://hyodee-homesick.s3.ap-northeast-2.amazonaws.com/wedding-photo/002.jpeg"
          />
        </pattern>
        <style>
          {`
            .carousel-indicators {
              display: none;
            }
            .HappyMoment-cls-5 {
              fill: none;
              stroke: #fffae3;
              stroke-miterlimit: 10;
            }
            .HappyMoment-cls-7 {
              fill: none;
              stroke: #143f28;
              stroke-miterlimit: 10;
              stroke-width: 3px;
            }
            .hiddenButton {
              fill: #1e603f;
            }
          `}
        </style>
      </defs>
      <g id="\uB808\uC774\uC5B4_2" data-name="\uB808\uC774\uC5B4 2">
        <path fill="#1e603f" d="M0 0h800v1096.91H0z" />
        <text transform="translate(268.28 137.37)" fontSize={37} fill="#ffce99" fontFamily={serif} fontWeight={800} letterSpacing=".1em">
          행복한 순간들
        </text>
        <circle cx={291.14} cy={983.39} r={5.79} fill="#fffae3" />
        <circle className="HappyMoment-cls-5" cx={334.68} cy={983.39} r={5.79} />
        <circle className="HappyMoment-cls-5" cx={378.23} cy={983.39} r={5.79} />
        <circle className="HappyMoment-cls-5" cx={421.77} cy={983.39} r={5.79} />
        <circle className="HappyMoment-cls-5" cx={465.32} cy={983.39} r={5.79} />
        <circle className="HappyMoment-cls-5" cx={508.86} cy={983.39} r={5.79} />
        <path d="M69.44 215.8h661.12v697.16H69.44z" fill={`url(#img${1})`} />;
        {/* <path className="HappyMoment-cls-7" d="M37.25 566.45l-13.41-13.41 13.41-13.42M762.75 539.62l13.41 13.42-13.41 13.41" /> */}
        <path opacity={0.5} fill="url(#HappyMoment-cls-999-linearGradient)" d="M69.44 853.36h661.12v59.6H69.44z" />
        <text
          className="HappyMoment-cls-999"
          transform="matrix(.99 0 0 1 328.59 892.08)"
          fontSize={25}
          fill="#fffcf6"
          fontFamily={sans}
          fontWeight={400}
        >
          {'\uC544\uB984\uB2E4\uC6B4 \uC2E0\uB791'}
        </text>
        <g name="left-button">
          <polyline className="HappyMoment-cls-7" points="762.75,539.62 776.16,553.04 762.75,566.45" />
          <rect
            className="hiddenButton"
            opacity={0}
            x={762.75}
            y={539.62}
            width={20}
            height={30}
            onClick={() => handleCarousel(true)}
          ></rect>
        </g>
        <g name="right-button">
          <polyline className="HappyMoment-cls-7" points="37.25,566.45 23.84,553.04 37.25,539.62" />
          <rect
            className="hiddenButton"
            opacity={0}
            x={23.84}
            y={539.62}
            width={20}
            height={30}
            onClick={() => handleCarousel(false)}
          ></rect>
        </g>
      </g>
    </svg>
  );
}

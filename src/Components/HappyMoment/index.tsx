import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { changeWidth, changeFont } from '../../reducer/layout';
import { changeLocation } from '../../reducer/weddingInfo';

interface Photo {
  message: string;
  index: number;
}

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
  const {
    weddingInfo: { photos },
  } = useSelector(changeLocation).payload;

  const carouselLocation = {
    x: 69.44,
    y: 215.8,
    width: 661.12,
  };

  const [carouselIndex, setCarouselIndex] = useState(0);
  let xDown = 0;
  let yDown = 0;

  const handleCarousel = (isPlus: boolean) => {
    if (isPlus && carouselIndex >= photos.length - 1) return;
    if (!isPlus && carouselIndex <= 0) return;
    if (isPlus === true) setCarouselIndex(carouselIndex + 1);
    if (isPlus === false) setCarouselIndex(carouselIndex - 1);
    return;
  };

  const getTouches = (event: React.TouchEvent) => {
    return event.touches;
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    const firstTouch = getTouches(event)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    if (!xDown || !yDown) {
      return;
    }

    const xUp = event.touches[0].clientX;
    const yUp = event.touches[0].clientY;

    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        handleCarousel(true);
      } else {
        handleCarousel(false);
      }
    } else {
      if (yDiff > 0) {
        /* down swipe */
      } else {
        /* up swipe */
      }
    }
    /* reset values */
    xDown = 0;
    yDown = 0;
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox={`0 0 ${width} 1096.91`} {...props}>
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
          {photos.map((photo: Photo) => (
            <image
              key={photo.index}
              x={carouselLocation.x}
              y={carouselLocation.y}
              width={661}
              style={{
                transition: '1s',
                transform: `translate(${661.12 * (photo.index - 1) - 661.12 * carouselIndex}px, 0)`,
              }}
              xlinkHref={`https://hyodee-homesick.s3.ap-northeast-2.amazonaws.com/wedding-photo/cropped+0${photo.index}.jpeg`}
            ></image>
          ))}
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
      <g id="\uB808\uC774\uC5B4_2" data-name="\uB808\uC774\uC5B4 2" onTouchMove={handleTouchMove} onTouchStart={handleTouchStart}>
        <path fill="#1e603f" d="M0 0h800v1096.91H0z" />
        <text transform="translate(268.28 137.37)" fontSize={37} fill="#ffce99" fontFamily={serif} fontWeight={800} letterSpacing=".1em">
          행복한 순간들
        </text>
        <circle cx={400 - 43.54 * 3 + carouselIndex * 43.54} cy={983.39} r={5.79} fill="#fffae3" />
        <circle className="HappyMoment-cls-5" cx={400 - 43.54 * 3} cy={983.39} r={5.79} />
        <circle className="HappyMoment-cls-5" cx={400 - 43.54 * 2} cy={983.39} r={5.79} />
        <circle className="HappyMoment-cls-5" cx={400 - 43.54 * 1} cy={983.39} r={5.79} />
        <circle className="HappyMoment-cls-5" cx={400} cy={983.39} r={5.79} />
        <circle className="HappyMoment-cls-5" cx={400 + 43.54 * 1} cy={983.39} r={5.79} />
        <circle className="HappyMoment-cls-5" cx={400 + 43.54 * 2} cy={983.39} r={5.79} />
        <circle className="HappyMoment-cls-5" cx={400 + 43.54 * 3} cy={983.39} r={5.79} />
        <path d="M69.44 215.8h661.12v697.16H69.44z" fill={`url(#img${1})`} />;
        {/* <path className="HappyMoment-cls-7" d="M37.25 566.45l-13.41-13.41 13.41-13.42M762.75 539.62l13.41 13.42-13.41 13.41" /> */}
        <rect x={69.44} y={853.36} width={661.12} height={59.6} fill="url(#HappyMoment-cls-999-linearGradient)" opacity={0.5}></rect>
        <text
          className="HappyMoment-cls-999"
          x={69.44 + 661.12 / 2}
          y={853.36 + 59.6 / 2}
          fontSize={25}
          fill="#fffcf6"
          fontFamily={sans}
          fontWeight={400}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {photos[carouselIndex].message}
        </text>
        <g name="left-button">
          <polyline className="HappyMoment-cls-7" points="762.75,539.62 776.16,553.04 762.75,566.45" />
          <rect className="hiddenButton" opacity={0} x={700} y={480} width={100} height={150} onClick={() => handleCarousel(true)}></rect>
        </g>
        <g name="right-button">
          <polyline className="HappyMoment-cls-7" points="37.25,566.45 23.84,553.04 37.25,539.62" />
          <rect className="hiddenButton" opacity={0} x={0} y={480} width={100} height={150} onClick={() => handleCarousel(false)}></rect>
        </g>
      </g>
    </svg>
  );
}

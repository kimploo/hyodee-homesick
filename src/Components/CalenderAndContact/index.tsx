import { useSelector } from 'react-redux';
import { changeWidth, changeFont } from '../../reducer/layout';

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

  const getDaysLeft = () => {
    let result;
    try {
      result = Math.floor(new Date(1634976000000 - Number(new Date())).getTime() / 1000 / 60 / 60 / 24);
    } catch (e) {
      result = '00';
    }
    return result;
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1920.86" {...props}>
      <defs>
        <style>
          {`
            .CalendarAndContact-cls-10 {
              fill: #fffcf6;
            }
            .CalendarAndContact-cls-3 {
              font-size: 27.14px;
              font-family: ${sans};
              font-weight: 500;
            }
            .CalendarAndContact-cls-23,
            .CalendarAndContact-cls-3 {
              fill: #898989;
            }
            .CalendarAndContact-cls-4 {
              fill: #1e603f;
            }
            .CalendarAndContact-cls-16,
            .CalendarAndContact-cls-23,
            .CalendarAndContact-cls-4,
            .CalendarAndContact-cls-5 {
              font-family: ${sans};
              font-weight: 400;
            }
            .CalendarAndContact-cls-25,
            .CalendarAndContact-cls-26,
            .CalendarAndContact-cls-5 {
              fill: #443d39;
            }
            .CalendarAndContact-cls-5 {
              font-size: 32.22px;
            }
            .CalendarAndContact-cls-6 {
              fill: #388256;
            }
            .CalendarAndContact-cls-11,
            .CalendarAndContact-cls-12,
            .CalendarAndContact-cls-21,
            .CalendarAndContact-cls-7 {
              fill: none;
            }
            .CalendarAndContact-cls-12,
            .CalendarAndContact-cls-7 {
              stroke: #faf6dd;
            }
            .CalendarAndContact-cls-12,
            .CalendarAndContact-cls-21,
            .CalendarAndContact-cls-7 {
              stroke-miterlimit: 10;
            }
            .CalendarAndContact-cls-7 {
              stroke-width: 1.15px;
            }
            .CalendarAndContact-cls-8 {
              fill: #f7c9dd;
            }
            .CalendarAndContact-cls-10,
            .CalendarAndContact-cls-11,
            .CalendarAndContact-cls-8 {
              stroke: #326e4c;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-width: 1.2px;
            }
            .CalendarAndContact-cls-9 {
              fill: #326e4c;
            }
            .CalendarAndContact-cls-12 {
              stroke-width: 1.4px;
            }
            .CalendarAndContact-cls-16,
            .CalendarAndContact-cls-17 {
              font-size: 25px;
            }
            .CalendarAndContact-cls-16,
            .CalendarAndContact-cls-17,
            .CalendarAndContact-cls-24 {
              fill: #606060;
            }
            .CalendarAndContact-cls-17 {
              font-family: ${sans};
              font-weight: 100;
            }
            .CalendarAndContact-cls-21 {
              stroke: #7c7c7c;
              stroke-width: 0.53px;
            }
            .CalendarAndContact-cls-23 {
              font-size: 26.14px;
            }
            .CalendarAndContact-cls-25,
            .CalendarAndContact-cls-26 {
              font-size: 31.03px;
            }
            .CalendarAndContact-cls-25 {
              letter-spacing: 0;
            }
          `}
        </style>
      </defs>
      <g id="\uB808\uC774\uC5B4_2" data-name="\uB808\uC774\uC5B4 2">
        <path fill="#fffcf6" d="M0 0h800v1920.86H0z" />
        <text
          transform="translate(267.8 1291.82)"
          fill="#ad7e5e"
          fontSize={30}
          fontFamily="NanumMyeongjo,Nanum Myeongjo"
          fontWeight="bold"
          letterSpacing=".1em"
        >
          혼주에게 연락하기
        </text>
        <text className="CalendarAndContact-cls-3" transform="matrix(.99 0 0 1 491.28 1039.67)">
          신부
        </text>
        <text className="CalendarAndContact-cls-5" x={491.28 + 56.01} y={1039.67}>
          김효정
        </text>
        <path
          className="CalendarAndContact-cls-6"
          d="M508.52 1106.58a2.66 2.66 0 01-1.14 2.87c-2.28 1.73-2.46 4.08-1.7 6.59a14.2 14.2 0 007.42 8.88 5.29 5.29 0 006.24-.59 2.41 2.41 0 012.76-.35 8.19 8.19 0 012 1.24 21.23 21.23 0 015.21 6.89c.94 2.11.61 3.25-1.22 4.65a9.68 9.68 0 01-9.29 1.39 26.76 26.76 0 01-9.79-5.9 50.31 50.31 0 01-12.88-17.35c-1.54-3.5-2.56-7.13-2.06-11a9.39 9.39 0 014.48-6.69 2.34 2.34 0 012.46 0 8.7 8.7 0 011.88 1.23 21 21 0 015.14 6.76c.18.4.32.9.49 1.38zM594.47 1104.58h37.66v24.18h-37.66z"
        />
        <path className="CalendarAndContact-cls-7" d="M594.47 1104.58l18.83 12.09 18.83-12.09" />
        <path
          className="CalendarAndContact-cls-6"
          d="M182.48 1106.58a2.67 2.67 0 01-1.15 2.87c-2.27 1.73-2.46 4.08-1.69 6.59a14.2 14.2 0 007.42 8.88 5.28 5.28 0 006.23-.59 2.43 2.43 0 012.77-.35 8.13 8.13 0 012 1.24 19.55 19.55 0 016.13 9.47c-3.39 4-7.27 4.76-11.42 3.46a26.76 26.76 0 01-9.79-5.9 50.31 50.31 0 01-12.88-17.35 20.49 20.49 0 01-2.06-11 9.36 9.36 0 014.48-6.69 2.34 2.34 0 012.46 0 8.4 8.4 0 011.87 1.23 20.93 20.93 0 015.15 6.76c.17.4.31.9.48 1.38zM268.43 1104.58h37.66v24.18h-37.66z"
        />
        <path className="CalendarAndContact-cls-7" d="M268.43 1104.58l18.83 12.09 18.83-12.09" />
        <text className="CalendarAndContact-cls-3" transform="matrix(.99 0 0 1 165.24 1039.67)">
          {'\uC2E0\uB791'}
          <tspan className="CalendarAndContact-cls-5" x={56.01} y={0}>
            {'\uAE40\uD64D\uC2DD'}
          </tspan>
        </text>
        <path className="CalendarAndContact-cls-8" d="M500.76 964.14s-5.67-125.42 61.49-125.42c0 0 63.15-.52 63.15 125.42" />
        <path
          className="CalendarAndContact-cls-9"
          d="M608.64 955.62c9.48-2.51 4.54-18.49 1.11-29.84-1.53-5-2.86-10.23-2.86-15.51 0-5 2.07-9.7 3.21-14.55 2.82-12.1-.29-24.93-5.1-36.29-3.25-7.68-7.38-15.11-13.36-20.61s-14-8.86-21.81-7.49h-12.32c-7.79-1.37-15.84 2-21.82 7.49s-10.11 12.93-13.36 20.61c-4.81 11.36-7.92 24.19-5.1 36.29 1.14 4.85 3.21 9.55 3.21 14.55 0 5.28-1.68 10.37-2.86 15.51-2.84 12.43-7.86 27.33 1.62 29.84"
        />
        <path
          className="CalendarAndContact-cls-10"
          d="M591.17 888.52a5.52 5.52 0 014.64-2.58 2.47 2.47 0 011.46.42c.94.7 1 2.07.9 3.23a40 40 0 01-2.48 9.64 3.67 3.67 0 01-1.73 2.38 1.19 1.19 0 01-.67.08c-.56-.13-.84-.74-1-1.27M534.31 890.39c-.66-1.11-3.09-4.46-4.25-4.45a2.22 2.22 0 00-1.47.5c-.94.81-1 2.41-.89 3.76a53.76 53.76 0 002.47 11.26c.35 1.11.79 2.34 1.74 2.77a1 1 0 00.67.1c.56-.15.83-.86 1-1.49M625.4 964.14a127 127 0 00-47.51-15.39v-30.44h-29.74v30.44a127 127 0 00-47.51 15.39"
        />
        <path
          className="CalendarAndContact-cls-10"
          d="M553.46 853.41c-.49 7.8-2.52 17.41-1.66 25.16 2.7-.19 7.92-.31 10.62-.37 4.08-.08 6.24 0 10.31.25.75-7.29 2.1-16.32.19-23.3 3.34 6.6 6.89 15.31 6.64 23 0 0 3.23 5.36 13.16 10.05l.08.9s2.33 23.55-9.91 33.35c0 0-9.8 9.46-19.92 9.3-10.12.16-19.92-9.3-19.92-9.3-12.24-9.8-9.8-33.87-9.8-33.87 6.81-3.46 7.47-3.92 12.41-9.78-.14-7.35 3.81-18.44 7.8-25.4"
        />
        <circle className="CalendarAndContact-cls-8" cx={529.52} cy={900.89} r={3.46} />
        <circle className="CalendarAndContact-cls-8" cx={596.6} cy={900.89} r={3.46} />
        <path
          className="CalendarAndContact-cls-11"
          d="M541.86 886.31a9.5 9.5 0 014.74-2.31 12 12 0 016.64 1.07M572.26 884.7a13.84 13.84 0 0111.65.28M560.55 910.56c4.4.48 13-1.74 13-.15.81 1.94-5.23 5.49-8.82 6.2-3.74.73-8.07-.92-10.82-3.41-4.44-3.99 5.09-2.81 6.64-2.64zM558.94 901.43s3.1 4.28 7.13 0"
        />
        <path
          className="CalendarAndContact-cls-9"
          d="M575.62 893.74c2.9 0 2.9-4.5 0-4.5s-2.9 4.5 0 4.5zM549.15 893.89c2.89 0 2.9-4.5 0-4.5s-2.9 4.5 0 4.5z"
        />
        <path
          className="CalendarAndContact-cls-10"
          d="M526.06 953.33c26.61 0 37 18.17 37 18.17s7.53-18.17 37-18.17M312.48 964.14c-19-10.65-52.19-16.73-75.5-16.73s-56.53 6.08-75.5 16.73"
        />
        <path className="CalendarAndContact-cls-10" d="M221 953.03v-25.41h29.24v25.41" />
        <path
          className="CalendarAndContact-cls-10"
          d="M269.41 887.29s6.2.3 2.91 9.9c0 0-3.06 9-7.35 10.17 0 0 .2 9.27-7.72 19.37 0 0-8.44 12.34-21.89 12.34h.6c-13.45 0-21.9-12.34-21.9-12.34a33.5 33.5 0 01-7.71-19.37c-4.3-1.12-7.35-10.17-7.35-10.17-3.29-9.6 2.9-9.9 2.9-9.9"
        />
        <path
          className="CalendarAndContact-cls-11"
          d="M221.26 908.43c-10.89 0-11.12-11.8-11.12-11.8 0-8.37 11.12-7.78 11.12-7.78s11.13-.64 11.13 7.78c0 0-.23 11.8-11.13 11.8zM249.42 908.43c-10.9 0-11.13-11.8-11.13-11.8 0-8.37 11.13-7.78 11.13-7.78s11.12-.64 11.12 7.78c0 0-.23 11.8-11.12 11.8zM231.88 894.75s1.88-2.94 6.93 0"
        />
        <path
          className="CalendarAndContact-cls-9"
          d="M221.23 830.13l.57-1.69c6.79-7 17-8.07 26.11-6.63 10.23 1.61 17.14 6.28 23.6 15.26 4.8 6.67 6.27 15.47 5.56 24a62.56 62.56 0 01-8 26.08l.05-1.33c-1.46-.11-.07-1.37-.83-2.76s-1.22-3-2-4.34c-2.42-4.22-7.47-5.68-11.92-5.07s-8.57 2.84-12.79 4.55a2.13 2.13 0 01-1.85.14 34 34 0 00.82-10.73 15.72 15.72 0 00-4.16-9.51c-3.32-3.26-8.2-6.38-12.53-5.38-2.13.49-4.24 3.86-5.91 5.42a17 17 0 00-3.57 5.58c-2.54 5.75-2.16 12.3-2.23 18.71-2.22-1.62-3.26-4-3.12-8.55-2.38 4.35-2.07 11.25-5.38 14.75l-3.06-1.33c-4-9.13-7.46-18-8.21-28.1-.37-5-.73-10.58.32-15.41 0 0 3-20.92 29.11-15.34"
        />
        <path
          className="CalendarAndContact-cls-9"
          d="M217 878.32a13.05 13.05 0 00-3.67-1.16c-3-.33-6 1.43-7.82 4.51 4.1.68 4-.56 8.08.14 2 .35 8.32 2.64 10.37 3l2.95.51c.82.15 2.22.74 3 .36-1.56-1.87-4.38-3-6.33-4.1a69.86 69.86 0 00-6.58-3.26zM253.68 878.32a13.09 13.09 0 013.66-1.16c3-.33 6 1.43 7.83 4.51-4.1.68-4-.56-8.08.14-2 .35-8.32 2.64-10.37 3l-3 .51c-.81.15-2.21.74-2.95.36 1.56-1.87 4.38-3 6.33-4.1a69.86 69.86 0 016.58-3.26z"
        />
        <path className="CalendarAndContact-cls-11" d="M210.58 894c-.56-.68-8.68-6.69-8.68-6.69M268.99 887.15l-7.93 7.16" />
        <path
          className="CalendarAndContact-cls-8"
          d="M252.13 957.61l-12.23-6v-4.77l12.23-6c2.69-1.33 6.12.25 6.12 2.82v11.15c0 2.54-3.43 4.12-6.12 2.8zM222.15 940.85l12.13 6v4.77l-12.13 6c-2.73 1.34-6.22-.26-6.22-2.87v-11c0-2.64 3.49-4.24 6.22-2.9z"
        />
        <path className="CalendarAndContact-cls-8" d="M231.66 944.86h10.64v8.68h-10.64z" />
        <path
          className="CalendarAndContact-cls-9"
          d="M249.86 898c2.9 0 2.9-4.5 0-4.5s-2.9 4.5 0 4.5zM221 898.18c2.89 0 2.9-4.5 0-4.5s-2.9 4.5 0 4.5z"
        />
        <path
          className="CalendarAndContact-cls-11"
          d="M230.89 911s3.18 2.18 8.91 0M206.35 907.36l-2.71-18.74M264.97 907.36l4.51-23.95M232.85 917.59c4.45-.29 9-.56 13.3.59.84 2-5.38 5.65-9.07 6.38-3.84.75-8.3-.95-11.13-3.51-4.53-4.05 5.26-3.36 6.9-3.46z"
        />
        <path
          className="CalendarAndContact-cls-6"
          d="M508.52 1543.51a2.66 2.66 0 01-1.14 2.87c-2.28 1.73-2.46 4.08-1.7 6.59a14.2 14.2 0 007.42 8.88 5.29 5.29 0 006.24-.59 2.41 2.41 0 012.76-.35 8.19 8.19 0 012 1.24 21.23 21.23 0 015.21 6.89c.94 2.11.61 3.25-1.22 4.65a9.68 9.68 0 01-9.29 1.39 26.76 26.76 0 01-9.79-5.9 50.31 50.31 0 01-12.88-17.35c-1.54-3.5-2.56-7.12-2.06-11a9.39 9.39 0 014.48-6.69 2.34 2.34 0 012.46 0 8.7 8.7 0 011.88 1.23 21.15 21.15 0 015.14 6.76c.18.4.32.87.49 1.38zM594.47 1541.51h37.66v24.18h-37.66z"
        />
        <path className="CalendarAndContact-cls-12" d="M594.47 1541.51l18.83 12.09 18.83-12.09" />
        <path
          className="CalendarAndContact-cls-6"
          d="M182.48 1543.51a2.67 2.67 0 01-1.15 2.87c-2.27 1.73-2.46 4.08-1.69 6.59a14.2 14.2 0 007.42 8.88 5.28 5.28 0 006.23-.59 2.43 2.43 0 012.77-.35 8.13 8.13 0 012 1.24 19.55 19.55 0 016.13 9.47c-3.39 4.05-7.27 4.76-11.42 3.46a26.76 26.76 0 01-9.79-5.9 50.31 50.31 0 01-12.88-17.35 20.47 20.47 0 01-2.06-11 9.36 9.36 0 014.48-6.69 2.34 2.34 0 012.46 0 8.4 8.4 0 011.87 1.23 21 21 0 015.15 6.76c.17.4.31.87.48 1.38zM268.43 1541.51h37.66v24.18h-37.66z"
        />
        <path className="CalendarAndContact-cls-12" d="M268.43 1541.51l18.83 12.09 18.83-12.09" />
        <path
          className="CalendarAndContact-cls-6"
          d="M508.52 1719.3a2.65 2.65 0 01-1.14 2.86c-2.28 1.73-2.46 4.08-1.7 6.6a14.2 14.2 0 007.42 8.87 5.28 5.28 0 006.24-.59 2.4 2.4 0 012.76-.34 8.16 8.16 0 012 1.23 21.27 21.27 0 015.21 6.9c.94 2.1.61 3.25-1.22 4.65a9.68 9.68 0 01-9.29 1.39 26.9 26.9 0 01-9.8-5.87 50.41 50.41 0 01-12.88-17.35c-1.54-3.5-2.56-7.13-2.06-11a9.41 9.41 0 014.48-6.7 2.32 2.32 0 012.46 0 9.05 9.05 0 011.88 1.22 21.19 21.19 0 015.14 6.77c.19.37.33.87.5 1.36zM594.47 1717.29h37.66v24.18h-37.66z"
        />
        <path className="CalendarAndContact-cls-12" d="M594.47 1717.29l18.83 12.09 18.83-12.09" />
        <path
          className="CalendarAndContact-cls-6"
          d="M182.48 1719.3a2.65 2.65 0 01-1.15 2.86c-2.27 1.73-2.46 4.08-1.69 6.6a14.2 14.2 0 007.42 8.87 5.26 5.26 0 006.23-.59 2.41 2.41 0 012.77-.34 8.1 8.1 0 012 1.23 19.53 19.53 0 016.13 9.48c-3.39 4-7.27 4.75-11.42 3.46a26.9 26.9 0 01-9.79-5.9 50.41 50.41 0 01-12.88-17.35 20.49 20.49 0 01-2.06-11 9.38 9.38 0 014.48-6.7 2.32 2.32 0 012.46 0 8.73 8.73 0 011.87 1.22 21.08 21.08 0 015.15 6.77c.17.4.31.9.48 1.39zM268.43 1717.29h37.66v24.18h-37.66z"
        />
        <path className="CalendarAndContact-cls-12" d="M268.43 1717.29l18.83 12.09 18.83-12.09" />
        <text
          transform="translate(345.3 155.35)"
          fontSize={43}
          fontFamily="NanumMyeongjo,Nanum Myeongjo"
          letterSpacing="-.02em"
          fill="#ad7e5e"
        >
          {'1'}
          <tspan x={28.58} y={0} letterSpacing=".06em">
            {'0'}
          </tspan>
          <tspan x={60.32} y={0} letterSpacing=".06em">
            {'\uC6D4'}
          </tspan>
        </text>
        <text className="CalendarAndContact-cls-16" transform="matrix(.99 0 0 1 125.91 245.2)">
          일
        </text>
        <text className="CalendarAndContact-cls-16" transform="matrix(.99 0 0 1 213.01 245.2)">
          월
        </text>
        <text className="CalendarAndContact-cls-16" transform="matrix(.99 0 0 1 300.11 245.2)">
          화
        </text>
        <text className="CalendarAndContact-cls-16" transform="matrix(.99 0 0 1 387.21 245.2)">
          수
        </text>
        <text className="CalendarAndContact-cls-16" transform="matrix(.99 0 0 1 474.31 245.2)">
          목
        </text>
        <text className="CalendarAndContact-cls-16" transform="matrix(.99 0 0 1 561.41 245.2)">
          금
        </text>
        <text className="CalendarAndContact-cls-16" transform="matrix(.99 0 0 1 648.51 245.2)">
          토
        </text>
        <text className="CalendarAndContact-cls-17" transform="matrix(.99 0 0 1 566.17 313.02)">
          {'1'}
        </text>
        <text className="CalendarAndContact-cls-17" transform="matrix(.99 0 0 1 653.27 313.02)">
          {'2'}
        </text>
        <text className="CalendarAndContact-cls-17" transform="matrix(.99 0 0 1 130.67 376.73)">
          {'3'}
        </text>
        <text className="CalendarAndContact-cls-17" transform="matrix(.99 0 0 1 217.77 376.73)">
          {'4'}
        </text>
        <text className="CalendarAndContact-cls-17" transform="matrix(.99 0 0 1 304.87 376.73)">
          {'5'}
        </text>
        <text className="CalendarAndContact-cls-17" transform="matrix(.99 0 0 1 391.97 376.73)">
          {'6'}
        </text>
        <text className="CalendarAndContact-cls-17" transform="matrix(.99 0 0 1 479.08 376.73)">
          {'7'}
        </text>
        <text className="CalendarAndContact-cls-17" transform="matrix(.99 0 0 1 566.17 376.73)">
          {'8'}
        </text>
        <text className="CalendarAndContact-cls-17" transform="matrix(.99 0 0 1 653.27 376.73)">
          {'9'}
        </text>
        <text className="CalendarAndContact-cls-17" transform="matrix(.99 0 0 1 124.05 440.45)">
          {'10'}
        </text>
        <text className="CalendarAndContact-cls-17" transform="matrix(.99 0 0 1 211.15 440.45)">
          {'11'}
        </text>
        <text className="CalendarAndContact-cls-17" transform="matrix(.99 0 0 1 298.25 440.45)">
          {'12'}
        </text>
        <text className="CalendarAndContact-cls-17" transform="matrix(.99 0 0 1 385.35 440.45)">
          {'13'}
        </text>
        <text className="CalendarAndContact-cls-17" transform="matrix(.99 0 0 1 472.45 440.45)">
          {'14'}
        </text>
        <text className="CalendarAndContact-cls-17" transform="matrix(.99 0 0 1 559.55 440.45)">
          {'15'}
        </text>
        <text className="CalendarAndContact-cls-17" transform="matrix(.99 0 0 1 647.71 440.45)">
          {'16'}
        </text>
        <text className="CalendarAndContact-cls-17" transform="matrix(.99 0 0 1 124.05 504.16)">
          {'17'}
        </text>
        <text className="CalendarAndContact-cls-17" transform="matrix(.99 0 0 1 211.15 504.16)">
          {'18'}
        </text>
        <text className="CalendarAndContact-cls-17" transform="matrix(.99 0 0 1 298.25 504.16)">
          {'19'}
        </text>
        <text className="CalendarAndContact-cls-17" transform="matrix(.99 0 0 1 385.35 504.16)">
          {'20'}
        </text>
        <text className="CalendarAndContact-cls-17" transform="matrix(.99 0 0 1 472.45 504.16)">
          {'21'}
        </text>
        <text className="CalendarAndContact-cls-17" transform="matrix(.99 0 0 1 559.55 504.16)">
          {'22'}
        </text>
        <text className="CalendarAndContact-cls-17" transform="matrix(.99 0 0 1 124.05 567.88)">
          {'24'}
        </text>
        <text className="CalendarAndContact-cls-17" transform="matrix(.99 0 0 1 211.15 567.88)">
          {'25'}
        </text>
        <text className="CalendarAndContact-cls-17" transform="matrix(.99 0 0 1 298.25 567.88)">
          {'26'}
        </text>
        <text className="CalendarAndContact-cls-17" transform="matrix(.99 0 0 1 385.35 567.88)">
          {'27'}
        </text>
        <text className="CalendarAndContact-cls-17" transform="matrix(.99 0 0 1 472.45 567.88)">
          {'28'}
        </text>
        <text className="CalendarAndContact-cls-17" transform="matrix(.99 0 0 1 559.55 567.88)">
          {'29'}
        </text>
        <text className="CalendarAndContact-cls-17" transform="matrix(.99 0 0 1 646.65 567.88)">
          {'30'}
        </text>
        <circle cx={659.9} cy={496.44} r={28.35} fill="#f7c9dd" />
        <text transform="matrix(.99 0 0 1 645.07 505.77)" fontSize={26.99} fill="#15492e" fontFamily={sans}>
          {'23'}
        </text>
        <path
          className="CalendarAndContact-cls-21"
          d="M121.39 1396.14h231.18M447.57 1396.14h231.18M74.9 629.21h651.97M74.9 692.81h651.97"
        />
        <text transform="matrix(.99 0 0 1 115.86 670.09)" fontSize={25} fill="#443d39" fontFamily={sans}>
          10월 23일 토요일 오후 5시, 결혼식이 {getDaysLeft()}일 남았습니다.
        </text>
        <text className="CalendarAndContact-cls-23" transform="matrix(.99 0 0 1 176.73 1380.36)">
          {'\uC2E0\uB791\uCE21 \uD63C\uC8FC'}
        </text>
        <text className="CalendarAndContact-cls-23" transform="matrix(.99 0 0 1 495.8 1380.36)">
          {'\uC2E0\uBD80\uCE21 \uD63C\uC8FC'}
        </text>
        <text className="CalendarAndContact-cls-23" transform="matrix(.99 0 0 1 158.86 1483.54)">
          {'\uC544\uBC84\uC9C0'}
          <tspan className="CalendarAndContact-cls-24" x={72.14} y={0} />
          <tspan className="CalendarAndContact-cls-25" x={77.99} y={0}>
            {'\uAE40\uC6A9\uC131'}
          </tspan>
        </text>
        <text className="CalendarAndContact-cls-23" transform="matrix(.99 0 0 1 477.03 1483.6)">
          {'\uC544\uBC84\uC9C0'}
          <tspan className="CalendarAndContact-cls-24" x={72.14} y={0} />
          <tspan className="CalendarAndContact-cls-26" x={77.99} y={0}>
            {'\uAE40\uAE30\uC8FC'}
          </tspan>
        </text>
        <text className="CalendarAndContact-cls-23" transform="matrix(.99 0 0 1 479.13 1662.48)">
          {'\uC5B4\uBA38\uB2C8'}
          <tspan className="CalendarAndContact-cls-24" x={72.14} y={0} />
          <tspan className="CalendarAndContact-cls-26" x={77.99} y={0}>
            {'\uC815\uD61C\uC601'}
          </tspan>
        </text>
        <text className="CalendarAndContact-cls-23" transform="matrix(.99 0 0 1 158.86 1662.43)">
          {'\uC5B4\uBA38\uB2C8'}
          <tspan className="CalendarAndContact-cls-24" x={72.14} y={0} />
          <tspan className="CalendarAndContact-cls-25" x={77.99} y={0}>
            {'\uAE40\uBBF8\uD604'}
          </tspan>
        </text>
      </g>
    </svg>
  );
}

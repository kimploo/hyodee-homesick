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

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} 1504.89`} {...props}>
      <defs>
        <style>
          {`
            .Notice__cls-3 {
              fill: #b5ce97;
            }
            .Notice__cls-3,
            .Notice__cls-4,
            .Notice__cls-5,
            .Notice__cls-9 {
              stroke: #326e4c;
            }
            .Notice__cls-14,
            .Notice__cls-3,
            .Notice__cls-4,
            .Notice__cls-5,
            .Notice__cls-6,
            .Notice__cls-9 {
              stroke-miterlimit: 10;
            }
            .Notice__cls-3,
            .Notice__cls-4,
            .Notice__cls-5,
            .Notice__cls-6 {
              stroke-width: 1.2px;
            }
            .Notice__cls-4 {
              fill: #f7c9dd;
            }
            .Notice__cls-14,
            .Notice__cls-5,
            .Notice__cls-6 {
              fill: none;
            }
            .Notice__cls-6 {
              stroke: #3fa066;
            }
            .Notice__cls-7 {
              font-size: 28.67px;
            }
            .Notice__cls-10,
            .Notice__cls-7 {
              fill: #326e4c;
              font-family: ${serif};
            }
            .Notice__cls-8,
            .Notice__cls-9 {
              font-size: 35.99px;
            }
            .Notice__cls-8 {
              font-family: ${serif};
            }
            .Notice__cls-9 {
              stroke-width: 0.3px;
              letter-spacing: 0;
            }
            .Notice__cls-10 {
              font-size: 34.3px;
              letter-spacing: -0.1em;
            }
            .Notice__cls-14 {
              stroke: #1e603f;
              stroke-width: 0.41px;
            }
          `}
        </style>
      </defs>
      <g id="Notice__\uB808\uC774\uC5B4_2" data-name="\uB808\uC774\uC5B4 2">
        <path fill="#1e603f" d="M0 0h800v1504.89H0z" />
        <path fill="#fffcf6" d="M68.15 138.12h663.7v1214.27H68.15z" />
        <circle className="Notice__cls-3" cx={678.69} cy={106.33} r={10.62} />
        <path className="Notice__cls-4" d="M661.58 67.39l-10.07-1.87a6.91 6.91 0 00-8.86 7.59l.28 10.23 23.28 8.35z" />
        <path
          className="Notice__cls-3"
          d="M661.58 67.39a24.18 24.18 0 019.32 47.45l-6.14-30.76zM642.93 83.34l23.28 8.35-1.45-7.61 6.14 30.76a24.18 24.18 0 01-28-31.5z"
        />
        <path className="Notice__cls-5" d="M685.88 114.15s24.85 19.48 46 64.81" />
        <path
          className="Notice__cls-3"
          d="M690 147.4s-6.15-14.36-19.08-18.53c0 0-16.06-5.17-22.32 8.56 0 0-1.73 13.68 17.31 18.78.02 0 11.15 2.79 24.09-8.81z"
        />
        <path
          className="Notice__cls-3"
          d="M692.73 148.07s-14.35 6.15-18.52 19.08c0 0-5.18 16 8.55 22.31 0 0 13.68 1.74 18.78-17.31 0 0 2.74-11.15-8.81-24.08zM693.07 147.9s14.35-6.15 18.52-19.09c0 0 5.17-16-8.55-22.31 0 0-13.69-1.74-18.78 17.31 0 0-2.75 11.13 8.81 24.09z"
        />
        <path
          className="Notice__cls-5"
          d="M648.62 137.43a355.12 355.12 0 0144.15 10.27M703.04 106.5l-10.31 41.57-9.97 41.4M692.73 148.07s25.91 6.18 37.21 26.77"
        />
        <path className="Notice__cls-6" d="M731.91 179c25.71 45.5 29.42 104.82 29.42 146.32" />
        <circle className="Notice__cls-3" cx={121.13} cy={1381.13} r={10.62} />
        <path className="Notice__cls-4" d="M138.24 1420.07l10.07 1.87a6.9 6.9 0 008.86-7.58l-.28-10.24-23.28-8.35z" />
        <path className="Notice__cls-3" d="M138.24 1420.07a24.18 24.18 0 01-9.32-47.45l6.14 30.76z" />
        <path className="Notice__cls-3" d="M156.89 1404.12l-23.28-8.35 1.45 7.61-6.14-30.76a24.19 24.19 0 0128 31.5z" />
        <path className="Notice__cls-5" d="M113.94 1373.31s-24.85-19.48-46-64.81" />
        <path
          className="Notice__cls-3"
          d="M109.8 1340.07s6.15 14.35 19.09 18.52c0 0 16.05 5.17 22.31-8.55 0 0 1.74-13.69-17.31-18.79 0 0-11.13-2.74-24.09 8.82z"
        />
        <path
          className="Notice__cls-3"
          d="M107.09 1339.4s14.36-6.15 18.53-19.09c0 0 5.17-16-8.56-22.31 0 0-13.68-1.74-18.78 17.31 0 0-2.74 11.13 8.81 24.09zM106.75 1339.57s-14.35 6.15-18.52 19.08c0 0-5.17 16 8.55 22.32 0 0 13.69 1.73 18.78-17.32 0 0 2.75-11.13-8.81-24.08z"
        />
        <path
          className="Notice__cls-5"
          d="M151.2 1350a356.17 356.17 0 01-44.15-10.28M96.78 1380.96l10.31-41.56 9.97-41.4M107.09 1339.4s-25.91-6.19-37.21-26.78"
        />
        <path className="Notice__cls-6" d="M67.92 1308.5c-25.71-45.5-29.43-104.82-29.43-146.32" />
        <text className="Notice__cls-10" transform="translate(172.56 1160.21)">
          김 용 성 · 김 미 현
        </text>
        <text className="Notice__cls-7" transform="translate(425.56 1160.21)">
          의 장남
          <tspan className="Notice__cls-9" x={122.7} y={0}>
            홍 식
          </tspan>
        </text>
        <text className="Notice__cls-10" transform="translate(172.56 1226.76)">
          김 기 주 · 정 혜 영
        </text>
        <text className="Notice__cls-7" transform="translate(423.81 1226.76)">
          의 장녀
          <tspan className="Notice__cls-9" x={122.7} y={0}>
            효 정
          </tspan>
        </text>
        <path strokeWidth={0.61} stroke="#1e603f" fill="none" strokeMiterlimit={10} d="M420.29 1019.17l-40.58 37.68" />
        <text transform="translate(182.86 804.78)" fontFamily={serif} fontWeight={500} fontSize={25} fill="#443d39" letterSpacing="-.01em">
          코로나19로 어려운 시국에 청첩장 전달이
          <tspan x={6.26} y={46.01}>
            마음의 짐이 되지 않을까 걱정이 됩니다.
          </tspan>
          <tspan x={-18.46} y={92.02}>
            참석이 어려우시더라도 멀리서 축하해주시면
          </tspan>
          <tspan x={88.21} y={138.03}>
            마음 감사히 받겠습니다.
          </tspan>
        </text>
        <text transform="translate(288.56 271.58)" fontSize={40} fill="#ad7e5e" letterSpacing=".2em" fontFamily={serif} fontWeight={500}>
          결혼합니다
        </text>
        <path className="Notice__cls-14" d="M118 411.66h564M118 472.7h564M118 533.74h564M118 594.78h564M118 655.82h564M118 716.86h564" />
        <text
          transform="translate(229.12 397.41)"
          fontSize={26.3}
          strokeWidth={0.2}
          letterSpacing="-.01em"
          fontFamily={serif}
          fontWeight={500}
          fill="#326e4c"
          strokeMiterlimit={10}
          stroke="#326e4c"
        >
          늦은 가을에 처음 만난 두 사람,
          <tspan x={-81.8} y={60.32}>
            두 해를 거쳐 부부로서 또 다른 시작을 합니다.
          </tspan>
          <tspan x={-12.71} y={120.65}>
            서로 닮은 듯 다른 저희 두 사람이
          </tspan>
          <tspan x={11.09} y={180.97}>
            서로의 부족한 점을 채워주며
          </tspan>
          <tspan x={7.28} y={241.3}>
            행복한 가정을 이룰 수 있도록
          </tspan>
          <tspan x={-41.83} y={301.62}>
            오셔서 축복해 주시면 감사하겠습니다.
          </tspan>
        </text>
      </g>
    </svg>
  );
}

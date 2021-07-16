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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} 781.3`} {...props}>
      <defs>
        <style>
          {`
            .account__header {
              font-size: 38px;
              fill: #ffc299;
              font-family: ${serif};
              letter-spacing: 0.2em;
            }
            .account__notice {
              font-size: 26px;
              fill: #fffcf6;
              font-family: ${serif};
            }
            .account__button {
              fill: #fffcf6;
            }
            .account__number__bold {
              font-size: 27px;
              fill: #443d39;
              font-family: ${sans};
              font-weight: bold;
            }
            .account__number__regular {
              font-size: 27px;
              fill: #443d39;
              font-family: ${sans};
              font-weight: regular;
            }
            .account__credit {
              font-size: 23px;
              fill: #fffae3;
              font-family: ${sans};
              font-weight: 100;
            }
          `}
        </style>
      </defs>
      <g id="Account__\uB808\uC774\uC5B4_2" data-name="\uB808\uC774\uC5B4 2">
        <path fill="#1e603f" d="M0 0h800v781.3H0z" />
        <text className="account__header" transform="translate(274.67 148.09)">
          ACCOUNT
        </text>
        <text className="account__notice" transform="translate(158.51 232.9)">
          축하의 마음을 담아 축의금을 전달해보세요.
        </text>
        <rect className="account__button" x={183.15} y={331.98} width={433.7} height={73.7} rx={35.59} />
        <text className="account__number__bold" transform="translate(280.66 379.88)">
          신랑
        </text>
        <text className="account__number__regular" transform={`translate(${280.66 + 49.68} 379.88)`}>
          측 계좌번호 보기
        </text>
        <rect className="account__button" x={183.15} y={452.22} width={433.7} height={73.7} rx={35.59} />
        <text className="account__number__bold" transform="translate(280.66 500.27)">
          신부
        </text>
        <text className="account__number__regular" transform={`translate(${280.66 + 49.68} 500.27)`}>
          측 계좌번호 보기
        </text>
        <path fill="none" stroke="#b5b5b6" strokeMiterlimit={10} strokeWidth={0.79} d="M62.68 628.35h674.64" />
        <text className="account__credit" transform="translate(114.15 680.13)">
          이 청첩장은 신랑(홍식)과 신부(효정)가 함께 작업했습니다. :)
        </text>
      </g>
    </svg>
  );
}

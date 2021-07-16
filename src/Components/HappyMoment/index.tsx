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
        <clipPath id="clip-path" transform="translate(110.84)">
          <path fill="none" d="M69.44 215.8h661.12v697.16H69.44z" />
        </clipPath>
        <style>
          {`
            .HappyMoment-cls-5,
            .HappyMoment-cls-7 {
              fill: none;
              stroke: #fffae3;
              stroke-miterlimit: 10;
            }
            .HappyMoment-cls-7 {
              stroke: #143f28;
              stroke-width: 3px;
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
        <g clipPath="url(#clip-path)">
          <image
            id="DSCF4854_\u1107\u1169\u110C\u1165\u11BC\u1107\u1169\u11AB"
            data-name="DSCF4854 \u1107\u1169\u110C\u1165\u11BC\u1107\u1169\u11AB"
            width={6000}
            height={4000}
            transform="matrix(.17 0 0 .17 0 215.8)"
          />
        </g>
        <path className="HappyMoment-cls-7" d="M37.25 566.45l-13.41-13.41 13.41-13.42M762.75 539.62l13.41 13.42-13.41 13.41" />
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
      </g>
    </svg>
  );
}

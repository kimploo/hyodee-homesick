import { useSelector } from 'react-redux';
import { changeWidth, changeFont } from '../../reducer/layout';
import { Icons } from './Icons';

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
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 1605.22" {...props}>
      <defs>
        <clipPath id="Location__clip-path">
          <circle className="Location__cls-1" cx={319.38} cy={1028.31} r={46.77} />
        </clipPath>
        <clipPath id="Location__clip-path-2">
          <circle cx={481.47} cy={1028.31} r={46.77} strokeMiterlimit={10} stroke="#d6d5d4" strokeWidth={0.47} fill="#cecece" />
        </clipPath>
        <clipPath id="Location__clip-path-3">
          <circle cx={157.3} cy={1028.31} r={46.77} fill="none" />
        </clipPath>
        <clipPath id="Location__clip-path-4">
          <circle className="Location__cls-4" cx={643.55} cy={1028.31} r={46.77} />
        </clipPath>
        <clipPath id="Location__clip-path-5" transform="translate(18.56)">
          <path className="Location__cls-3" d="M0 487.48h800.49v442.96H0z" />
        </clipPath>
        <style>
          {`
            .Location__cls-1 {
              fill: #fae100;
            }
            .Location__cls-133 {
              stroke-miterlimit: 10;
              fill: none;
            }
            .Location__cls-4 {
              fill: #fbe300;
            }
            .Location__cls-18 {
              fill: #ad7e5e;
            }
            .Location__cls-135,
            .Location__cls-21 {
              font-family: ${sans};
              font-weight: 400;
            }
            .Location__cls-18,
            .Location__cls-21 {
              font-size: 19.36px;
            }
            .Location__cls-18 {
              font-family: ${sans};
              font-weight: 500;
            }
            .Location__cls-21 {
              fill: #494949;
            }
            .Location__cls-26 {
              letter-spacing: 0;
            }
            .Location__cls-28 {
              letter-spacing: -0.02em;
            }
            .Location__cls-33 {
              letter-spacing: -0.01em;
            }
            .Location__cls-36,
            .Location__cls-37 {
              letter-spacing: 0;
            }
            .Location__cls-59,
            .Location__cls-60,
            .Location__cls-64 {
              letter-spacing: -0.03em;
            }
            .Location__cls-65 {
              letter-spacing: 0.01em;
            }
            .Location__cls-68 {
              letter-spacing: -0.02em;
            }
            .Location__cls-69,
            .Location__cls-70 {
              letter-spacing: -0.03em;
            }
            .Location__cls-71 {
              letter-spacing: -0.02em;
            }
            .Location__cls-72 {
              letter-spacing: 0;
            }
            .Location__cls-73 {
              letter-spacing: 0.01em;
            }
            .Location__cls-75,
            .Location__cls-76,
            .Location__cls-77 {
              letter-spacing: -0.03em;
            }
            .Location__cls-78 {
              letter-spacing: 0;
            }
            .Location__cls-79 {
              letter-spacing: -0.04em;
            }
            .Location__cls-80 {
              letter-spacing: -0.01em;
            }
            .Location__cls-88,
            .Location__cls-91 {
              letter-spacing: 0;
            }
            .Location__cls-93,
            .Location__cls-94,
            .Location__cls-95,
            .Location__cls-96,
            .Location__cls-98 {
              font-size: 16.15px;
            }
            .Location__cls-94 {
              letter-spacing: -0.03em;
            }
            .Location__cls-95 {
              letter-spacing: 0;
            }
            .Location__cls-96 {
              letter-spacing: -0.02em;
            }
            .Location__cls-98 {
              letter-spacing: -0.05em;
            }
            .Location__cls-107,
            .Location__cls-108 {
              letter-spacing: -0.03em;
            }
            .Location__cls-111 {
              letter-spacing: -0.02em;
            }
            .Location__cls-126 {
              letter-spacing: -0.04em;
            }
            .Location__cls-133 {
              stroke: #b5b5b6;
              stroke-width: 0.79px;
            }
            .Location__cls-135 {
              font-size: 22px;
              fill: #878787;
              letter-spacing: -0.01em;
            }
          `}
        </style>
      </defs>
      <g id="Location__\uB808\uC774\uC5B4_2" data-name="\uB808\uC774\uC5B4 2">
        <g id="Location__Layer_1" data-name="Layer 1">
          <path fill="#fffcf6" d="M0 0h800v1605.22H0z" />
          <text transform="translate(278.31 250.8)" fill="#ad7e5e" fontSize={35} fontFamily={serif} letterSpacing=".2em">
            LOCATION
          </text>
          <text transform="translate(227.74 364)" fontFamily={sans} fontWeight={400} fontSize={33} fill="#443d39" letterSpacing="-.02em">
            정동 프란치스코 교육회관
          </text>
          <text
            transform="matrix(.99 0 0 1 271.86 408.07)"
            fontSize={24.87}
            fill="#939393"
            letterSpacing="-.01em"
            fontFamily={sans}
            fontWeight={400}
          >
            서울시 중구 정동길 9번지
          </text>
          <Icons />
          <text
            transform="translate(96.42 1385.21)"
            letterSpacing="-.03em"
            fontFamily={sans}
            fontWeight={500}
            fontSize={19.36}
            fill="#ad7e5e"
          >
            {'\uBC84'}
            <tspan x={17.21} y={0} letterSpacing={0}>
              {'\uC2A4'}
            </tspan>
          </text>
          <text className="Location__cls-18" transform="translate(94.77 1289.56)">
            <tspan letterSpacing="-.03em">{'\uC9C0'}</tspan>
            <tspan x={17.19} y={0} letterSpacing=".02em">
              {'\uD558'}
            </tspan>
            <tspan x={35.33} y={0}>
              {'\uCCA0'}
            </tspan>
          </text>
          <text className="Location__cls-21" transform="translate(172.59 1289.94)">
            <tspan letterSpacing="-.03em">{'\uC11C'}</tspan>
            <tspan x={17.25} y={0} letterSpacing="-.02em">
              {'\uB300'}
            </tspan>
            <tspan x={34.62} y={0} letterSpacing="-.05em">
              {'\uBB38'}
            </tspan>
            <tspan x={51.5} y={0}>
              {'\uC5ED '}
            </tspan>
            <tspan x={73.64} y={0} letterSpacing="-.03em">
              {'5'}
            </tspan>
            <tspan x={83.89} y={0}>
              {'\uBC88 '}
            </tspan>
            <tspan className="Location__cls-26" x={107.12} y={0}>
              {'\uCD9C'}
            </tspan>
            <tspan x={124.94} y={0} letterSpacing={0}>
              {'\uAD6C'}
            </tspan>
            <tspan className="Location__cls-28" x={142.68} y={0}>
              {'\uC5D0'}
            </tspan>
            <tspan x={160.03} y={0}>
              {'\uC11C '}
            </tspan>
            <tspan x={183.26} y={0} letterSpacing="-.04em">
              {'\uACBD'}
            </tspan>
            <tspan x={200.36} y={0} letterSpacing="-.01em">
              {'\uD5A5'}
            </tspan>
            <tspan x={217.91} y={0} letterSpacing="-.04em">
              {'\uC2E0'}
            </tspan>
            <tspan x={235.02} y={0} letterSpacing="-.04em">
              {'\uBB38'}
            </tspan>
            <tspan x={252.02} y={0}>
              {'\uC0AC '}
            </tspan>
            <tspan className="Location__cls-33" x={275.25} y={0}>
              {'\uBC29'}
            </tspan>
            <tspan x={292.87} y={0} letterSpacing="-.05em">
              {'\uBA74'}
            </tspan>
            <tspan x={309.65} y={0} letterSpacing={0}>
              {'\uC73C'}
            </tspan>
            <tspan x={327.54} y={0}>
              {'\uB85C '}
            </tspan>
            <tspan className="Location__cls-36" x={349.68} y={0}>
              {'5'}
            </tspan>
            <tspan className="Location__cls-37" x={360.45} y={0}>
              {'\uBD84'}
            </tspan>
            <tspan x={0} y={32.36} letterSpacing="-.04em">
              {'\uC2DC'}
            </tspan>
            <tspan x={17.06} y={32.36} letterSpacing="-.04em">
              {'\uCCAD'}
            </tspan>
            <tspan x={34.05} y={32.36}>
              {'\uC5ED '}
            </tspan>
            <tspan x={56.19} y={32.36} letterSpacing="-.08em">
              {'1'}
            </tspan>
            <tspan x={65.36} y={32.36} letterSpacing="-.04em">
              {'\uBC88'}
            </tspan>
            <tspan x={82.4} y={32.36} letterSpacing="-.01em">
              {','}
            </tspan>
            <tspan x={87.5} y={32.36}>
              {'1'}
            </tspan>
            <tspan x={98.24} y={32.36} letterSpacing="-.04em">
              {'2'}
            </tspan>
            <tspan className="Location__cls-37" x={108.26} y={32.36}>
              {'\uBC88 '}
            </tspan>
            <tspan className="Location__cls-26" x={131.49} y={32.36}>
              {'\uCD9C'}
            </tspan>
            <tspan x={149.31} y={32.36} letterSpacing="-.02em">
              {'\uAD6C'}
            </tspan>
            <tspan x={166.78} y={32.36} letterSpacing="-.03em">
              {'('}
            </tspan>
            <tspan x={172.76} y={32.36} letterSpacing="-.04em">
              {'\uB355'}
            </tspan>
            <tspan x={189.88} y={32.36} letterSpacing="-.02em">
              {'\uC218'}
            </tspan>
            <tspan x={207.3} y={32.36} letterSpacing="-.02em">
              {'\uAD81'}
            </tspan>
            <tspan className="Location__cls-33" x={224.8} y={32.36}>
              {'\uBC29'}
            </tspan>
            <tspan x={242.42} y={32.36} letterSpacing="-.04em">
              {'\uBA74'}
            </tspan>
            <tspan x={259.44} y={32.36} letterSpacing="-.03em">
              {')'}
            </tspan>
            <tspan className="Location__cls-28" x={265.49} y={32.36}>
              {'\uC5D0'}
            </tspan>
            <tspan x={282.84} y={32.36}>
              {'\uC11C '}
            </tspan>
            <tspan x={306.07} y={32.36} letterSpacing="-.04em">
              {'\uB355'}
            </tspan>
            <tspan x={323.19} y={32.36} letterSpacing="-.02em">
              {'\uC218'}
            </tspan>
            <tspan x={340.62} y={32.36} letterSpacing={0}>
              {'\uAD81'}
            </tspan>
            <tspan x={358.33} y={32.36}>
              {'\uAE38 '}
            </tspan>
            <tspan x={381.56} y={32.36} letterSpacing="-.01em">
              {'\uB530'}
            </tspan>
            <tspan className="Location__cls-37" x={399.26} y={32.36}>
              {'\uB77C '}
            </tspan>
            <tspan x={421.4} y={32.36} letterSpacing=".01em">
              {'1'}
            </tspan>
            <tspan className="Location__cls-36" x={432.31} y={32.36}>
              {'5'}
            </tspan>
            <tspan className="Location__cls-37" x={443.07} y={32.36}>
              {'\uBD84'}
            </tspan>
          </text>
          <text transform="translate(174.63 1385.69)" fontSize={18.84} fill="#494949" fontFamily={sans} fontWeight={400}>
            <tspan letterSpacing="-.05em">{'\uAC04'}</tspan>
            <tspan x={16.43} y={0} letterSpacing="-.04em">
              {'\uC120'}
            </tspan>
            <tspan className="Location__cls-59" x={33.04} y={0}>
              {'\uBC84'}
            </tspan>
            <tspan className="Location__cls-60" x={49.71} y={0}>
              {'\uC2A4'}
            </tspan>
            <tspan x={66.57} y={0} letterSpacing="-.01em">
              {'('}
            </tspan>
            <tspan x={72.7} y={0} letterSpacing={0}>
              {'\uD30C'}
            </tspan>
            <tspan x={89.95} y={0} letterSpacing="-.02em">
              {'\uB791'}
            </tspan>
            <tspan x={106.81} y={0}>
              {') : '}
            </tspan>
            <tspan className="Location__cls-64" x={126.86} y={0}>
              {'1'}
            </tspan>
            <tspan className="Location__cls-65" x={136.67} y={0}>
              {'6'}
            </tspan>
            <tspan className="Location__cls-64" x={147.22} y={0}>
              {'0'}
            </tspan>
            <tspan x={157.04} y={0}>
              {', '}
            </tspan>
            <tspan x={166.5} y={0} letterSpacing="-.02em">
              {'2'}
            </tspan>
            <tspan x={176.53} y={0} letterSpacing={0}>
              {'6'}
            </tspan>
            <tspan className="Location__cls-64" x={187.08} y={0}>
              {'0'}
            </tspan>
            <tspan x={196.9} y={0}>
              {', '}
            </tspan>
            <tspan className="Location__cls-68" x={206.35} y={0}>
              {'2'}
            </tspan>
            <tspan className="Location__cls-69" x={216.37} y={0}>
              {'7'}
            </tspan>
            <tspan className="Location__cls-64" x={226.34} y={0}>
              {'0'}
            </tspan>
            <tspan x={236.15} y={0}>
              {', '}
            </tspan>
            <tspan className="Location__cls-68" x={245.61} y={0}>
              {'2'}
            </tspan>
            <tspan className="Location__cls-70" x={255.63} y={0}>
              {'7'}
            </tspan>
            <tspan className="Location__cls-71" x={265.53} y={0}>
              {'1'}
            </tspan>
            <tspan x={275.7} y={0}>
              {', '}
            </tspan>
            <tspan className="Location__cls-72" x={285.16} y={0}>
              {'3'}
            </tspan>
            <tspan className="Location__cls-73" x={295.56} y={0}>
              {'0'}
            </tspan>
            <tspan className="Location__cls-64" x={306.21} y={0}>
              {'0'}
            </tspan>
            <tspan x={316.03} y={0}>
              {', '}
            </tspan>
            <tspan x={325.49} y={0} letterSpacing="-.02em">
              {'3'}
            </tspan>
            <tspan className="Location__cls-75" x={335.63} y={0}>
              {'7'}
            </tspan>
            <tspan className="Location__cls-64" x={345.6} y={0}>
              {'0'}
            </tspan>
            <tspan x={355.41} y={0}>
              {', '}
            </tspan>
            <tspan className="Location__cls-76" x={364.87} y={0}>
              {'4'}
            </tspan>
            <tspan className="Location__cls-75" x={374.67} y={0}>
              {'7'}
            </tspan>
            <tspan className="Location__cls-64" x={384.64} y={0}>
              {'0'}
            </tspan>
            <tspan x={394.46} y={0}>
              {', '}
            </tspan>
            <tspan className="Location__cls-76" x={403.92} y={0}>
              {'4'}
            </tspan>
            <tspan className="Location__cls-70" x={413.72} y={0}>
              {'7'}
            </tspan>
            <tspan className="Location__cls-71" x={423.62} y={0}>
              {'1'}
            </tspan>
            <tspan x={433.79} y={0}>
              {', '}
            </tspan>
            <tspan className="Location__cls-65" x={443.25} y={0}>
              {'6'}
            </tspan>
            <tspan className="Location__cls-73" x={453.8} y={0}>
              {'0'}
            </tspan>
            <tspan className="Location__cls-77" x={464.45} y={0}>
              {'0'}
            </tspan>
            <tspan className="Location__cls-78" x={474.27} y={0}>
              {', '}
            </tspan>
            <tspan className="Location__cls-65" x={483.72} y={0}>
              {'6'}
            </tspan>
            <tspan className="Location__cls-79" x={494.27} y={0}>
              {'0'}
            </tspan>
            <tspan className="Location__cls-71" x={503.93} y={0}>
              {'1'}
            </tspan>
            <tspan x={514.1} y={0}>
              {','}
            </tspan>
            <tspan x={0} y={26.11} />
            <tspan className="Location__cls-75" x={105.49} y={26.11}>
              {'7'}
            </tspan>
            <tspan className="Location__cls-80" x={115.46} y={26.11}>
              {'0'}
            </tspan>
            <tspan x={125.7} y={26.11} letterSpacing=".03em">
              {'2'}
            </tspan>
            <tspan x={136.69} y={26.11} letterSpacing=".03em">
              {'A'}
            </tspan>
            <tspan x={148.61} y={26.11}>
              {', '}
            </tspan>
            <tspan className="Location__cls-69" x={158.06} y={26.11}>
              {'7'}
            </tspan>
            <tspan x={168.03} y={26.11} letterSpacing="-.01em">
              {'0'}
            </tspan>
            <tspan x={178.27} y={26.11} letterSpacing="-.02em">
              {'2'}
            </tspan>
            <tspan x={188.34} y={26.11} letterSpacing="-.01em">
              {'B'}
            </tspan>
            <tspan x={200.53} y={26.11}>
              {', '}
            </tspan>
            <tspan className="Location__cls-69" x={209.98} y={26.11}>
              {'7'}
            </tspan>
            <tspan x={219.95} y={26.11} letterSpacing=".02em">
              {'0'}
            </tspan>
            <tspan x={230.76} y={26.11} letterSpacing="-.03em">
              {'4'}
            </tspan>
            <tspan className="Location__cls-78" x={240.65} y={26.11}>
              {', '}
            </tspan>
            <tspan className="Location__cls-88" x={250.11} y={26.11}>
              {'7'}
            </tspan>
            <tspan x={260.63} y={26.11} letterSpacing="-.02em">
              {'2'}
            </tspan>
            <tspan className="Location__cls-64" x={270.76} y={26.11}>
              {'0'}
            </tspan>
            <tspan className="Location__cls-78" x={280.58} y={26.11}>
              {', '}
            </tspan>
            <tspan className="Location__cls-88" x={290.03} y={26.11}>
              {'7'}
            </tspan>
            <tspan x={300.55} y={26.11} letterSpacing="-.01em">
              {'2'}
            </tspan>
            <tspan className="Location__cls-91" x={310.74} y={26.11}>
              {'1 '}
            </tspan>
            <tspan x={325.42} y={26.11} letterSpacing="-.03em" fontSize={16.15}>
              {'\uC11C'}
            </tspan>
            <tspan className="Location__cls-93" x={339.73} y={26.11}>
              {'\uC6B8 '}
            </tspan>
            <tspan className="Location__cls-94" x={359.1} y={26.11}>
              {'\uC5ED'}
            </tspan>
            <tspan className="Location__cls-95" x={373.5} y={26.11}>
              {'\uC0AC'}
            </tspan>
            <tspan className="Location__cls-96" x={388.33} y={26.11}>
              {'\uBC15'}
            </tspan>
            <tspan x={402.87} y={26.11} letterSpacing={0} fontSize={16.15}>
              {'\uBB3C'}
            </tspan>
            <tspan className="Location__cls-93" x={417.68} y={26.11}>
              {'\uAD00 \uC55E '}
            </tspan>
            <tspan className="Location__cls-98" x={456.43} y={26.11}>
              {'\uD558'}
            </tspan>
            <tspan className="Location__cls-93" x={470.42} y={26.11}>
              {'\uCC28'}
            </tspan>
            <tspan x={0} y={57.6} letterSpacing="-.04em">
              {'\uC9C0\uC120'}
            </tspan>
            <tspan className="Location__cls-59" x={33.23} y={57.6}>
              {'\uBC84'}
            </tspan>
            <tspan className="Location__cls-60" x={49.9} y={57.6}>
              {'\uC2A4'}
            </tspan>
            <tspan x={66.76} y={57.6} letterSpacing="-.04em">
              {'('}
            </tspan>
            <tspan x={72.44} y={57.6} letterSpacing="-.02em">
              {'\uCD08'}
            </tspan>
            <tspan x={89.4} y={57.6} letterSpacing="-.05em">
              {'\uB85D'}
            </tspan>
            <tspan x={105.7} y={57.6}>
              {') : '}
            </tspan>
            <tspan className="Location__cls-69" x={125.75} y={57.6}>
              {'7'}
            </tspan>
            <tspan className="Location__cls-79" x={135.71} y={57.6}>
              {'0'}
            </tspan>
            <tspan x={145.37} y={57.6} letterSpacing="-.01em">
              {'1'}
            </tspan>
            <tspan x={155.7} y={57.6}>
              {'9 '}
            </tspan>
            <tspan x={172.81} y={57.6} className="Location__cls-93">
              {'\uC11C'}
            </tspan>
            <tspan className="Location__cls-93" x={187.12} y={57.6}>
              {'\uC6B8 '}
            </tspan>
            <tspan className="Location__cls-94" x={206.5} y={57.6}>
              {'\uC5ED'}
            </tspan>
            <tspan className="Location__cls-95" x={220.9} y={57.6}>
              {'\uC0AC'}
            </tspan>
            <tspan className="Location__cls-96" x={235.72} y={57.6}>
              {'\uBC15'}
            </tspan>
            <tspan x={250.27} y={57.6} letterSpacing={0} fontSize={16.15}>
              {'\uBB3C'}
            </tspan>
            <tspan className="Location__cls-93" x={265.08} y={57.6}>
              {'\uAD00 \uC55E '}
            </tspan>
            <tspan className="Location__cls-98" x={303.83} y={57.6}>
              {'\uD558'}
            </tspan>
            <tspan className="Location__cls-93" x={317.81} y={57.6}>
              {'\uCC28'}
            </tspan>
            <tspan x={0} y={89.09} letterSpacing={0}>
              {'\uAD11'}
            </tspan>
            <tspan className="Location__cls-107" x={17.37} y={89.09}>
              {'\uC5ED'}
            </tspan>
            <tspan className="Location__cls-59" x={34.11} y={89.09}>
              {'\uBC84'}
            </tspan>
            <tspan className="Location__cls-108" x={50.78} y={89.09}>
              {'\uC2A4'}
            </tspan>
            <tspan x={67.64} y={89.09} letterSpacing="-.02em">
              {'('}
            </tspan>
            <tspan className="Location__cls-107" x={73.7} y={89.09}>
              {'\uBE68'}
            </tspan>
            <tspan x={90.44} y={89.09} letterSpacing="-.03em">
              {'\uAC15'}
            </tspan>
            <tspan className="Location__cls-91" x={107.27} y={89.09}>
              {') : '}
            </tspan>
            <tspan className="Location__cls-111" x={127.32} y={89.09}>
              {'9'}
            </tspan>
            <tspan className="Location__cls-69" x={137.31} y={89.09}>
              {'7'}
            </tspan>
            <tspan x={147.28} y={89.09} letterSpacing="-.04em">
              {'0'}
            </tspan>
            <tspan className="Location__cls-71" x={156.94} y={89.09}>
              {'1'}
            </tspan>
            <tspan className="Location__cls-78" x={167.11} y={89.09}>
              {', '}
            </tspan>
            <tspan x={176.56} y={89.09} letterSpacing="-.02em">
              {'9'}
            </tspan>
            <tspan className="Location__cls-69" x={186.56} y={89.09}>
              {'7'}
            </tspan>
            <tspan x={196.53} y={89.09} letterSpacing=".01em">
              {'0'}
            </tspan>
            <tspan x={207.1} y={89.09} letterSpacing="-.04em">
              {'9'}
            </tspan>
            <tspan x={216.73} y={89.09}>
              {', '}
            </tspan>
            <tspan className="Location__cls-111" x={226.19} y={89.09}>
              {'9'}
            </tspan>
            <tspan className="Location__cls-70" x={236.19} y={89.09}>
              {'7'}
            </tspan>
            <tspan x={246.09} y={89.09} letterSpacing="-.03em">
              {'1'}
            </tspan>
            <tspan className="Location__cls-64" x={255.95} y={89.09}>
              {'0'}
            </tspan>
            <tspan x={265.77} y={89.09}>
              {', '}
            </tspan>
            <tspan x={275.22} y={89.09} letterSpacing=".02em">
              {'2'}
            </tspan>
            <tspan className="Location__cls-72" x={285.97} y={89.09}>
              {'3'}
            </tspan>
            <tspan className="Location__cls-73" x={296.38} y={89.09}>
              {'0'}
            </tspan>
            <tspan className="Location__cls-77" x={307.03} y={89.09}>
              {'0'}
            </tspan>
            <tspan className="Location__cls-78" x={316.85} y={89.09}>
              {', '}
            </tspan>
            <tspan x={326.31} y={89.09} letterSpacing=".02em">
              {'2'}
            </tspan>
            <tspan x={337.06} y={89.09} letterSpacing={0}>
              {'5'}
            </tspan>
            <tspan className="Location__cls-73" x={347.54} y={89.09}>
              {'0'}
            </tspan>
            <tspan x={358.19} y={89.09}>
              {'0'}
            </tspan>
            <tspan x={0} y={120.58} letterSpacing=".01em">
              {'\uC88C'}
            </tspan>
            <tspan x={17.56} y={120.58} letterSpacing="-.03em">
              {'\uC11D'}
            </tspan>
            <tspan className="Location__cls-59" x={34.3} y={120.58}>
              {'\uBC84'}
            </tspan>
            <tspan className="Location__cls-108" x={50.97} y={120.58}>
              {'\uC2A4'}
            </tspan>
            <tspan x={67.83} y={120.58} letterSpacing="-.04em">
              {'('}
            </tspan>
            <tspan x={73.46} y={120.58} letterSpacing="-.04em">
              {'\uC77C'}
            </tspan>
            <tspan x={89.95} y={120.58} letterSpacing="-.03em">
              {'\uBC18'}
            </tspan>
            <tspan x={106.66} y={120.58}>
              {') : '}
            </tspan>
            <tspan className="Location__cls-107" x={126.7} y={120.58}>
              {'1'}
            </tspan>
            <tspan x={136.56} y={120.58} letterSpacing=".01em">
              {'0'}
            </tspan>
            <tspan className="Location__cls-80" x={147.22} y={120.58}>
              {'0'}
            </tspan>
            <tspan x={157.45} y={120.58}>
              {'2'}
            </tspan>
          </text>
          <text className="Location__cls-21" transform="translate(172.59 1229.82)">
            <tspan className="Location__cls-126">{'\uC11C'}</tspan>
            <tspan x={17.13} y={0} letterSpacing="-.05em">
              {'\uC6B8'}
            </tspan>
            <tspan x={33.98} y={0}>
              {'\uC2DC '}
            </tspan>
            <tspan x={57.21} y={0} letterSpacing={0}>
              {'\uC911'}
            </tspan>
            <tspan x={75.04} y={0}>
              {'\uAD6C '}
            </tspan>
            <tspan className="Location__cls-126" x={98.27} y={0}>
              {'\uC815'}
            </tspan>
            <tspan x={115.4} y={0} letterSpacing="-.01em">
              {'\uB3D9'}
            </tspan>
            <tspan x={133.03} y={0}>
              {'\uAE38 '}
            </tspan>
            <tspan x={155.18} y={0} letterSpacing="-.02em">
              {'9'}
            </tspan>
            <tspan className="Location__cls-126" x={165.5} y={0}>
              {'\uBC88'}
            </tspan>
            <tspan x={182.62} y={0}>
              {'\uC9C0'}
            </tspan>
          </text>
          <text className="Location__cls-18" transform="translate(94.77 1229.44)">
            <tspan letterSpacing="-.06em">{'\uC790'}</tspan>
            <tspan x={16.72} y={0} letterSpacing=".01em">
              {'\uAC00'}
            </tspan>
            <tspan x={34.79} y={0}>
              {'\uC6A9'}
            </tspan>
          </text>
          <path className="Location__cls-133" d="M91.02 1260.66h617.96M91.02 1355.21h617.96" />
          <path
            d="M741.81 1605.22V444.36c0-188.77-153-341.81-341.81-341.81h0c-188.78 0-341.81 153-341.81 341.81v1160.86"
            stroke="#ad7e5e"
            fill="none"
            strokeMiterlimit={10}
          />
          <text className="Location__cls-135" transform="matrix(.99 0 0 1 269.73 1119.5)">
            {'\uCE74\uCE74\uC624\uB0B4\uBE44'}
          </text>
          <text className="Location__cls-135" transform="matrix(.99 0 0 1 431.81 1119.5)">
            {'\uB124\uC774\uBC84\uC9C0\uB3C4'}
          </text>
          <text className="Location__cls-135" transform="matrix(.99 0 0 1 137.37 1119.5)">
            {'\uD2F0\uB9F5'}
          </text>
          <text className="Location__cls-135" transform="matrix(.99 0 0 1 603.8 1119.5)">
            {'\uCE74\uCE74\uC624\uB9F5'}
          </text>
        </g>
      </g>
    </svg>
  );
}

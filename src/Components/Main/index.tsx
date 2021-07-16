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
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox={`0 0 ${width} 1724.01`} {...props}>
      <defs>
        <clipPath id="Main__clip-path">
          <path className="Main__cls-1" d="M11.26 0v1724.01" />
        </clipPath>
        <clipPath id="Main__clip-path-2">
          <path
            clipPath="url(#Main__clip-path-66)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M115.7 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-3">
          <path
            clipPath="url(#Main__clip-path-2)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M127.3 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-4">
          <path
            clipPath="url(#Main__clip-path-3)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M138.91 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-5">
          <path
            clipPath="url(#Main__clip-path-4)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M150.51 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-6">
          <path
            clipPath="url(#Main__clip-path-5)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M162.12 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-7">
          <path
            clipPath="url(#Main__clip-path-6)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M173.72 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-8">
          <path
            clipPath="url(#Main__clip-path-7)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M185.32 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-9">
          <path
            clipPath="url(#Main__clip-path-8)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M196.93 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-10">
          <path
            clipPath="url(#Main__clip-path-9)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M208.53 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-11">
          <path
            clipPath="url(#Main__clip-path-10)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M220.14 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-12">
          <path
            clipPath="url(#Main__clip-path)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M22.87 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-13">
          <path
            clipPath="url(#Main__clip-path-11)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M231.74 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-14">
          <path
            clipPath="url(#Main__clip-path-13)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M243.35 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-15">
          <path
            clipPath="url(#Main__clip-path-14)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M254.95 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-16">
          <path
            clipPath="url(#Main__clip-path-15)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M266.55 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-17">
          <path
            clipPath="url(#Main__clip-path-16)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M278.16 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-18">
          <path
            clipPath="url(#Main__clip-path-17)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M289.76 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-19">
          <path
            clipPath="url(#Main__clip-path-18)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M301.37 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-20">
          <path
            clipPath="url(#Main__clip-path-19)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M312.97 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-21">
          <path
            clipPath="url(#Main__clip-path-20)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M324.57 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-22">
          <path
            clipPath="url(#Main__clip-path-21)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M336.18 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-23">
          <path
            clipPath="url(#Main__clip-path-12)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M34.47 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-24">
          <path
            clipPath="url(#Main__clip-path-22)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M347.78 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-25">
          <path
            clipPath="url(#Main__clip-path-24)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M359.39 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-26">
          <path
            clipPath="url(#Main__clip-path-25)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M370.99 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-27">
          <path
            clipPath="url(#Main__clip-path-26)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M382.59 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-28">
          <path
            clipPath="url(#Main__clip-path-27)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M394.2 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-29">
          <path
            clipPath="url(#Main__clip-path-28)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M405.8 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-30">
          <path
            clipPath="url(#Main__clip-path-29)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M417.41 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-31">
          <path
            clipPath="url(#Main__clip-path-30)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M429.01 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-32">
          <path
            clipPath="url(#Main__clip-path-31)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M440.61 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-33">
          <path
            clipPath="url(#Main__clip-path-32)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M452.22 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-34">
          <path
            clipPath="url(#Main__clip-path-23)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M46.08 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-35">
          <path
            clipPath="url(#Main__clip-path-33)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M463.82 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-36">
          <path
            clipPath="url(#Main__clip-path-35)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M475.43 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-37">
          <path
            clipPath="url(#Main__clip-path-36)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M487.03 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-38">
          <path
            clipPath="url(#Main__clip-path-37)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M498.63 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-39">
          <path
            clipPath="url(#Main__clip-path-38)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M510.24 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-40">
          <path
            clipPath="url(#Main__clip-path-39)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M521.84 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-41">
          <path
            clipPath="url(#Main__clip-path-40)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M533.45 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-42">
          <path
            clipPath="url(#Main__clip-path-41)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M545.05 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-43">
          <path
            clipPath="url(#Main__clip-path-42)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M556.65 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-44">
          <path
            clipPath="url(#Main__clip-path-43)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M568.26 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-45">
          <path
            clipPath="url(#Main__clip-path-34)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M57.68 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-46">
          <path
            clipPath="url(#Main__clip-path-44)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M579.86 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-47">
          <path
            clipPath="url(#Main__clip-path-46)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M591.47 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-48">
          <path
            clipPath="url(#Main__clip-path-47)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M603.07 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-49">
          <path
            clipPath="url(#Main__clip-path-48)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M614.68 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-50">
          <path
            clipPath="url(#Main__clip-path-49)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M626.28 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-51">
          <path
            clipPath="url(#Main__clip-path-50)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M637.88 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-52">
          <path
            clipPath="url(#Main__clip-path-51)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M649.49 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-53">
          <path
            clipPath="url(#Main__clip-path-52)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M661.09 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-54">
          <path
            clipPath="url(#Main__clip-path-53)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M672.7 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-55">
          <path
            clipPath="url(#Main__clip-path-54)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M684.3 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-56">
          <path
            clipPath="url(#Main__clip-path-45)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M69.28 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-57">
          <path
            clipPath="url(#Main__clip-path-55)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M695.9 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-58">
          <path
            clipPath="url(#Main__clip-path-57)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M707.51 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-59">
          <path
            clipPath="url(#Main__clip-path-58)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M719.11 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-60">
          <path
            clipPath="url(#Main__clip-path-59)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M730.72 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-61">
          <path
            clipPath="url(#Main__clip-path-60)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M742.32 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-62">
          <path
            clipPath="url(#Main__clip-path-61)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M753.92 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-63">
          <path
            clipPath="url(#Main__clip-path-62)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M765.53 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-64">
          <path
            clipPath="url(#Main__clip-path-56)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M80.89 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-65">
          <path
            clipPath="url(#Main__clip-path-64)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M92.49 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-66">
          <path
            clipPath="url(#Main__clip-path-65)"
            strokeWidth={0.41}
            strokeMiterlimit={10}
            stroke="#1e603f"
            fill="none"
            d="M104.1 0v1724.01"
          />
        </clipPath>
        <clipPath id="Main__clip-path-67">
          <path d="M717.89 1399.93H82.11V748.57C82.11 573 224.44 422.16 400 422.16c175.56 0 317.89 150.84 317.89 326.41z" fill="none" />
        </clipPath>
        <style>
          {`
            .Main__cls-1,
            .Main__cls-77,
            .Main__cls-83,
            .Main__cls-87 {
              fill: none;
            }
            .Main__cls-1,
            .Main__cls-77 {
              stroke: #1e603f;
            }
            .Main__cls-1,
            .Main__cls-77,
            .Main__cls-80,
            .Main__cls-81,
            .Main__cls-82,
            .Main__cls-83,
            .Main__cls-86,
            .Main__cls-87 {
              stroke-miterlimit: 10;
            }
            .Main__cls-1 {
              stroke-width: 0.41px;
            }
            .Main__cls-80,
            .Main__cls-81,
            .Main__cls-82,
            .Main__cls-86 {
              stroke: #326e4c;
            }
            .Main__cls-76 {
              font-family: ${serif};
            }
            .Main__cls-76,
            .Main__cls-85 {
              fill: #1e603f;
            }
            .Main__cls-76 {
              font-size: 13.3px;
            }
            .Main__cls-77 {
              stroke-width: 1.74px;
            }
            .Main__cls-80 {
              stroke-width: 1px;
            }
            .Main__cls-80,
            .Main__cls-82 {
              fill: #fff;
            }
            .Main__cls-81,
            .Main__cls-86 {
              fill: #f7c9dd;
            }
            .Main__cls-81 {
              stroke-width: 0.93px;
            }
            .Main__cls-82,
            .Main__cls-86 {
              stroke-width: 0.92px;
            }
            .Main__cls-83 {
              stroke: #a5d188;
            }
            .Main__cls-83,
            .Main__cls-87 {
              stroke-width: 1.25px;
            }
            .Main__cls-84 {
              fill: #f1ec63;
            }
            .Main__cls-87 {
              stroke: #fff;
            }
          `}
        </style>
      </defs>
      <g id="Main__\uB808\uC774\uC5B4_2" data-name="\uB808\uC774\uC5B4 2">
        <g id="Main__Layer_1" data-name="Layer 1">
          <path fill="#fffcf6" d="M800 1724.01H0V0h800v1724.01z" />
          <g opacity={0.25}>
            <path
              className="Main__cls-1"
              d="M11.26 0v1724.01M22.87 0v1724.01M34.47 0v1724.01M46.08 0v1724.01M57.68 0v1724.01M69.28 0v1724.01M80.89 0v1724.01M92.49 0v1724.01M104.1 0v1724.01M115.7 0v1724.01M127.3 0v1724.01M138.91 0v1724.01M150.51 0v1724.01M162.12 0v1724.01M173.72 0v1724.01M185.32 0v1724.01M196.93 0v1724.01M208.53 0v1724.01M220.14 0v1724.01M231.74 0v1724.01M243.35 0v1724.01M254.95 0v1724.01M266.55 0v1724.01M278.16 0v1724.01M289.76 0v1724.01M301.37 0v1724.01M312.97 0v1724.01M324.57 0v1724.01M336.18 0v1724.01M347.78 0v1724.01M359.39 0v1724.01M370.99 0v1724.01M382.59 0v1724.01M394.2 0v1724.01M405.8 0v1724.01M417.41 0v1724.01M429.01 0v1724.01M440.61 0v1724.01M452.22 0v1724.01M463.82 0v1724.01M475.43 0v1724.01M487.03 0v1724.01M498.63 0v1724.01M510.24 0v1724.01M521.84 0v1724.01M533.45 0v1724.01M545.05 0v1724.01M556.65 0v1724.01M568.26 0v1724.01M579.86 0v1724.01M591.47 0v1724.01M603.07 0v1724.01M614.68 0v1724.01M626.28 0v1724.01M637.88 0v1724.01M649.49 0v1724.01M661.09 0v1724.01M672.7 0v1724.01M684.3 0v1724.01M695.9 0v1724.01M707.51 0v1724.01M719.11 0v1724.01M730.72 0v1724.01M742.32 0v1724.01M753.92 0v1724.01M765.53 0v1724.01M777.13 0v1724.01M788.74 0v1724.01"
            />
          </g>
          <text
            transform="translate(220.62 1492.79)"
            fontFamily={serif}
            fontWeight="regular"
            fill="#443d39"
            fontSize={41}
            stroke="#443d39"
            strokeWidth={0.3}
            letterSpacing=".2em"
            strokeMiterlimit={10}
          >
            {/* eslint-disable-next-line prettier/prettier */}
            <tspan>김효정 &#160;&#160;&#160;김홍식</tspan>
          </text>
          <text transform="translate(183.85 1565.26)" fontSize={29.04} fill="#326e4c" fontFamily={serif}>
            <tspan strokeWidth={0.2} stroke="#326e4c" strokeMiterlimit={10}>
              {'2021\uB144 10\uC6D4 23\uC77C \uD1A0\uC694\uC77C \uC624\uD6C4 5\uC2DC'}
            </tspan>
            <tspan fontFamily={serif} fontWeight="bold">
              <tspan x={87.61} y={44.23}>
                프란치스코 교육회관
              </tspan>
            </tspan>
          </text>
          <path
            d="M395.91 1469.88a5.46 5.46 0 00-5.35 5.56 5.09 5.09 0 001.44 3.42c1 1.07 4.65 4.65 8.14 8.2 2.83-2.9 7.07-7.25 7.95-8.2a5.19 5.19 0 001.44-3.42 5.46 5.46 0 00-5.36-5.56 5.28 5.28 0 00-4.13 2 5.28 5.28 0 00-4.13-2 5.44 5.44 0 00-4.52 8.33"
            fill="#443d39"
          />
          <text
            transform="translate(324.29 232.62)"
            fill="#1e603f"
            fontSize={43.06}
            letterSpacing=".1em"
            fontFamily={serif}
            fontWeight="bold"
          >
            {'10/23'}
          </text>
          <text className="Main__cls-76" transform="matrix(.71 -.7 .7 .71 249.27 212.21)">
            {'W'}
          </text>
          <text className="Main__cls-76" transform="rotate(-39.6 405.848 -266.445)">
            {'E'}
          </text>
          <text className="Main__cls-76" transform="matrix(.81 -.58 .58 .81 275.31 189.35)">
            {'\u2019'}
          </text>
          <text className="Main__cls-76" transform="rotate(-35.9 426.99 -328.918)" />
          <text className="Main__cls-76" transform="rotate(-31.8 460.67 -405.037)">
            {'R'}
          </text>
          <text className="Main__cls-76" transform="rotate(-27.1 506.498 -525.903)">
            {'E'}
          </text>
          <text className="Main__cls-76" transform="rotate(-23.43 562.126 -665.07)" />
          <text className="Main__cls-76" transform="matrix(.94 -.33 .33 .94 320.47 164.62)">
            {'G'}
          </text>
          <text className="Main__cls-76" transform="rotate(-14.54 792.713 -1239.411)">
            {'E'}
          </text>
          <text className="Main__cls-76" transform="rotate(-10.04 1062.676 -1918.692)">
            {'T'}
          </text>
          <text className="Main__cls-76" transform="rotate(-5.44 1798.054 -3774.78)">
            {'T'}
          </text>
          <text className="Main__cls-76" transform="rotate(-1.54 5856.638 -14109.282)">
            {'I'}
          </text>
          <text className="Main__cls-76" transform="translate(392.03 152.12)">
            {'N'}
          </text>
          <text className="Main__cls-76" transform="rotate(7.84 -913.452 3066.027)">
            {'G'}
          </text>
          <text className="Main__cls-76" transform="rotate(11.92 -533.54 2120.28)" />
          <text className="Main__cls-76" transform="rotate(16.47 -328.013 1587.647)">
            {'M'}
          </text>
          <text className="Main__cls-76" transform="rotate(21.87 -197.071 1261.532)">
            {'A'}
          </text>
          <text className="Main__cls-76" transform="matrix(.89 .45 -.45 .89 470.6 170.46)">
            {'R'}
          </text>
          <text className="Main__cls-76" transform="rotate(31.58 -72.203 946.369)">
            {'R'}
          </text>
          <text className="Main__cls-76" transform="matrix(.81 .58 -.58 .81 498.49 186.69)">
            {'I'}
          </text>
          <text className="Main__cls-76" transform="rotate(39.6 -14.99 797.81)">
            {'E'}
          </text>
          <text className="Main__cls-76" transform="rotate(44.19 9.677 739.644)">
            {'D'}
          </text>
          <path className="Main__cls-77" d="M247.71 265.79v8.79M209.59 277.58h76.94" />
          <rect className="Main__cls-77" x={216.12} y={287.02} width={63.77} height={19.24} rx={9.62} />
          <path className="Main__cls-77" d="M248 309.72v8.08M270.61 317.8h-64.47" />
          <rect className="Main__cls-77" x={213.73} y={327.85} width={68.54} height={23.22} rx={11.61} />
          <path
            className="Main__cls-77"
            d="M367.37 269.19v54.13M299.68 327.85h67.69v25.79M431.97 268.13v13.63M393.27 284.76h77.4M400.18 309.82s-.52 13.5 13.84 13.5h38.28c30.16 0 48-7.35 59.67-18 .28-.26.59-.48.86-.72M414 297.52c-7.64 0-13.84 5.51-13.84 12.3M414.02 330.84v13.56M450.09 330.84v13.56M389.81 347.4h84.28M489.09 275.35h54.63M548.51 291.82h18.42M566.93 269.06v54.26M328.34 303.4c12.81 14.4 42.22 14.4 61.13 14.4h8.86M326.2 300.72a22.65 22.65 0 002.14 2.68M270.61 317.8c29.91 0 57.68-10.55 57.68-35 0 0 .17-11.15-3.84-11.15-2.35 0-4 2.47-3.85 11.63a41.52 41.52 0 001.87 9.87"
          />
          <path className="Main__cls-77" d="M413.91 297.52h38.73a10.14 10.14 0 0110.14 10.14 10.14 10.14 0 01-10.14 10.14H408" />
          <rect className="Main__cls-77" x={497.87} y={326.04} width={69.06} height={25.48} rx={12.74} />
          <path
            className="Main__cls-77"
            d="M518.44 298.73c3-3 4.76-5 5.69-5.94a5.44 5.44 0 001.51-3.6 5.74 5.74 0 00-5.62-5.84 5.53 5.53 0 00-4.34 2.13 5.53 5.53 0 00-4.34-2.13 5.74 5.74 0 00-5.62 5.84 5.8 5.8 0 00.88 2.91M632.56 277.65c-9.68 28.91-45.73 39.49-65.63 39.49-21.19 0-37-2.64-51.07-15.59l-1.8-1.66"
          />
          <path className="Main__cls-77" d="M514.06 299.89c-3.66-3.73-5.79-6-6.82-7.1a5.41 5.41 0 01-1.52-3.6 5.74 5.74 0 015.62-5.84" />
          <g clipPath="url(#Main__clip-path-67)">
            <image width={2000} height={3000} xlinkHref="./cropedMainPhoto.png" transform="matrix(.38 0 0 .38 27.23 303.66)" />
            {/* 사진 자리 */}
          </g>
          <path
            d="M718.28 1399.93H81.72v-651.2C81.72 573 224.22 421.94 400 421.94h0c175.78 0 318.28 151 318.28 326.79z"
            stroke="#4d936e"
            strokeMiterlimit={10}
            fill="none"
          />
          <path
            className="Main__cls-80"
            d="M214.82 698.47l1.26-.39 4.09-1.39c7.39-2.75 7.1-8.8 7.1-8.8-.46-5.64-5.46-2.72-5.46-2.72s1.08-5.65-4.45-4.17c0 0-5.77 1.83-5.78 9.72l.12 4.32.08 1.32a2.7 2.7 0 011.94.45 2.77 2.77 0 011.1 1.66z"
          />
          <path
            className="Main__cls-81"
            d="M160.28 1037.82l-1.32-.07-4.32-.07c-7.88.08-9.66 5.87-9.66 5.87-1.48 5.46 4.22 4.41 4.22 4.41s-2.93 5 2.77 5.43c0 0 6.06.23 8.73-7.19l1.35-4.1.37-1.27a2.79 2.79 0 01-1.67-1.08 2.74 2.74 0 01-.47-1.93zM499.69 585.41l-1.08.76-3.46 2.59c-6.18 4.9-4 10.57-4 10.57 2.18 5.22 6 .89 6 .89s.72 5.71 5.53 2.59c0 0 4.92-3.53 2.48-11l-1.45-4.07-.48-1.23a2.76 2.76 0 01-2 .17 2.73 2.73 0 01-1.54-1.27z"
          />
          <path
            className="Main__cls-80"
            d="M667.16 806.33s4.92 2.48 5.7-3.15c0 0 .54-6-6.92-8l-4.14-1-1.27-.26a3.21 3.21 0 01-3.2 2.34l-.13 1.3-.29 4.24c-.31 7.73 5.52 9 5.52 9 5.57 1.04 4.73-4.47 4.73-4.47zM533.7 554.92l-1.31.13-4.31.32c-7.88.36-10-5.32-10-5.32-1.79-5.37 4-4.63 4-4.63s-3.21-4.78 2.46-5.59c0 0 6-.57 9.11 6.69l1.58 4 .45 1.25a2.74 2.74 0 00-1.61 1.17 2.82 2.82 0 00-.37 1.98zM477.59 456.26l1.09.76 3.46 2.59c6.17 4.9 4 10.56 4 10.56-2.18 5.22-6 .89-6 .89s-.72 5.71-5.52 2.6c0 0-4.92-3.53-2.49-11l1.45-4.07.49-1.23a2.81 2.81 0 002 .17 2.78 2.78 0 001.52-1.27z"
          />
          <path
            className="Main__cls-81"
            d="M271.67 540.37H266.03c-7.89.2-9.58 6-9.58 6-1.4 5.48 4.29 4.34 4.29 4.34s-2.87 5 2.85 5.4c0 0 6.05.14 8.62-7.32l1.29-4.12.35-1.28a2.71 2.71 0 01-1.68-1.05 2.75 2.75 0 01-.5-1.97z"
          />
          <path
            className="Main__cls-80"
            d="M274.36 543.41l-.13 1.3-.3 4.25c-.31 7.72 5.53 9 5.53 9 5.52 1 4.72-4.5 4.72-4.5s4.92 2.49 5.71-3.14c0 0 .54-6-6.92-8l-4.14-1-1.28-.27a3.19 3.19 0 01-1.19 1.73 3.13 3.13 0 01-2 .63z"
          />
          <path
            className="Main__cls-82"
            d="M183.86 493.64a7.39 7.39 0 01-3.22.74 7.44 7.44 0 01-.81-14.84 7.27 7.27 0 01.84 0 21.1 21.1 0 0112.35 4.11h-.18a23 23 0 01-8.05 9.5 9.45 9.45 0 01-.93.49z"
          />
          <path className="Main__cls-83" d="M182.56 487.02l10.31-3.43" />
          <path
            className="Main__cls-82"
            d="M181.5 476.84a7.44 7.44 0 1112.16-8.19s.13.28.3.78a21.11 21.11 0 01-.09 13l-.1-.16a23 23 0 01-11.52-4.72 8.92 8.92 0 01-.75-.71z"
          />
          <path className="Main__cls-83" d="M188.42 473.4l5.42 8.9" />
          <path
            className="Main__cls-82"
            d="M196.75 469.41a7.39 7.39 0 012.17-2.5 7.45 7.45 0 019.38 11.54s-.23.2-.65.52a21.07 21.07 0 01-12.41 4.03l.13-.14a22.84 22.84 0 01.93-12.41.14.14 0 010-.06 10 10 0 01.45-.98z"
          />
          <path className="Main__cls-83" d="M203.18 474.76l-7.19 8.69" />
          <path
            className="Main__cls-82"
            d="M208.53 481.61a7.44 7.44 0 11-5 13.77s-.27-.15-.7-.45a21.12 21.12 0 01-7.58-10.59l.18.07a23 23 0 0112.09-2.95h.06a9.14 9.14 0 01.95.15z"
          />
          <path className="Main__cls-83" d="M206.45 489.22l-11.11-4.78" />
          <path
            className="Main__cls-82"
            d="M200.56 496.59a7.44 7.44 0 11-14.66-.52s.06-.3.21-.81a21.08 21.08 0 017.73-10.47v.19a22.79 22.79 0 016.54 10.58v.06c.13.59.18.97.18.97z"
          />
          <path className="Main__cls-83" d="M193.7 496.79l.09-11.87" />
          <circle className="Main__cls-84" cx={194.49} cy={483.65} r={4.87} />
          <circle className="Main__cls-85" cx={194.49} cy={483.65} r={3.22} />
          <path
            className="Main__cls-82"
            d="M140.2 559.85a7.25 7.25 0 01-3.22.74 7.44 7.44 0 01-.8-14.84h.84a21.1 21.1 0 0112.35 4.11h-.18a23 23 0 01-8.05 9.49 9.45 9.45 0 01-.94.5z"
          />
          <path className="Main__cls-83" d="M138.9 553.23l10.31-3.42" />
          <path
            className="Main__cls-82"
            d="M137.84 543.05a7.44 7.44 0 1112.16-8.21s.13.28.3.78a21.14 21.14 0 01-.09 13l-.1-.16a23 23 0 01-11.52-4.72 8.92 8.92 0 01-.75-.69z"
          />
          <path className="Main__cls-83" d="M144.76 539.61l5.42 8.91" />
          <path
            className="Main__cls-82"
            d="M153.09 535.62a7.44 7.44 0 1111.55 9s-.23.21-.65.52a21.1 21.1 0 01-12.41 3.94l.13-.15a22.84 22.84 0 01.93-12.41 9.64 9.64 0 01.45-.9z"
          />
          <path className="Main__cls-83" d="M159.52 540.97l-7.19 8.69" />
          <path
            className="Main__cls-82"
            d="M164.87 547.82a7.44 7.44 0 11-5 13.78s-.27-.16-.7-.46a21.13 21.13 0 01-7.58-10.58l.18.07a22.81 22.81 0 0112.09-2.95h.06a9.14 9.14 0 01.95.14z"
          />
          <path className="Main__cls-83" d="M162.79 555.43l-11.11-4.77" />
          <path
            className="Main__cls-82"
            d="M156.9 562.8a7.44 7.44 0 11-14.66-.53s.06-.3.21-.81a21.12 21.12 0 017.73-10.48v.19a22.81 22.81 0 016.54 10.59 7.74 7.74 0 01.18 1.04z"
          />
          <path className="Main__cls-83" d="M150.04 563.01l.09-11.88" />
          <circle className="Main__cls-84" cx={150.83} cy={549.87} r={4.87} />
          <circle className="Main__cls-85" cx={150.83} cy={549.87} r={3.22} />
          <path
            className="Main__cls-86"
            d="M169.42 527.15a7.44 7.44 0 11-.41-14.66s.3.05.82.17a21.17 21.17 0 0110.94 7h-.19a22.87 22.87 0 01-10.15 7.2 10 10 0 01-1.01.29z"
          />
          <path className="Main__cls-87" d="M169.8 520.42l10.83-.76" />
          <path
            className="Main__cls-86"
            d="M171.3 510.3a7.38 7.38 0 01-.95-3.17 7.44 7.44 0 0114.76-1.75s.05.31.1.83v.05a21.2 21.2 0 01-3.21 12.57l-.06-.18a22.94 22.94 0 01-10-7.43v-.05a9.17 9.17 0 01-.64-.87z"
          />
          <path className="Main__cls-87" d="M178.85 508.68l3.04 9.97" />
          <path
            className="Main__cls-86"
            d="M187.91 506.88a7.44 7.44 0 118.95 11.62s-.27.14-.76.34a21.13 21.13 0 01-13 .74l.15-.11a23 23 0 014-11.8 7.78 7.78 0 01.66-.79z"
          />
          <path className="Main__cls-87" d="M192.81 513.66l-9.12 6.63" />
          <path
            className="Main__cls-86"
            d="M196.3 521.62a7.44 7.44 0 11-8.3 12.12s-.22-.22-.56-.62a21.18 21.18 0 01-4.78-12.12l.16.11a23 23 0 0112.44.14h.06c.68.21.98.37.98.37z"
          />
          <path className="Main__cls-87" d="M192.39 528.47l-9.57-7.38" />
          <path
            className="Main__cls-86"
            d="M184.87 534.15a7.36 7.36 0 01-1.1 3.13 7.45 7.45 0 01-13-7.27s.14-.28.41-.73a21.1 21.1 0 0110.08-8.28l-.06.18a22.82 22.82 0 013.71 11.88v.06c0 .66-.04 1.03-.04 1.03z"
          />
          <path className="Main__cls-87" d="M178.17 532.65l3.03-11.48" />
          <circle className="Main__cls-84" cx={182.19} cy={520.12} r={4.87} />
          <circle className="Main__cls-85" cx={182.19} cy={520.12} r={3.22} />
          <path
            className="Main__cls-86"
            d="M233.58 471.91a7.33 7.33 0 01-3.23.7 7.44 7.44 0 01-.6-14.85h.89a21.16 21.16 0 0112.27 4.24h-.18a23 23 0 01-8.19 9.38c-.62.37-.96.53-.96.53z"
          />
          <path className="Main__cls-87" d="M232.37 465.27l10.36-3.28" />
          <path
            className="Main__cls-86"
            d="M231.46 455.08a7.44 7.44 0 1112.28-8 8.35 8.35 0 01.29.79 21.21 21.21 0 01-.29 13l-.09-.16a23 23 0 01-11.45-4.89 7.72 7.72 0 01-.74-.74z"
          />
          <path className="Main__cls-87" d="M238.42 451.73l5.3 8.99" />
          <path
            className="Main__cls-86"
            d="M246.81 447.87a7.36 7.36 0 012.2-2.46 7.44 7.44 0 019.21 11.67s-.24.2-.66.51a21.19 21.19 0 01-12.47 3.76l.13-.15a22.81 22.81 0 011.11-12.39.14.14 0 010-.06 10 10 0 01.48-.88z"
          />
          <path className="Main__cls-87" d="M253.16 453.31l-7.31 8.58" />
          <path
            className="Main__cls-86"
            d="M258.41 460.24a7.44 7.44 0 11-5.22 13.7s-.27-.16-.7-.47A21.18 21.18 0 01245 462.8l.18.08a22.92 22.92 0 0112.13-2.78h.06a8.4 8.4 0 011.04.14z"
          />
          <path className="Main__cls-87" d="M256.22 467.81l-11.03-4.93" />
          <path
            className="Main__cls-86"
            d="M250.23 475.09a7.44 7.44 0 11-14.65-.73 6.84 6.84 0 01.23-.81v-.05a21.12 21.12 0 017.88-10.36v.19A22.89 22.89 0 01250 474v.06a9.7 9.7 0 01.23 1.03z"
          />
          <path className="Main__cls-87" d="M243.37 475.2l.26-11.87" />
          <circle className="Main__cls-84" cx={244.35} cy={462.08} r={4.87} />
          <circle className="Main__cls-85" cx={244.35} cy={462.08} r={3.22} />
          <path
            className="Main__cls-82"
            d="M270.61 464.66a7.44 7.44 0 11-3.83-14.16h.89a21.26 21.26 0 0112.33 4.2l-.19.05a22.87 22.87 0 01-8.18 9.37h-.05a7.39 7.39 0 01-.97.54z"
          />
          <path className="Main__cls-83" d="M269.41 458.02l10.35-3.27" />
          <path
            className="Main__cls-82"
            d="M268.5 447.83a7.44 7.44 0 1112.28-8s.12.28.29.78a21.14 21.14 0 01-.28 13l-.1-.16a22.94 22.94 0 01-11.44-4.88h-.05a9 9 0 01-.7-.74z"
          />
          <path className="Main__cls-83" d="M275.46 444.49l5.29 8.98" />
          <path
            className="Main__cls-82"
            d="M283.85 440.62a7.42 7.42 0 0112.6-.62 7.42 7.42 0 01-1.18 9.82 8.09 8.09 0 01-.66.52 21.14 21.14 0 01-12.46 3.75l.12-.14a23 23 0 011.11-12.4.08.08 0 000-.05 9.33 9.33 0 01.47-.88z"
          />
          <path className="Main__cls-83" d="M290.2 446.06l-7.32 8.59" />
          <path
            className="Main__cls-82"
            d="M295.45 453a7.44 7.44 0 11-5.23 13.7s-.26-.16-.69-.47a21.14 21.14 0 01-7.42-10.69l.17.07a23 23 0 0112.13-2.77h.06c.61.08.98.16.98.16z"
          />
          <path className="Main__cls-83" d="M293.26 460.57l-11.04-4.94" />
          <path
            className="Main__cls-82"
            d="M287.27 467.85a7.3 7.3 0 01-.33 3.29 7.44 7.44 0 01-14.31-4s.07-.3.23-.8a21.18 21.18 0 017.88-10.37v.19a23 23 0 016.39 10.68v.06a8.55 8.55 0 01.14.95z"
          />
          <path className="Main__cls-83" d="M280.41 467.96l.26-11.88" />
          <circle className="Main__cls-84" cx={281.38} cy={454.83} r={4.87} />
          <circle className="Main__cls-85" cx={281.38} cy={454.83} r={3.22} />
          <path
            className="Main__cls-86"
            d="M616.14 493.64a7.39 7.39 0 003.22.74 7.44 7.44 0 00.81-14.84 7.27 7.27 0 00-.84 0h-.05a21.1 21.1 0 00-12.28 4.01h.18a23 23 0 008 9.5h.05a9.45 9.45 0 00.91.59z"
          />
          <path className="Main__cls-87" d="M617.44 487.02l-10.31-3.43" />
          <path
            className="Main__cls-86"
            d="M618.5 476.84a7.44 7.44 0 10-12.16-8.19s-.13.28-.3.78a21.11 21.11 0 00.09 13l.1-.16a23 23 0 0011.52-4.72 8.92 8.92 0 00.75-.71z"
          />
          <path className="Main__cls-87" d="M611.58 473.4l-5.42 8.9" />
          <path
            className="Main__cls-86"
            d="M603.25 469.41a7.39 7.39 0 00-2.17-2.5 7.45 7.45 0 00-9.38 11.54s.23.2.65.52a21.07 21.07 0 0012.41 4.03l-.13-.14a22.84 22.84 0 00-.93-12.41.14.14 0 000-.06 10 10 0 00-.45-.98z"
          />
          <path className="Main__cls-87" d="M596.82 474.76l7.19 8.69" />
          <path
            className="Main__cls-86"
            d="M591.47 481.61a7.44 7.44 0 105 13.77s.27-.15.7-.45a21.12 21.12 0 007.58-10.59l-.18.07a23 23 0 00-12.09-2.95h-.06a9.14 9.14 0 00-.95.15z"
          />
          <path className="Main__cls-87" d="M593.55 489.22l11.11-4.78" />
          <path
            className="Main__cls-86"
            d="M599.44 496.59a7.44 7.44 0 1014.66-.52s-.06-.3-.21-.81a21.08 21.08 0 00-7.73-10.47v.19a22.79 22.79 0 00-6.54 10.58v.06c-.13.59-.18.97-.18.97z"
          />
          <path className="Main__cls-87" d="M606.3 496.79l-.09-11.87" />
          <circle className="Main__cls-84" cx={605.51} cy={483.65} r={4.87} />
          <circle className="Main__cls-85" cx={605.51} cy={483.65} r={3.22} />
          <path
            className="Main__cls-82"
            d="M630.58 527.15a7.44 7.44 0 10.41-14.66s-.3.05-.82.17a21.17 21.17 0 00-10.94 7h.19a22.87 22.87 0 0010.15 7.2h.05a10 10 0 00.96.29z"
          />
          <path className="Main__cls-83" d="M630.2 520.42l-10.83-.76" />
          <path
            className="Main__cls-82"
            d="M628.7 510.3a7.38 7.38 0 001-3.17 7.44 7.44 0 00-14.76-1.75s-.05.31-.1.83v.05a21.2 21.2 0 003.32 12.59l.06-.18a22.94 22.94 0 0010-7.43v-.05a9.17 9.17 0 00.48-.89z"
          />
          <path className="Main__cls-83" d="M621.15 508.68l-3.04 9.97" />
          <path
            className="Main__cls-82"
            d="M612.09 506.88a7.44 7.44 0 10-9 11.62s.27.14.76.34a21.13 21.13 0 0013 .74l-.15-.11a23 23 0 00-4-11.8 7.78 7.78 0 00-.61-.79z"
          />
          <path className="Main__cls-83" d="M607.19 513.66l9.12 6.63" />
          <path
            className="Main__cls-82"
            d="M603.7 521.62a7.44 7.44 0 108.3 12.12s.22-.22.56-.62a21.18 21.18 0 004.78-12.12l-.16.11a23 23 0 00-12.44.14h-.06c-.63.21-.98.37-.98.37z"
          />
          <path className="Main__cls-83" d="M607.61 528.47l9.57-7.38" />
          <path
            className="Main__cls-82"
            d="M615.13 534.15a7.36 7.36 0 001.1 3.13 7.45 7.45 0 0013-7.27s-.14-.28-.41-.73a21.1 21.1 0 00-10.08-8.28l.06.18a22.82 22.82 0 00-3.71 11.88v.06c0 .66.04 1.03.04 1.03z"
          />
          <path className="Main__cls-83" d="M621.83 532.65l-3.03-11.48" />
          <circle className="Main__cls-84" cx={617.81} cy={520.12} r={4.87} />
          <circle className="Main__cls-85" cx={617.81} cy={520.12} r={3.22} />
          <path
            className="Main__cls-82"
            d="M566.42 471.91a7.33 7.33 0 003.23.7 7.44 7.44 0 00.6-14.85h-.84a21.16 21.16 0 00-12.32 4.24h.18a23 23 0 008.19 9.38c.62.37.96.53.96.53z"
          />
          <path className="Main__cls-83" d="M567.63 465.27l-10.36-3.28" />
          <path
            className="Main__cls-82"
            d="M568.54 455.08a7.44 7.44 0 10-12.28-8 8.35 8.35 0 00-.29.79 21.21 21.21 0 00.29 13l.09-.16a23 23 0 0011.45-4.89 7.72 7.72 0 00.74-.74z"
          />
          <path className="Main__cls-83" d="M561.58 451.73l-5.3 8.99" />
          <path
            className="Main__cls-82"
            d="M553.19 447.87a7.36 7.36 0 00-2.2-2.46 7.44 7.44 0 00-9.21 11.67s.24.2.66.51a21.19 21.19 0 0012.47 3.76l-.13-.15a22.81 22.81 0 00-1.11-12.39.14.14 0 000-.06 10 10 0 00-.48-.88z"
          />
          <path className="Main__cls-83" d="M546.84 453.31l7.31 8.58" />
          <path
            className="Main__cls-82"
            d="M541.59 460.24a7.44 7.44 0 105.22 13.7s.27-.16.7-.47A21.18 21.18 0 00555 462.8l-.18.08a22.92 22.92 0 00-12.13-2.78h-.06a8.4 8.4 0 00-1.04.14z"
          />
          <path className="Main__cls-83" d="M543.78 467.81l11.03-4.93" />
          <path
            className="Main__cls-82"
            d="M549.77 475.09a7.44 7.44 0 1014.65-.73 6.84 6.84 0 00-.23-.81v-.05a21.12 21.12 0 00-7.88-10.36v.19A22.89 22.89 0 00550 474v.06a9.7 9.7 0 00-.23 1.03z"
          />
          <path className="Main__cls-83" d="M556.63 475.2l-.26-11.87" />
          <circle className="Main__cls-84" cx={555.65} cy={462.08} r={4.87} />
          <circle className="Main__cls-85" cx={555.65} cy={462.08} r={3.22} />
          <path
            className="Main__cls-86"
            d="M529.39 464.66a7.44 7.44 0 103.83-14.16h-.84a21.26 21.26 0 00-12.29 4.29l.19.05a22.87 22.87 0 008.18 9.37h.05a7.39 7.39 0 00.88.45z"
          />
          <path className="Main__cls-87" d="M530.59 458.02l-10.35-3.27" />
          <path
            className="Main__cls-86"
            d="M531.5 447.83a7.44 7.44 0 10-12.28-8s-.12.28-.29.78a21.14 21.14 0 00.28 13l.1-.16a22.94 22.94 0 0011.44-4.88 9 9 0 00.75-.74z"
          />
          <path className="Main__cls-87" d="M524.54 444.49l-5.29 8.98" />
          <path
            className="Main__cls-86"
            d="M516.15 440.62a7.42 7.42 0 00-12.6-.62 7.42 7.42 0 001.18 9.82 8.09 8.09 0 00.66.52 21.14 21.14 0 0012.46 3.75l-.12-.14a23 23 0 00-1.11-12.4.08.08 0 010-.05 9.33 9.33 0 00-.47-.88z"
          />
          <path className="Main__cls-87" d="M509.8 446.06l7.32 8.59" />
          <path
            className="Main__cls-86"
            d="M504.55 453a7.44 7.44 0 105.23 13.7s.26-.16.69-.47a21.14 21.14 0 007.53-10.67l-.17.07a23 23 0 00-12.13-2.77h-.06c-.72.06-1.09.14-1.09.14z"
          />
          <path className="Main__cls-87" d="M506.74 460.57l11.04-4.94" />
          <path
            className="Main__cls-86"
            d="M512.73 467.85a7.3 7.3 0 00.33 3.29 7.44 7.44 0 0014.31-4s-.07-.3-.23-.8a21.18 21.18 0 00-7.88-10.37v.19a23 23 0 00-6.39 10.68v.06a8.55 8.55 0 00-.14.95z"
          />
          <path className="Main__cls-87" d="M519.59 467.96l-.26-11.88" />
          <circle className="Main__cls-84" cx={518.62} cy={454.83} r={4.87} />
          <circle className="Main__cls-85" cx={518.62} cy={454.83} r={3.22} />
          <path
            className="Main__cls-86"
            d="M639.71 559.85a7.29 7.29 0 01-3.22.74 7.44 7.44 0 01-.81-14.84h.84a21.1 21.1 0 0112.35 4.11h-.19a23 23 0 01-8 9.49 9.45 9.45 0 01-.97.5z"
          />
          <path className="Main__cls-87" d="M638.41 553.23l10.3-3.42" />
          <path
            className="Main__cls-86"
            d="M637.35 543.05a7.34 7.34 0 01-1.71-2.83 7.45 7.45 0 0113.87-5.36s.13.28.3.78a21.14 21.14 0 01-.09 13l-.11-.16a22.92 22.92 0 01-11.51-4.72 9.55 9.55 0 01-.75-.71z"
          />
          <path className="Main__cls-87" d="M644.26 539.61l5.42 8.91" />
          <path
            className="Main__cls-86"
            d="M652.6 535.62a7.44 7.44 0 1111.55 9s-.23.21-.65.52a21.16 21.16 0 01-12.41 3.94l.12-.15a23 23 0 01.93-12.41 8.12 8.12 0 01.46-.9z"
          />
          <path className="Main__cls-87" d="M659.02 540.97l-7.19 8.69" />
          <path
            className="Main__cls-86"
            d="M664.37 547.82a7.44 7.44 0 11-5 13.78s-.27-.16-.71-.46a21.19 21.19 0 01-7.66-10.55l.18.07a22.78 22.78 0 0112.08-2.95h.06a9.14 9.14 0 011.05.11z"
          />
          <path className="Main__cls-87" d="M662.29 555.43l-11.1-4.77" />
          <path
            className="Main__cls-86"
            d="M656.41 562.8a7.44 7.44 0 11-14.65-.53s.07-.3.22-.81a21.08 21.08 0 017.72-10.48v.19a22.9 22.9 0 016.54 10.59c.12.66.17 1.04.17 1.04z"
          />
          <path className="Main__cls-87" d="M649.55 563.01l.09-11.88" />
          <circle className="Main__cls-84" cx={650.34} cy={549.87} r={4.87} />
          <circle className="Main__cls-85" cx={650.34} cy={549.87} r={3.22} />
        </g>
      </g>
    </svg>
  );
}

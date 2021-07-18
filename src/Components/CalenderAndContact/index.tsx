import { useSelector } from 'react-redux';
import { changeWidth, changeFont } from '../../reducer/layout';
import { changePersonInfo } from '../../reducer/weddingInfo';
import { BrideAndGroom } from './BrideAndGroomDrawings';
import { Calendar } from './Calendar';

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
    weddingInfo: {
      people: { bride, groom, brideMother, brideFather, groomMother, groomFather },
      celebrationMessage,
    },
  } = useSelector(changePersonInfo).payload;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} 1920.86`} {...props}>
      <defs>
        <style>
          {`
            .CalendarAndContact-CalendarAndContact__icons {
              font-size: 27.14px;
              font-family: ${sans};
              font-weight: 500;
            }
            .CalendarAndContact-cls-23,
            .CalendarAndContact-CalendarAndContact__icons {
              fill: #898989;
            }
            .CalendarAndContact-cls-4 {
              fill: #1e603f;
            }
            .CalendarAndContact-cls-16,
            .CalendarAndContact-cls-23,
            .CalendarAndContact-cls-4,
            .CalendarAndContact-CalendarAndContact__icons--line {
              font-family: ${sans};
              font-weight: 400;
            }
            .CalendarAndContact-cls-25,
            .CalendarAndContact-cls-26,
            .CalendarAndContact-CalendarAndContact__icons--line {
              fill: #443d39;
            }
            .CalendarAndContact-CalendarAndContact__icons--line {
              font-size: 32.22px;
            }
            .CalendarAndContact__icons {
              fill: #388256;
            }
            .CalendarAndContact__icons--line {
              fill: none;
              stroke-miterlimit: 10;
              stroke: #faf6dd;
            }
            .CalendarAndContact-cls-21 {
              fill: none;
              stroke-miterlimit: 10;
            }
            .CalendarAndContact-cls-24 {
              fill: #606060;
            }
            .CalendarAndContact-cls-21 {
              stroke: #141414;
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
        <text transform="translate(267.8 1291.82)" fill="#ad7e5e" fontSize={30} fontFamily={serif} fontWeight="bold" letterSpacing=".1em">
          혼주에게 연락하기
        </text>
        <BrideAndGroom />
        <Calendar />
        <text className="CalendarAndContact-cls-23" transform="matrix(.99 0 0 1 176.73 1380.36)">
          신랑측 혼주
        </text>
        <text className="CalendarAndContact-cls-23" transform="matrix(.99 0 0 1 495.8 1380.36)">
          신부측 혼주
        </text>

        <text className="CalendarAndContact-CalendarAndContact__icons" transform="matrix(.99 0 0 1 491.28 1039.67)">
          신부
          <tspan className="CalendarAndContact-CalendarAndContact__icons--line" x={56.01} y={0}>
            {bride.personName}
          </tspan>
        </text>
        <path
          className="CalendarAndContact-cls-21"
          d="M121.39 1396.14h231.18M447.57 1396.14h231.18M74.9 629.21h651.97M74.9 692.81h651.97"
        />
        <text className="CalendarAndContact-cls-23" transform="matrix(.99 0 0 1 158.86 1483.54)">
          아버지
          <tspan className="CalendarAndContact-cls-24" x={72.14} y={0} />
          <tspan className="CalendarAndContact-cls-25" x={77.99} y={0}>
            김용성
          </tspan>
        </text>
        <text className="CalendarAndContact-cls-23" transform="matrix(.99 0 0 1 477.03 1483.6)">
          아버지
          <tspan className="CalendarAndContact-cls-24" x={72.14} y={0} />
          <tspan className="CalendarAndContact-cls-26" x={77.99} y={0}>
            김기주
          </tspan>
        </text>
        <text className="CalendarAndContact-cls-23" transform="matrix(.99 0 0 1 479.13 1662.48)">
          어머니
          <tspan className="CalendarAndContact-cls-24" x={72.14} y={0} />
          <tspan className="CalendarAndContact-cls-26" x={77.99} y={0}>
            정혜영
          </tspan>
        </text>
        <text className="CalendarAndContact-cls-23" transform="matrix(.99 0 0 1 158.86 1662.43)">
          어머니
          <tspan className="CalendarAndContact-cls-24" x={72.14} y={0} />
          <tspan className="CalendarAndContact-cls-25" x={77.99} y={0}>
            김미현
          </tspan>
        </text>
        <text className="CalendarAndContact-CalendarAndContact__icons" transform="matrix(.99 0 0 1 165.24 1039.67)">
          신랑
          <tspan className="CalendarAndContact-CalendarAndContact__icons--line" x={56.01} y={0}>
            {groom.personName}
          </tspan>
        </text>
        <a id="groomPhone" href={`tel://${groom.phone}`}>
          <path
            className="CalendarAndContact__icons"
            d="M182.48,1106.58a2.67,2.67,0,0,1-1.15,2.87c-2.27,1.73-2.46,4.08-1.69,6.59a14.2,14.2,0,0,0,7.42,8.88,5.28,5.28,0,0,0,6.23-.59,2.43,2.43,0,0,1,2.77-.35,8.13,8.13,0,0,1,2,1.24,19.55,19.55,0,0,1,6.13,9.47c-3.39,4-7.27,4.76-11.42,3.46a26.76,26.76,0,0,1-9.79-5.9,50.31,50.31,0,0,1-12.88-17.35,20.49,20.49,0,0,1-2.06-11,9.36,9.36,0,0,1,4.48-6.69,2.34,2.34,0,0,1,2.46,0,8.4,8.4,0,0,1,1.87,1.23,20.93,20.93,0,0,1,5.15,6.76C182.17,1105.6,182.31,1106.1,182.48,1106.58Z"
          />
        </a>
        <a id="groomMessage" href={`sms://${groom.phone}&body=신랑 ${groom.personName}님의 ${celebrationMessage}`}>
          <rect className="CalendarAndContact__icons" x="268.43" y="1104.58" width="37.66" height="24.18" />
          <polyline className="CalendarAndContact__icons--line" points="268.43 1104.58 287.26 1116.67 306.09 1104.58" />
        </a>
        <a id="bridePhone" href={`tel://${bride.phone}`}>
          <path
            className="CalendarAndContact__icons"
            d="M508.52,1106.58a2.66,2.66,0,0,1-1.14,2.87c-2.28,1.73-2.46,4.08-1.7,6.59a14.2,14.2,0,0,0,7.42,8.88,5.29,5.29,0,0,0,6.24-.59,2.41,2.41,0,0,1,2.76-.35,8.19,8.19,0,0,1,2,1.24,21.23,21.23,0,0,1,5.21,6.89c.94,2.11.61,3.25-1.22,4.65a9.68,9.68,0,0,1-9.29,1.39,26.76,26.76,0,0,1-9.79-5.9,50.31,50.31,0,0,1-12.88-17.35c-1.54-3.5-2.56-7.13-2.06-11a9.39,9.39,0,0,1,4.48-6.69,2.34,2.34,0,0,1,2.46,0,8.7,8.7,0,0,1,1.88,1.23,21,21,0,0,1,5.14,6.76C508.21,1105.6,508.35,1106.1,508.52,1106.58Z"
          />
        </a>
        <a id="brideMessage" href={`sms://${bride.phone}&body=신부 ${bride.personName}님의 ${celebrationMessage}`}>
          <rect className="CalendarAndContact__icons" x="594.47" y="1104.58" width="37.66" height="24.18" />
          <polyline className="CalendarAndContact__icons--line" points="594.47 1104.58 613.3 1116.67 632.13 1104.58" />
        </a>
        <a id="groomFatherPhone" href={`tel://${groomFather.phone}`}>
          <path
            className="CalendarAndContact__icons"
            d="M182.48,1543.51a2.67,2.67,0,0,1-1.15,2.87c-2.27,1.73-2.46,4.08-1.69,6.59a14.2,14.2,0,0,0,7.42,8.88,5.28,5.28,0,0,0,6.23-.59,2.43,2.43,0,0,1,2.77-.35,8.13,8.13,0,0,1,2,1.24,19.55,19.55,0,0,1,6.13,9.47c-3.39,4.05-7.27,4.76-11.42,3.46a26.76,26.76,0,0,1-9.79-5.9,50.31,50.31,0,0,1-12.88-17.35,20.47,20.47,0,0,1-2.06-11,9.36,9.36,0,0,1,4.48-6.69,2.34,2.34,0,0,1,2.46,0,8.4,8.4,0,0,1,1.87,1.23,21,21,0,0,1,5.15,6.76C182.17,1542.53,182.31,1543,182.48,1543.51Z"
          />
        </a>
        <a id="groomFatherMessage" href={`sms://${groomFather.phone}&body=신랑 ${groom.personName}님의 ${celebrationMessage}`}>
          <rect className="CalendarAndContact__icons" x="268.43" y="1541.51" width="37.66" height="24.18" />
          <polyline className="CalendarAndContact__icons--line" points="268.43 1541.51 287.26 1553.6 306.09 1541.51" />
        </a>
        <a id="groomMotherPhone" href={`tel://${groomMother.phone}`}>
          <path
            className="CalendarAndContact__icons"
            d="M182.48,1719.3a2.65,2.65,0,0,1-1.15,2.86c-2.27,1.73-2.46,4.08-1.69,6.6a14.2,14.2,0,0,0,7.42,8.87,5.26,5.26,0,0,0,6.23-.59,2.41,2.41,0,0,1,2.77-.34,8.1,8.1,0,0,1,2,1.23,19.53,19.53,0,0,1,6.13,9.48c-3.39,4-7.27,4.75-11.42,3.46a26.9,26.9,0,0,1-9.79-5.9,50.41,50.41,0,0,1-12.88-17.35,20.49,20.49,0,0,1-2.06-11,9.38,9.38,0,0,1,4.48-6.7,2.32,2.32,0,0,1,2.46,0,8.73,8.73,0,0,1,1.87,1.22,21.08,21.08,0,0,1,5.15,6.77C182.17,1718.31,182.31,1718.81,182.48,1719.3Z"
          />
        </a>
        <a id="groomMotherMessage" href={`sms://${groomMother.phone}&body=신랑 ${groom.personName}님의 ${celebrationMessage}`}>
          <rect className="CalendarAndContact__icons" x="268.43" y="1717.29" width="37.66" height="24.18" />
          <polyline className="CalendarAndContact__icons--line" points="268.43 1717.29 287.26 1729.38 306.09 1717.29" />
        </a>

        <a id="brideFatherPhone" href={`tel://${brideFather.phone}`}>
          <path
            className="CalendarAndContact__icons"
            d="M508.52,1543.51a2.66,2.66,0,0,1-1.14,2.87c-2.28,1.73-2.46,4.08-1.7,6.59a14.2,14.2,0,0,0,7.42,8.88,5.29,5.29,0,0,0,6.24-.59,2.41,2.41,0,0,1,2.76-.35,8.19,8.19,0,0,1,2,1.24,21.23,21.23,0,0,1,5.21,6.89c.94,2.11.61,3.25-1.22,4.65a9.68,9.68,0,0,1-9.29,1.39,26.76,26.76,0,0,1-9.79-5.9,50.31,50.31,0,0,1-12.88-17.35c-1.54-3.5-2.56-7.12-2.06-11a9.39,9.39,0,0,1,4.48-6.69,2.34,2.34,0,0,1,2.46,0,8.7,8.7,0,0,1,1.88,1.23,21.15,21.15,0,0,1,5.14,6.76C508.21,1542.53,508.35,1543,508.52,1543.51Z"
          />
        </a>
        <a id="brideFatherMessage" href={`sms://${brideFather.phone}&body=신부 ${bride.personName}님의 ${celebrationMessage}`}>
          <rect className="CalendarAndContact__icons" x="594.47" y="1541.51" width="37.66" height="24.18" />
          <polyline className="CalendarAndContact__icons--line" points="594.47 1541.51 613.3 1553.6 632.13 1541.51" />
        </a>
        <a id="brideMotherPhone" href={`tel://${brideMother.phone}`}>
          <path
            className="CalendarAndContact__icons"
            d="M508.52,1719.3a2.65,2.65,0,0,1-1.14,2.86c-2.28,1.73-2.46,4.08-1.7,6.6a14.2,14.2,0,0,0,7.42,8.87,5.28,5.28,0,0,0,6.24-.59,2.4,2.4,0,0,1,2.76-.34,8.16,8.16,0,0,1,2,1.23,21.27,21.27,0,0,1,5.21,6.9c.94,2.1.61,3.25-1.22,4.65a9.68,9.68,0,0,1-9.29,1.39A26.9,26.9,0,0,1,509,1745a50.41,50.41,0,0,1-12.88-17.35c-1.54-3.5-2.56-7.13-2.06-11a9.41,9.41,0,0,1,4.48-6.7,2.32,2.32,0,0,1,2.46,0,9.05,9.05,0,0,1,1.88,1.22,21.19,21.19,0,0,1,5.14,6.77C508.21,1718.31,508.35,1718.81,508.52,1719.3Z"
          />
        </a>
        <a id="brideMotherMessage" href={`sms://${brideMother.phone}&body=신부 ${bride.personName}님의 ${celebrationMessage}`}>
          <rect className="CalendarAndContact__icons" x="594.47" y="1717.29" width="37.66" height="24.18" />
          <polyline className="CalendarAndContact__icons--line" points="594.47 1717.29 613.3 1729.38 632.13 1717.29" />
        </a>
      </g>
    </svg>
  );
}

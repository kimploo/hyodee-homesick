import { useSelector } from 'react-redux';
import { changeFont } from '../../reducer/layout';
import { getDaysLeft } from '../../util/getDaysLeft';

export const Calendar = () => {
  const {
    layout: {
      font: { sans, serif },
    },
  } = useSelector(changeFont).payload;

  return (
    <>
      <style>
        {`
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
        `}
      </style>
      <text transform="translate(345.3 155.35)" fontSize={43} fontFamily={serif} letterSpacing="-.02em" fill="#ad7e5e">
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
      <circle cx={659.9} cy={496.44} r={28.35} fill="#f7c9dd" />
      <text transform="matrix(.99 0 0 1 645.07 505.77)" fontSize={26.99} fill="#15492e" fontFamily={sans}>
        {'23'}
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
      <text transform="matrix(.99 0 0 1 115.86 670.09)" fontSize={25} fill="#443d39" fontFamily={sans}>
        10월 23일 토요일 오후 5시, 결혼식이 {getDaysLeft('2021-10-23')}일 남았습니다.
      </text>
    </>
  );
};

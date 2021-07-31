import { useState } from 'react';
import { useSelector } from 'react-redux';
import { changeWidth, changeFont } from '../../reducer/layout';
import { changeLocation } from '../../reducer/weddingInfo';

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
      account: { bride, groom, brideParent, groomParent },
    },
  } = useSelector(changeLocation).payload;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [brideOrGroomClick, setBrideOrGroomClick] = useState('bride');

  const modalHandler = (type: 'bride' | 'groom' | 'outside', event: React.SyntheticEvent) => {
    if (type === 'outside') setIsModalOpen(false);
    if (type === 'bride') setBrideOrGroomClick('bride');
    if (type === 'groom') setBrideOrGroomClick('groom');
    if (type === 'bride' || type === 'groom') setIsModalOpen(true);
  };

  const copyToClipboard = (text: string) => {
    if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
      const textarea = document.createElement('textarea');
      textarea.textContent = text;
      textarea.style.position = 'fixed'; // Prevent scrolling to bottom of page in Microsoft Edge.
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy'); // Security exception may be thrown by some browsers.
        return alert('계좌번호가 복사되었습니다. ' + text);
      } catch (ex) {
        console.warn('Copy to clipboard failed.', ex);
        return false;
      } finally {
        document.body.removeChild(textarea);
      }
    }
  };

  const parseBankNumber = (str: string) => {
    return str.split('-').join('');
  };

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
            .account__modal {
              fill: #fffcf6;
            }
            .account__modal--headerLine {
              fill: none;
              stroke: #b5b5b6;
              stroke-miterlimit: 10;
              stroke-width: 0.79px;
            }
            .account__modal--listHeader {
              fill: #494949;
              font-size: 25.85px;
              font-weight: 700;
              letter-spacing: -0.01em;
            }
            .account__modal--listContent {
              fill: #494949;
              font-size: 27.51px;
              letter-spacing: -0.01em;
            }
            .account--listContentName {
              font-size: 20.94px;
              letter-spacing: -0.01em;
            }
            .account__modal--copyButton {
              fill: #e5e0d8;
            }
            .account__modal--copyButtonText {
              font-size: 21.4px;
              fill: #606060;
              letter-spacing: -0.01em;
            }
            .account__modal--closeButton {
              fill: #d3a171;
            }
            .account__modal--closeButtonContent {
              fill: #fffcf6;
              font-size: 31.47px;
              letter-spacing: -0.01em;
            }
            .account__modal--header {
              fill: #1e603f;
              font-size: 32.24px;
              letter-spacing: -0.01em;
            }
          `}
        </style>
      </defs>
      <g id="Account__\uB808\uC774\uC5B4_2" data-name="\uB808\uC774\uC5B4 2">
        <path fill="#1e603f" d="M0 0h800v781.3H0z" onClick={(event) => modalHandler('outside', event)} />
        <text className="account__header" transform="translate(274.67 148.09)">
          ACCOUNT
        </text>
        <text className="account__notice" transform="translate(158.51 232.9)">
          축하의 마음을 담아 축의금을 전달해보세요.
        </text>
        <g id="checkGroomAccount" onClick={(event) => modalHandler('groom', event)}>
          <rect className="account__button" x={183.15} y={331.98} width={433.7} height={73.7} rx={35.59} />
          <text className="account__number__bold" transform="translate(280.66 379.88)">
            신랑
          </text>
          <text className="account__number__regular" transform={`translate(${280.66 + 49.68} 379.88)`}>
            측 계좌번호 보기
          </text>
        </g>
        <g id="checkBrideAccount" onClick={(event) => modalHandler('bride', event)}>
          <rect className="account__button" x={183.15} y={452.22} width={433.7} height={73.7} rx={35.59} />
          <text className="account__number__bold" transform="translate(280.66 500.27)">
            신부
          </text>
          <text className="account__number__regular" transform={`translate(${280.66 + 49.68} 500.27)`}>
            측 계좌번호 보기
          </text>
        </g>

        <path fill="none" stroke="#b5b5b6" strokeMiterlimit={10} strokeWidth={0.79} d="M62.68 628.35h674.64" />
        <text className="account__credit" transform="translate(114.15 680.13)">
          이 청첩장은 신랑(홍식)과 신부(효정)가 함께 작업했습니다. :)
        </text>
        {!isModalOpen ? null : (
          <g id="modal">
            <rect id="back" className="account__modal" x="74.81" y="74.34" width="651.07" height="491.49" />
            <text className="account__modal--header" transform="translate(124.7 164.42) scale(0.99 1)">
              {`${brideOrGroomClick === 'bride' ? '신부' : '신랑'}측 계좌번호`}
            </text>
            <line className="account__modal--headerLine" x1="63.02" y1="628.35" x2="737.66" y2="628.35" />
            <line className="account__modal--headerLine" x1="126.29" y1="178.02" x2="675.17" y2="178.02" />
            <g id="account_hyo">
              <text className="account__modal--listHeader" transform="translate(123.62 354.12) scale(0.99 1)">
                {`${brideOrGroomClick === 'bride' ? '신부' : '신랑'} 계좌`}
              </text>
            </g>
            <g id="hyodeeAccount">
              <text className="account__modal--listContent" transform="translate(250.51 353.61) scale(0.99 1)">
                {brideOrGroomClick === 'bride' ? bride.number : groom.number}
              </text>
              <text className="accpimt__modal--listContentName" transform="translate(252.9 386.96) scale(0.99 1)">
                {brideOrGroomClick === 'bride'
                  ? `${bride.bank} (예금주:${bride.personName})`
                  : `${groom.bank} (예금주:${groom.personName})`}
              </text>
            </g>
            <g
              id="hyodeeAccount_copy"
              onClick={() =>
                copyToClipboard(
                  brideOrGroomClick === 'bride'
                    ? `${bride.bank} ${parseBankNumber(bride.number)}`
                    : `${groom.bank} ${parseBankNumber(groom.number)}`
                )
              }
            >
              <rect className="account__modal--copyButton" x="525.69" y="329.41" width="151.08" height="46.41" rx="8.02" />
              <text className="account__modal--copyButtonText" transform="translate(562.57 360.11) scale(0.99 1)">
                복사하기
              </text>
            </g>
            <g id="account_parents">
              <text className="account__modal--listHeader" transform="translate(123.62 247.64) scale(0.99 1)">
                혼주 계좌
              </text>
            </g>
            <g id="parentsAccount">
              <text className="account__modal--listContent" transform="translate(250.51 247.14) scale(0.99 1)">
                {brideOrGroomClick === 'bride' ? brideParent.number : groomParent.number}
              </text>
              <text className="account__modal--listContentName" transform="translate(252.9 280.99) scale(0.99 1)">
                {brideOrGroomClick === 'bride'
                  ? `${brideParent.bank} (예금주:${brideParent.personName})`
                  : `${groomParent.bank} (예금주:${groomParent.personName})`}
              </text>
            </g>
            <g
              id="parentsAccount_copy"
              onClick={() =>
                copyToClipboard(
                  brideOrGroomClick === 'bride'
                    ? `${brideParent.bank} ${parseBankNumber(brideParent.number)}`
                    : `${groomParent.bank} ${parseBankNumber(groomParent.number)}`
                )
              }
            >
              <rect className="account__modal--copyButton" x="525.69" y="222.94" width="151.08" height="46.41" rx="8.02" />
              <text className="account__modal--copyButtonText" transform="translate(562.57 253.64) scale(0.99 1)">
                복사하기
              </text>
            </g>
            <g id="close" onClick={() => setIsModalOpen(false)}>
              <rect className="account__modal--closeButton" x="207.02" y="451.67" width="386.64" height="76.91" rx="38.46" />
              <text className="account__modal--closeButtonContent" transform="translate(371.83 500.61) scale(0.99 1)">
                닫기
              </text>
            </g>
          </g>
        )}
      </g>
    </svg>
  );
}

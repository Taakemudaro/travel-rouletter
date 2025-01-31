import { FC, memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

/**
 * ルーレット設定ページへ遷移するボタンを表示するコンポネント
 *
 * @returns {JSX.Element} ルーレット設定ページへのリンクボタンUIのJSX要素
 */
export const RouletteSettingButton: FC = memo(() => {
  return (
    <SLinkSetting to="/roulette-setting">
      <SSpan>ルーレットの条件は</SSpan>
      <SSpan>こちらから設定してね！！</SSpan>
    </SLinkSetting>
  );
});

const SLinkSetting = styled(Link)`
  color: ${(props) => props.theme.styles.button.sub.color};
  background-color: ${(props) => props.theme.styles.button.sub.backgroundColor};
  text-decoration: none;
  text-align: center;
  border: 1px solid #110000;
  border-radius: 8px;
  padding: 5px 18px;
  margin: 5px 0;
  font-size: 12px;
  font-weight: 700;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${(props) =>
      props.theme.styles.button.sub.pointerBackGroundColor};
  }

  @media (max-width: 1000px) {
    font-size: 9px;
    padding: 5px 35px;
  }
`;

const SSpan = styled.span`
  @media (max-width: 1000px) {
    display: block;
  }
`;

import { FC, memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

/**
 * Topページへ遷移するボタンを表示するコンポネント
 *
 * @returns {JSX.Element} TopページへのリンクボタンUIのJSX要素
 */
export const TopButton: FC = memo(() => {
  return <SLinkTop to="/">トップページに戻る</SLinkTop>;
});

const SLinkTop = styled(Link)`
  display: inline-block;
  color: ${(props) => props.theme.styles.button.sub.color};
  background-color: ${(props) => props.theme.styles.button.sub.backgroundColor};
  text-decoration: none;
  text-align: center;
  border: 1px solid #110000;
  border-radius: 8px;
  width: 250px;
  padding: 10px 18px;
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
    width: 180px;
  }
`;

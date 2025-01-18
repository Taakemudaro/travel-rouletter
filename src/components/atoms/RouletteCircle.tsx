import { FC, memo } from "react";
import styled from "styled-components";

/**
 * ルーレットの円形オブジェクトを表示するコンポネント
 *
 * @returns {JSX.Element} ルーレットの円形オブジェクトUIのJSX要素
 */
export const RouletteCircle: FC = memo(() => {
  return <SRouletteCircle className="roulette-cirle" />;
});

const SRouletteCircle = styled.div`
  background-color: ${(props) => props.theme.styles.body.backgroundColor};
  border: 40px solid #8b0000;
  border-radius: 50%;
  width: 460px;
  height: 460px;

  @media (max-width: 1000px) {
    width: 280px;
    height: 280px;
    border: 30px solid #8b0000;
  }
`;

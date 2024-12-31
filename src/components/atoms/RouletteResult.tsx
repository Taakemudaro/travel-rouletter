import { FC, memo } from "react";
import styled from "styled-components";

/**
 * ルーレット結果を表示するコンポネント
 *
 * @returns JSX要素（ルーレット結果UI）
 */
export const RouletteResult: FC = memo(() => {
  return <SRouletteResult type="text" value="どうも" />;
});

/**
 * オプションルーレット結果を表示するコンポネント
 *
 * @returns JSX要素（オプションルーレット結果UI）
 */
export const RouletteOptionResult: FC = memo(() => {
  return (
    <SRouletteOptionResult
      type="text"
      // className="roulette-result"
      value="こんにちは"
    />
  );
});

const SRouletteBaseResult = styled.input`
  text-align: center;
  border: 1px solid #110000;
  color: ${(props) => props.theme.styles.body.color};
  font-weight: 700;
`;

const SRouletteResult = styled(SRouletteBaseResult)`
  font-size: 30px;
  background-color: #cd853f;
  padding: 30px 0px;
  margin: 10px;
`;

const SRouletteOptionResult = styled(SRouletteBaseResult)`
  font-size: 13px;
  background-color: #ffdead;
  padding: 15px 0;
  margin: 10px 10px;
`;

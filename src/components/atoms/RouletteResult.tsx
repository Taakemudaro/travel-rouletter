import { FC, memo, useEffect, useState } from "react";
import styled from "styled-components";
import { prefectures } from "../../assets/data/prefectures";

/**
 * ルーレット結果を表示するコンポネント
 *
 * @returns JSX要素（ルーレット結果UI）
 */
type Props = {
  start: boolean;
};
export const RouletteResult: FC<Props> = memo((props) => {
  const { start } = props;

  const [index, setIndex] = useState(0);

  // スタート実行時、50msごとにindex出力の連続切り替え
  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        setIndex((oldIndex) => {
          if (oldIndex < prefectures.length - 1) {
            const indexResult = Math.floor(Math.random() * prefectures.length);
            return indexResult;
          }
          return 0;
        });
        console.log("都道府県: " + prefectures[index]);
        console.log("index: " + index);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [start, index]);

  return <SRouletteResult>{prefectures[index]}</SRouletteResult>;
});

/**
 * オプションルーレット結果を表示するコンポネント
 *
 * @returns JSX要素（オプションルーレット結果UI）
 */
export const RouletteOptionResult: FC = memo(() => {
  return <SRouletteOptionResult>{"こんにちは"}</SRouletteOptionResult>;
});

const SRouletteBaseResult = styled.div`
  box-sizing: border-box;
  text-align: center;
  border: 1px solid #110000;
  color: ${(props) => props.theme.styles.body.color};
  font-weight: 700;
`;

const SRouletteResult = styled(SRouletteBaseResult)`
  font-size: 29px;
  background-color: #cd853f;
  padding: 30px 0;
  width: 340px;
  margin: 10px;

  @media (max-width: 1000px) {
    padding: 15px 0px;
    font-size: 20px;
    width: 95%;
    margin: 5px;
  }
`;

const SRouletteOptionResult = styled(SRouletteBaseResult)`
  font-size: 13px;
  background-color: #ffdead;
  padding: 15px 0;
  margin: 10px;

  @media (max-width: 1000px) {
    font-size: 13px;
    padding: 13px 0;
    width: 90%;
    margin: 5px;
  }
`;

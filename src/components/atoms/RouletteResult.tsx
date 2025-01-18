import { FC, memo, useEffect } from "react";
import styled from "styled-components";
import { useIntervalRoulette } from "../../hooks/useIntervalRoulette";

type Props = {
  start: boolean;
  values: string[];
  selectedOption?: string | undefined;
  changePrefecture?: (value: string) => void;
};
/**
 * ルーレット結果を表示するコンポネント
 *
 * @param start ルーレットが動作中かを示すフラグ
 * @param values ルーレットデータ
 * @param changePrefecture 現在表示されている都道府県の値をセットする関数
 * @returns {JSX.Element} ルーレット結果UIのJSX要素
 */
export const RouletteResult: FC<Props> = memo((props) => {
  const { start, values, changePrefecture } = props;
  const { onIntervalRoulette, index } = useIntervalRoulette();
  const selectedOption = "on";

  // スタート実行時、50msごとにindex出力の連続切り替え
  useEffect(() => {
    const cleanUp = onIntervalRoulette({ start, selectedOption, data: values });
    if (changePrefecture) {
      changePrefecture(values[index]);
    }
    return () => {
      if (cleanUp) cleanUp();
    };
  }, [start, values, changePrefecture, onIntervalRoulette, index]);

  return <SRouletteResult>{values[index]}</SRouletteResult>;
});

/**
 * オプションルーレット結果を表示するコンポネント
 *
 * @param start ルーレットが動作中かを示すフラグ
 * @param selectedOption 現在表示されている都道府県の値を示すフラグ(都道府県に応じて市区町村の出力データを動的にする)
 * @param values オプションルーレットのデータ
 * @returns {JSX.Element} オプションルーレット結果UIのJSX要素
 */
export const RouletteOptionResult: FC<Props> = memo((props) => {
  const { start, selectedOption, values } = props;
  const { onIntervalRoulette, index } = useIntervalRoulette();
  useEffect(() => {
    const cleanUp = onIntervalRoulette({ start, selectedOption, data: values });
    return () => {
      if (cleanUp) cleanUp();
    };
  }, [start, selectedOption, values, onIntervalRoulette]);

  return <SRouletteOptionResult>{values[index]}</SRouletteOptionResult>;
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
    font-size: 12px;
    padding: 13px 0;
    width: 90%;
    margin: 5px;
  }
`;

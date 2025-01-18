import { useCallback, useState } from "react";

type UseIntervalRouletteProps = {
  start: boolean | undefined;
  selectedOption: string | undefined;
  data: string[];
};

/**
 * ルーレット結果のインデックスをランダムに連続切り替えし、指定したデータ配列の結果を出力するカスタムフック
 *
 * @returns {object} フックが返す値
 * @returns {function} return.onIntervalRoulette ルーレット結果のインデックスをランダムに連続切り替えし、指定したデータ配列の結果を出力する関数
 * @returns {number} return.index 現在のルーレット結果のインデックス
 */
export const useIntervalRoulette = () => {
  const [index, setIndex] = useState(0);

  const onIntervalRoulette = useCallback((props: UseIntervalRouletteProps) => {
    const { start, selectedOption, data } = props;
    // スタート実行時、50msごとにindex出力の連続切り替え
    if (start && selectedOption === "on") {
      const interval = setInterval(() => {
        setIndex((oldIndex) => {
          if (oldIndex < data.length - 1) {
            const indexResult = Math.floor(Math.random() * data.length);
            console.log("indexResult: " + indexResult);
            console.log("data: " + data[indexResult]);
            return indexResult;
          }
          return 0;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, []);
  return { onIntervalRoulette, index };
};

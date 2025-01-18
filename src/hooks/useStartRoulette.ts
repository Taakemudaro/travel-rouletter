import { useCallback, useState } from "react";

/**
 * ルーレットの開始、停止を管理するカスタムフック
 *
 * @returns {object} フックが返す値
 * @returns {function} return.startRoulette ルーレットを開始、または停止する関数
 * @returns {boolean} return.start ルーレットが動作中かを示すフラグ
 */
export const useStartRoulette = () => {
  const [start, setStart] = useState(false);

  const startRoulette = useCallback(() => {
    setStart(!start);
  }, [start]);

  return { startRoulette, start };
};

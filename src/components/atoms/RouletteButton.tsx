import { FC, memo } from "react";
import styled from "styled-components";

type Props = {
  startRoulette: () => void;
  start: boolean;
};

/**
 * ルーレットボタン(スタート・ストップ)を表示するコンポネント
 *
 * @param startRoulette ルーレットを開始、または停止する関数
 * @param start ルーレットが動作中かを示すフラグ
 * @returns {JSX.Element} ルーレットスタート・ストップボタンUIのJSX要素
 */
export const RouletteButton: FC<Props> = memo((props) => {
  const { startRoulette, start } = props;

  return (
    <>
      <SRouletteButton
        type="button"
        className="start-roulette"
        onClick={startRoulette}
      >
        <span>ルーレット〜</span>
        <SSpanStart>{start ? "ストップ!!" : "スタート!!"}</SSpanStart>
      </SRouletteButton>
    </>
  );
});

const SRouletteButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${(props) =>
    props.theme.styles.button.main.backgroundColor};
  color: ${(props) => props.theme.styles.button.main.color};
  border: 1px solid #110000;
  border-radius: 8px;
  padding: 10px 38px;
  margin: 5px 0;
  font-size: 28px;
  font-weight: 700;
  transition: background-color 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.theme.styles.button.main.pointerBackGroundColor};
  }

  @media (max-width: 1000px) {
    font-size: 12px;
    padding: 7px 20px;
    margin: 0;
  }
`;

const SSpanStart = styled.span`
  font-size: 46px;
  line-height: 1.2;

  @media (max-width: 1000px) {
    font-size: 20px;
    padding: 7px 40px;
    line-height: 0.4;
  }
`;

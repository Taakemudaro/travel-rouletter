import { FC, memo } from "react";
import styled from "styled-components";
import { RouletteOptionResult, RouletteResult } from "../atoms/RouletteResult";
import { RouletteCircle } from "../atoms/RouletteCircle";

/**
 * ルーレットオブジェクトを表示するコンポネント
 *
 * @returns JSX要素（ルーレットUI全体）
 */
type Props = {
  start: boolean;
};

export const RouletteObject: FC<Props> = memo((props) => {
  const { start } = props;
  return (
    <SRouletteObject>
      <RouletteCircle />
      <SRouletteResultGroup className="roulette-object">
        <RouletteResult start={start} />
        <SRouletteOptionList>
          <RouletteOptionResult />
          <RouletteOptionResult />
          <RouletteOptionResult />
          <RouletteOptionResult />
        </SRouletteOptionList>
      </SRouletteResultGroup>
    </SRouletteObject>
  );
});

const SRouletteObject = styled.div`
  position: relative;
`;

const SRouletteResultGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 140px;
  left: 90px;

  @media (max-width: 1000px) {
    top: 80px;
    left: 66px;
    width: 60%;
  }
`;

const SRouletteOptionList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

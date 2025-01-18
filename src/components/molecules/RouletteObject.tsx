import { FC, memo, useState } from "react";
import styled from "styled-components";
import { RouletteOptionResult, RouletteResult } from "../atoms/RouletteResult";
import { RouletteCircle } from "../atoms/RouletteCircle";
import { prefectures } from "../../assets/data/rouletteOptionData/prefectures";
import { themes } from "../../assets/data/rouletteOptionData/themes";
import { useSelectedOption } from "../../hooks/useSelectedOption";
import { durations } from "../../assets/data/rouletteOptionData/durations";
import { costs } from "../../assets/data/rouletteOptionData/costs";
import { municipalities } from "../../assets/data/rouletteOptionData/municipalities";

type Props = {
  start: boolean;
};

/**
 * ルーレット結果の全体オブジェクトを表示するコンポネント
 *
 * @param start ルーレットが動作中かを示すフラグ
 * @returns ルーレット結果を表示するオブジェクト全体UIのJSX要素
 */
export const RouletteObject: FC<Props> = memo((props) => {
  const { start } = props;
  const { selectedOptions } = useSelectedOption();

  const [selectedPrefecture, setSelectedPrefecture] = useState("");
  const changePrefecture = (prefecture: string) => {
    setSelectedPrefecture(prefecture);
  };
  const funcMunicipalities = municipalities();
  const getPrefecture = funcMunicipalities.find(
    (prefecture) => prefecture.prefecture === selectedPrefecture
  );
  const getCities = getPrefecture?.cities || [];

  return (
    <SRouletteObject>
      <RouletteCircle />
      <SRouletteResultGroup className="roulette-object">
        <RouletteResult
          start={start}
          values={prefectures}
          changePrefecture={changePrefecture}
        />
        <SRouletteOptionList>
          <RouletteOptionResult
            start={start}
            selectedOption={selectedOptions.city}
            values={getCities}
          />
          <RouletteOptionResult
            start={start}
            selectedOption={selectedOptions.theme}
            values={themes}
          />
          <RouletteOptionResult
            start={start}
            selectedOption={selectedOptions.duration}
            values={durations}
          />
          <RouletteOptionResult
            start={start}
            selectedOption={selectedOptions.cost}
            values={costs}
          />
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

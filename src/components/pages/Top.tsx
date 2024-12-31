import { FC, memo } from "react";
import { RouletteObject } from "../molecules/RouletteObject";
import { Footer } from "../organisms/Footer";
import { TopLayout } from "../templates/TopLayout";
import { RouletteButton } from "../atoms/RouletteButton";
import styled from "styled-components";

export const Top: FC = memo(() => {
  return (
    <SFullPage>
      <TopLayout title="TRAVEL Roulette TOP" />
    </SFullPage>
  );
});

const SFullPage = styled.div`
  width: 100%;
`;

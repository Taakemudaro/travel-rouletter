import { FC, memo } from "react";
import { Footer } from "../organisms/Footer";
import { RouletteObject } from "../molecules/RouletteObject";
import { RouletteButton } from "../atoms/RouletteButton";
import styled from "styled-components";
import { RouletteSettingButton } from "../atoms/RouletteSettingButton";
import { useStartRoulette } from "../../hooks/useStartRoulette";

type TopProps = {
  title: string;
};

/**
 * Topページ用のレイアウトテンプレートを表示するコンポネント
 *
 * @returns Topページ用のレイアウトテンプレートUIのJSX要素
 */
export const TopLayout: FC<TopProps> = memo((props) => {
  const { startRoulette, start } = useStartRoulette();

  return (
    <>
      {/* <p>{props.title}</p> */}
      <SPageLayout>
        <SLeftLayout>
          <SResponsiveLayout>
            <SMainLogo src="/travel-rouletter-logo.png" alt="main-logo" />
            <SResponsiveLink>
              {/* 一旦コメントアウト */}
              {/* <SLink href="/how-to-use">
                ルーレットの利用方法はこちらをクリックしてね！
              </SLink> */}
              <RouletteSettingButton />
            </SResponsiveLink>
          </SResponsiveLayout>
          <RouletteButton start={start} startRoulette={startRoulette} />
        </SLeftLayout>
        <SRightLayout>
          <RouletteObject start={start} />
        </SRightLayout>
      </SPageLayout>
      <Footer />
    </>
  );
});

// 1000px以下の画面設定
const SResponsiveLayout = styled.div`
  width: 290px;
  @media (max-width: 1000px) {
    width: 500px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const SResponsiveLink = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    margin: 10px;
  }
`;

// All画面設定
const SPageLayout = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 3.6% 0;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
    margin-top: 30px;
    height: 90vh;
    padding: 0;
  }
`;

const SLeftLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 37%;

  @media (max-width: 1000px) {
    width: 100%;
    align-items: center;
  }
`;

const SRightLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64%;

  @media (max-width: 1000px) {
    width: 80%;
    margin: 20px 0;
  }
`;

const SMainLogo = styled.img`
  display: inline-block;
  width: 315px;
  margin-bottom: 82px;

  @media (max-width: 1000px) {
    width: 150px;
    margin-bottom: 40px;
  }
`;

const SLink = styled.a`
  font-size: 12px;
  font-weight: 800;
  margin: 2px 0;
  color: ${(props) => props.theme.styles.link.color};
  &:hover {
    color: ${(props) => props.theme.styles.link.pointerColor};
  }

  @media (max-width: 1000px) {
    font-size: 8px;
  }
`;

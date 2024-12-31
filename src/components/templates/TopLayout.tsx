import { FC, memo } from "react";
import { Footer } from "../organisms/Footer";
import { RouletteObject } from "../molecules/RouletteObject";
import { RouletteButton } from "../atoms/RouletteButton";
import styled from "styled-components";
import { RouletteSettingButton } from "../atoms/RouletteSettingButton";

type TopProps = {
  title: string;
};

export const TopLayout: FC<TopProps> = memo((props) => {
  return (
    <>
      {/* <p>{props.title}</p> */}
      <SPageLayout>
        <SLeftLayout>
          <SResponsiveLayout>
            <SMainLogo src="#" alt="main-logo" />
            <SResponsiveLink>
              <SLinkHowToUse href="/how-to-use">
                ルーレットの利用方法はこちらをクリックしてね！
              </SLinkHowToUse>
              <RouletteSettingButton />
            </SResponsiveLink>
          </SResponsiveLayout>
          <RouletteButton />
        </SLeftLayout>
        <SRightLayout>
          <RouletteObject />
        </SRightLayout>
      </SPageLayout>
      <Footer />
    </>
  );
});

// 1000px以下の画面設定
const SResponsiveLayout = styled.div`
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: row;
  }
`;

const SResponsiveLink = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    margin: 10px;
    width: 65%;
  }
`;

// All画面設定
const SPageLayout = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  width: 100%;
  height: 90vh;

  @media (max-width: 1000px) {
    flex-direction: column;
    margin: 20px 0px;
    height: 83vh;
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
  background-color: #808080;
  padding: 90px 100px;
  margin: 0 0 35px 0;

  @media (max-width: 1000px) {
    padding: 30px 10px;
    width: 35%;
  }
`;

const SLinkHowToUse = styled.a`
  font-size: 12px;
  text-decoration: none;
  font-weight: 800;
  margin: 2px 0;

  @media (max-width: 1000px) {
    font-size: 8px;
  }
`;

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
          <SMainLogo src="#" alt="main-logo" />
          <SLinkHowToUse href="/how-to-use">
            ルーレットの利用方法はこちらをクリックしてね！
          </SLinkHowToUse>
          <RouletteSettingButton />
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

const SPageLayout = styled.div`
  display: flex;
  flex: 1;
  margin: 1% 0;
`;

const SLeftLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  margin: 110px 0px 20px 140px;
`;

const SRightLayout = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  margin: 40px 10px 60px 10px;
`;

const SMainLogo = styled.img`
  display: inline-block;
  background-color: #808080;
  padding: 90px 100px;
  margin: 0 0 35px 0;
`;

const SLinkHowToUse = styled.a`
  font-size: 12px;
  text-decoration: none;
  font-weight: 800;
  margin: 2px 0;
`;

import { FC, memo, ReactNode } from "react";
import styled from "styled-components";
import { TopButton } from "../atoms/TopButton";
import { Footer } from "../organisms/Footer";

type Props = {
  // title: string;
  children: ReactNode;
};

/**
 * Topページ以外のページレイアウトテンプレートを表示するコンポネント
 *
 * @param children 各ページの表示内容
 * @returns ページのレイアウトテンプレートUIのJSX要素
 */
export const BasicLayout: FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      {/* <p>{props.title}</p> */}
      <SPageLayout>
        <SLeftLayout>
          <SResponsiveLayout>
            <SResponsiveLogo>
              <SMainLogo src="#" alt="main-logo" />
              <SSubLogo src="#" alt="sub-logo" />
            </SResponsiveLogo>
            <SResponsiveLink>
              <TopButton />
            </SResponsiveLink>
          </SResponsiveLayout>
        </SLeftLayout>
        <SRightLayout>
          <Stitle>ルーレットのオプション設定</Stitle>
          {children}
        </SRightLayout>
      </SPageLayout>
      <Footer />
    </>
  );
});

// 1000px以下の画面設定
const SResponsiveLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const SResponsiveLink = styled.div`
  @media (max-width: 1000px) {
  }
`;

const SResponsiveLogo = styled.div`
  @media (max-width: 1000px) {
    display: flex;
  }
`;

// All画面設定
const SPageLayout = styled.div`
  display: flex;
  flex: 1;
  padding: 3.6% 0;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
    margin: 20px 0px;
  }
`;

const SLeftLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 4.5% 20px 3.6% 130px;
  width: 37%;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0;
    align-items: center;
  }
`;

const SRightLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 27px 180px 0 20px;
  width: 64%;

  @media (max-width: 1000px) {
    width: 80%;
    margin: 0 auto;
  }
`;

const SMainLogo = styled.img`
  display: inline-block;
  background-color: #808080;
  padding: 90px 100px;
  margin: 0 0 15px 0;

  @media (max-width: 1000px) {
    padding: 25px 30px;
    margin-right: 20px;
    width: 35%;
  }
`;

const SSubLogo = styled.img`
  display: inline-block;
  background-color: #808080;
  padding: 60px 100px;
  margin: 0 0 15px 0;

  @media (max-width: 1000px) {
    padding: 25px 30px;
    width: 35%;
  }
`;

const Stitle = styled.h1`
  display: block;
  align-items: center;
  text-align: center;
  font-size: 25px;
`;

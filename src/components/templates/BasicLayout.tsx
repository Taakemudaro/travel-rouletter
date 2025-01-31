import { FC, memo, ReactNode } from "react";
import styled from "styled-components";
import { TopButton } from "../atoms/TopButton";
import { Footer } from "../organisms/Footer";

type Props = {
  title: string;
  children: ReactNode;
};

/**
 * Topページ以外のページレイアウトテンプレートを表示するコンポネント
 *
 * @param children 各ページの表示内容
 * @returns ページのレイアウトテンプレートUIのJSX要素
 */
export const BasicLayout: FC<Props> = memo((props) => {
  const { title, children } = props;
  return (
    <>
      {/* <p>{props.title}</p> */}
      <SPageLayout>
        <SLeftLayout>
          <SResponsiveLayout>
            <SResponsiveLogo>
              <SMainLogo src="/travel-rouletter-logo.png" alt="main-logo" />
              <SSubLogo src="/travel-rouletter-sub-logo.png" alt="sub-logo" />
            </SResponsiveLogo>
            <SResponsiveLink>
              <TopButton />
            </SResponsiveLink>
          </SResponsiveLayout>
        </SLeftLayout>
        <SRightLayout>
          <Stitle>{title}</Stitle>
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
  padding: 35px 0 1% 0;
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
  padding: 79px 20px 3.6% 12.9%;
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
  align-items: flex-start;
  margin: 80px 75px 0 75px;
  width: 64%;

  @media (max-width: 1000px) {
    width: 65%;
    margin: 30px auto 0 auto;
  }
`;

const SMainLogo = styled.img`
  display: inline-block;
  width: 315px;
  margin-bottom: 60px;

  @media (max-width: 1000px) {
    width: 150px;
    margin: 0 15px 20px 0;
  }
`;

const SSubLogo = styled.img`
  display: inline-block;
  background-color: #808080;
  margin: 0 0 15px 0;
  width: 320px;

  @media (max-width: 1000px) {
    width: 150px;
    height: auto;
  }
`;

const Stitle = styled.h1`
  text-align: left;
  font-size: 25px;
`;

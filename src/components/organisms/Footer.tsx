import { FC, memo } from "react";
import styled from "styled-components";

/**
 * Footerを表示するコンポネント
 *
 * @returns FooterUIのJSX要素
 */
export const Footer: FC = memo(() => {
  return (
    <SFooter>
      <SMainLogo src="/travel-rouletter-logo.png" alt="footer-logo" />
      <SFooterSmall>
        &copy; 2025{" "}
        <SLink href="https://yuki-travelmap.com/">Yuki-TravelMap</SLink>
      </SFooterSmall>
      {/* 一旦コメントアウト */}
      {/* <SLink href="/terms-of-use">利用規約</SLink> */}
    </SFooter>
  );
});

const SFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
`;

const SFooterSmall = styled.small`
  margin: 4px 20px 4px 20px;
`;

const SLink = styled.a`
  color: ${(props) => props.theme.styles.link.color};
  &:hover {
    color: ${(props) => props.theme.styles.link.pointerColor};
  }
`;

const SMainLogo = styled.img`
  width: 60px;
`;

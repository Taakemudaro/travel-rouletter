import { FC, memo } from "react";
import styled from "styled-components";

export const Footer: FC = memo(() => {
  return (
    <SFooter>
      <img src="#" alt="footer-logo" />
      <SFooterSmall>&copy; 2025 Yuki-TravelMap</SFooterSmall>
      <a href="/terms-of-use">利用規約</a>
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

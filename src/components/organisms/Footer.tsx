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
  // margin-top: 30px;
`;

const SFooterSmall = styled.small`
  margin: 0 20px;
`;

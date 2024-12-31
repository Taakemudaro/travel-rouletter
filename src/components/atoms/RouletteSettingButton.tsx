import { FC, memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const RouletteSettingButton: FC = memo(() => {
  return (
    <SRouletteSettingButton type="button" className="start-roulette">
      <SLinkSetting to="/how-to-use">
        ルーレットの条件はこちらから設定してね！！
      </SLinkSetting>
    </SRouletteSettingButton>
  );
});

const SRouletteSettingButton = styled.button`
  text-align: center;
  background-color: ${(props) => props.theme.styles.button.sub.backgroundColor};
  border: 1px solid #110000;
  border-radius: 8px;
  padding: 5px 18px;
  margin: 5px 0;
  font-size: 12px;
  font-weight: 700;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${(props) =>
      props.theme.styles.button.sub.pointerBackGroundColor};
  }

  @media (max-width: 1000px) {
    font-size: 9px;
  }
`;

const SLinkSetting = styled(Link)`
  color: ${(props) => props.theme.styles.button.sub.color};
  text-decoration: none;
`;

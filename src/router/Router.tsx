import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { HowToUse } from "../components/pages/HowToUse";
import { RouletteSetting } from "../components/pages/RouletteSetting";
import { TermsOfUse } from "../components/pages/TermsOfUse";
import { Page404 } from "../components/pages/Page404";

export const Router: FC = memo(() => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/how-to-use" element={<HowToUse />} />
        <Route path="/roulette-setting" element={<RouletteSetting />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
});

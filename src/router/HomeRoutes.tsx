import { HowToUse } from "../components/pages/HowToUse";
import { RouletteSetting } from "../components/pages/RouletteSetting";
import { TermsOfUse } from "../components/pages/TermsOfUse";
import { Page404 } from "../components/pages/Page404";
import { ReactNode } from "react";

export interface RoutesConfig {
  path: string;
  title: string;
  children: ReactNode;
}

export const homeRoutes: RoutesConfig[] = [
  {
    path: "/how-to-use",
    title: "ルーレット利用方法",
    children: <HowToUse />,
  },
  {
    path: "/roulette-setting",
    title: "ルーレットのオプション設定",
    children: <RouletteSetting />,
  },
  {
    path: "/terms-of-use",
    title: "利用規約",
    children: <TermsOfUse />,
  },
  {
    path: "*",
    title: "404 Not Found",
    children: <Page404 />,
  },
];

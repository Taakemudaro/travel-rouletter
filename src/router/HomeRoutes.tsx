import { Top } from "../components/pages/Top";
import { HowToUse } from "../components/pages/HowToUse";
import { RouletteSetting } from "../components/pages/RouletteSetting";
import { TermsOfUse } from "../components/pages/TermsOfUse";
import { Page404 } from "../components/pages/Page404";
import { ReactNode } from "react";

export interface RoutesConfig {
  path: string;
  children: ReactNode;
}

export const homeRoutes: RoutesConfig[] = [
  // {
  //   path: "/",
  //   children: <Top />,
  // },
  {
    path: "/how-to-use",
    children: <HowToUse />,
  },
  {
    path: "/roulette-setting",
    children: <RouletteSetting />,
  },
  {
    path: "/terms-of-use",
    children: <TermsOfUse />,
  },
  {
    path: "*",
    children: <Page404 />,
  },
];

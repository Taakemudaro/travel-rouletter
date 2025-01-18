import { FC, memo } from "react";
import { TopLayout } from "../templates/TopLayout";

/**
 * Topページを表示するコンポネント
 *
 * @returns TopページUIのJSX要素
 */
export const Top: FC = memo(() => {
  return (
    <>
      <TopLayout title="TRAVEL Roulette TOP" />
    </>
  );
});
